"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { violationSchema, type ViolationFormData } from "@/lib/schemas";
import { ViolationResolution } from "@/lib/types";
import { Upload, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V3Violations() {
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

  const inputClass = (hasErr: boolean) => cn(
    "w-full bg-[#0a0d10] border px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none transition-colors",
    hasErr ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-[#00e5ff]"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <CheckCircle size={48} className="text-[#00e5ff] mx-auto mb-6" />
        <h2 className="font-black text-4xl uppercase text-white mb-4">Submitted.</h2>
        <p className="text-white/50 mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-[#00e5ff] text-xs uppercase tracking-widest font-bold hover:underline">
          Submit Another
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Compliance</span>
        <h1 className="font-black text-7xl md:text-8xl uppercase text-white mt-4 leading-none">
          VIOLATION<br />
          <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">RESPONSE</span>
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input {...register("firstName")} className={inputClass(!!errors.firstName)} placeholder="First Name *" />
              {errors.firstName && <p className="mt-1 text-red-400 text-xs">{errors.firstName.message}</p>}
            </div>
            <div>
              <input {...register("lastName")} className={inputClass(!!errors.lastName)} placeholder="Last Name *" />
              {errors.lastName && <p className="mt-1 text-red-400 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="Email *" />
              {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>}
            </div>
            <div>
              <input {...register("phone")} type="tel" className={inputClass(!!errors.phone)} placeholder="Phone *" />
              {errors.phone && <p className="mt-1 text-red-400 text-xs">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <input {...register("propertyAddress")} className={inputClass(!!errors.propertyAddress)} placeholder="Property Address *" />
            {errors.propertyAddress && <p className="mt-1 text-red-400 text-xs">{errors.propertyAddress.message}</p>}
          </div>
          <div>
            <input {...register("hoaName")} className={inputClass(!!errors.hoaName)} placeholder="Community / HOA *" />
            {errors.hoaName && <p className="mt-1 text-red-400 text-xs">{errors.hoaName.message}</p>}
          </div>

          <div>
            <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-4">Resolution *</p>
            <div className="space-y-3">
              {Object.values(ViolationResolution).map((opt) => (
                <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                  <input type="radio" value={opt} {...register("resolution")} className="mt-0.5 accent-[#00e5ff]" />
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.resolution && <p className="mt-2 text-red-400 text-xs">{errors.resolution.message}</p>}
          </div>

          <div>
            <textarea {...register("additionalComments")} rows={4} className={cn(inputClass(false), "resize-none")} placeholder="Additional Comments" />
          </div>

          <div>
            <div
              className="border border-dashed border-white/15 hover:border-[#00e5ff]/50 transition-colors p-8 text-center cursor-pointer"
              onClick={() => fileRef.current?.click()}
            >
              <Upload size={20} className="text-white/20 mx-auto mb-2" />
              <p className="text-white/30 text-sm">Upload photos / documents (max 5 × 10MB)</p>
              <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFiles} />
            </div>
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between text-sm text-white/60 bg-white/5 px-4 py-2">
                    {f.name}
                    <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}>
                      <X size={14} className="text-white/30 hover:text-red-400 transition-colors" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {submitStatus === "error" && <p className="text-red-400 text-sm">{statusMessage}</p>}

          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-black uppercase tracking-widest py-4 text-sm transition-colors disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Submitting..." : "Submit Violation Response"}
          </button>
          <p className="text-center text-[#00e5ff]/30 text-xs uppercase tracking-widest">
            Routes to compliance@pristinemanagement.com
          </p>
        </form>
      </section>
    </>
  );
}
