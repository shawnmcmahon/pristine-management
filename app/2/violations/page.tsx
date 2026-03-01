"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { violationSchema, type ViolationFormData } from "@/lib/schemas";
import { ViolationResolution } from "@/lib/types";
import { Upload, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V2Violations() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ViolationFormData>({
    resolver: zodResolver(violationSchema),
  });

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []).filter((f) => f.size <= 10 * 1024 * 1024);
    setFiles((prev) => [...prev, ...selected].slice(0, 5));
  };

  const onSubmit = async (data: ViolationFormData) => {
    setSubmitStatus("loading");
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => v && fd.append(k, v as string));
      files.forEach((f) => fd.append("files", f));
      const res = await fetch("/api/violations", { method: "POST", body: fd });
      const json = await res.json();
      if (json.success) { setSubmitStatus("success"); setStatusMessage(json.message); reset(); setFiles([]); }
      else { setSubmitStatus("error"); setStatusMessage(json.message); }
    } catch { setSubmitStatus("error"); setStatusMessage("An unexpected error occurred."); }
  };

  const field = (hasErr: boolean) => cn(
    "w-full border-b py-3 text-stone-800 text-sm placeholder-stone-300 focus:outline-none transition-colors bg-transparent",
    hasErr ? "border-red-300 focus:border-red-500" : "border-stone-200 focus:border-emerald-500"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-6" />
        <h2 className="text-3xl font-light text-stone-900 mb-4">Submitted successfully.</h2>
        <p className="text-stone-500 mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-sm font-medium text-emerald-600 hover:underline">
          Submit another response
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">Compliance</p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight max-w-2xl">
          Respond to a violation notice.
        </h1>
      </section>

      <section className="pb-32 max-w-2xl mx-auto px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <input {...register("firstName")} className={field(!!errors.firstName)} placeholder="First Name *" />
              {errors.firstName && <p className="mt-1 text-red-400 text-xs">{errors.firstName.message}</p>}
            </div>
            <div>
              <input {...register("lastName")} className={field(!!errors.lastName)} placeholder="Last Name *" />
              {errors.lastName && <p className="mt-1 text-red-400 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <input {...register("email")} type="email" className={field(!!errors.email)} placeholder="Email Address *" />
              {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>}
            </div>
            <div>
              <input {...register("phone")} type="tel" className={field(!!errors.phone)} placeholder="Phone Number *" />
              {errors.phone && <p className="mt-1 text-red-400 text-xs">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <input {...register("propertyAddress")} className={field(!!errors.propertyAddress)} placeholder="Property Address *" />
            {errors.propertyAddress && <p className="mt-1 text-red-400 text-xs">{errors.propertyAddress.message}</p>}
          </div>
          <div>
            <input {...register("hoaName")} className={field(!!errors.hoaName)} placeholder="Community / HOA Name *" />
            {errors.hoaName && <p className="mt-1 text-red-400 text-xs">{errors.hoaName.message}</p>}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-4">Resolution *</p>
            <div className="space-y-3">
              {Object.values(ViolationResolution).map((opt) => (
                <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                  <input type="radio" value={opt} {...register("resolution")} className="mt-0.5 accent-emerald-600" />
                  <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.resolution && <p className="mt-2 text-red-400 text-xs">{errors.resolution.message}</p>}
          </div>

          <div>
            <textarea {...register("additionalComments")} rows={4} className={cn(field(false), "resize-none")} placeholder="Additional Comments (optional)" />
          </div>

          <div>
            <div
              className="border border-dashed border-stone-200 hover:border-emerald-400 transition-colors rounded-xl p-8 text-center cursor-pointer"
              onClick={() => fileRef.current?.click()}
            >
              <Upload size={20} className="text-stone-300 mx-auto mb-2" />
              <p className="text-sm text-stone-400">Upload photos or documents (max 5, 10MB each)</p>
              <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFiles} />
            </div>
            {files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between text-sm text-stone-600 bg-stone-50 rounded-lg px-4 py-2">
                    {f.name}
                    <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}>
                      <X size={14} className="text-stone-300 hover:text-red-400 transition-colors" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {submitStatus === "error" && (
            <p className="text-red-500 text-sm">{statusMessage}</p>
          )}

          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-stone-900 hover:bg-emerald-600 text-white font-medium py-4 rounded-full transition-colors duration-300 disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Submitting..." : "Submit Response"}
          </button>

          <p className="text-center text-xs text-stone-400">
            Routed to compliance@pristinemanagement.com
          </p>
        </form>
      </section>
    </>
  );
}
