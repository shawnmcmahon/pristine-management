"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { violationSchema, type ViolationFormData } from "@/lib/schemas";
import { ViolationResolution } from "@/lib/types";
import { Upload, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V4Violations() {
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
    "w-full bg-white border rounded-xl px-4 py-3 text-[#2c2417] text-sm placeholder-[#c9b99a] focus:outline-none focus:ring-2 transition-all",
    hasErr ? "border-red-300 focus:ring-red-200" : "border-[#e8dfd0] focus:ring-[#c4622d]/20 focus:border-[#c4622d]/50"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#2c6e49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-[#2c6e49]" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-[#2c2417] mb-4">Response Received</h2>
        <p className="text-[#5a4a38] mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-[#c4622d] font-semibold hover:underline text-sm">
          Submit another response
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-[#2c2417] text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            Compliance Response
          </div>
          <h1 className="font-serif text-5xl font-bold mb-4">Violation Response</h1>
          <p className="text-white/70">Respond to your notice, request a hearing, or submit a correction plan.</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">First Name *</label>
              <input {...register("firstName")} className={inputClass(!!errors.firstName)} placeholder="Jane" />
              {errors.firstName && <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Last Name *</label>
              <input {...register("lastName")} className={inputClass(!!errors.lastName)} placeholder="Smith" />
              {errors.lastName && <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Email *</label>
              <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
              {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Phone *</label>
              <input {...register("phone")} type="tel" className={inputClass(!!errors.phone)} placeholder="(303) 555-0100" />
              {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Property Address *</label>
            <input {...register("propertyAddress")} className={inputClass(!!errors.propertyAddress)} placeholder="123 Main St, Denver, CO 80201" />
            {errors.propertyAddress && <p className="mt-1 text-red-500 text-xs">{errors.propertyAddress.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Community / HOA *</label>
            <input {...register("hoaName")} className={inputClass(!!errors.hoaName)} placeholder="Sunset Ridge HOA" />
            {errors.hoaName && <p className="mt-1 text-red-500 text-xs">{errors.hoaName.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-3">Resolution *</label>
            <div className="space-y-3">
              {Object.values(ViolationResolution).map((opt) => (
                <label key={opt} className="flex items-start gap-3 cursor-pointer group bg-white border border-[#e8dfd0] rounded-xl px-4 py-3 hover:border-[#c4622d]/40 transition-colors">
                  <input type="radio" value={opt} {...register("resolution")} className="mt-0.5 accent-[#c4622d]" />
                  <span className="text-sm text-[#5a4a38] group-hover:text-[#2c2417] transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.resolution && <p className="mt-2 text-red-500 text-xs">{errors.resolution.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Additional Comments</label>
            <textarea {...register("additionalComments")} rows={4} className={cn(inputClass(false), "resize-none")} placeholder="Share any additional details or context..." />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Photos / Documents</label>
            <div
              className="bg-white border-2 border-dashed border-[#e8dfd0] rounded-xl hover:border-[#c4622d]/40 transition-colors p-8 text-center cursor-pointer"
              onClick={() => fileRef.current?.click()}
            >
              <Upload size={22} className="text-[#c9b99a] mx-auto mb-2" />
              <p className="text-[#5a4a38] text-sm">Click to upload (max 5 files, 10MB each)</p>
              <p className="text-[#c9b99a] text-xs mt-1">JPEG, PNG, PDF</p>
              <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFiles} />
            </div>
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between bg-white border border-[#e8dfd0] rounded-lg px-4 py-2 text-sm text-[#5a4a38]">
                    {f.name}
                    <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}>
                      <X size={14} className="text-[#c9b99a] hover:text-red-400 transition-colors" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {submitStatus === "error" && <p className="text-red-500 text-sm">{statusMessage}</p>}
          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-[#c4622d] hover:bg-[#b05626] text-white font-bold py-4 rounded-full transition-colors disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Submitting..." : "Submit Response"}
          </button>
          <p className="text-center text-xs text-[#c9b99a]">Routed to compliance@pristinemanagement.com</p>
        </form>
      </section>
    </>
  );
}
