"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { violationSchema, type ViolationFormData } from "@/lib/schemas";
import { ViolationResolution } from "@/lib/types";
import { Upload, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V5Violations() {
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
    "w-full bg-white border rounded-lg px-4 py-2.5 text-[#1a2332] text-sm placeholder-[#cbd5e1] focus:outline-none focus:ring-2 transition-all",
    hasErr ? "border-red-300 focus:ring-red-100" : "border-[#e2e8f0] focus:ring-[#1e3a5f]/10 focus:border-[#1e3a5f]/40"
  );

  if (submitStatus === "success") return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Compliance</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Violation Response</h1>
      </div>
      <div className="p-8 flex items-center justify-center min-h-80">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={28} className="text-[#22c55e]" />
          </div>
          <h2 className="font-bold text-[#1a2332] text-xl mb-2">Submitted</h2>
          <p className="text-[#4a5568] text-sm mb-6">{statusMessage}</p>
          <button onClick={() => setSubmitStatus("idle")} className="text-sm font-medium text-[#e8640c] hover:underline">
            Submit another response
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Compliance</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Violation Response Form</h1>
      </div>

      <div className="p-8">
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 mb-6">
          <p className="text-[#4a5568] text-sm">
            Use this form to respond to a violation notice, request a board hearing, report an error, or submit a long-term correction plan. Submissions route to <strong className="text-[#1a2332]">compliance@pristinemanagement.com</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-2xl">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 space-y-4">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">Contact Information</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">First Name *</label>
                <input {...register("firstName")} className={inputClass(!!errors.firstName)} placeholder="Jane" />
                {errors.firstName && <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Last Name *</label>
                <input {...register("lastName")} className={inputClass(!!errors.lastName)} placeholder="Smith" />
                {errors.lastName && <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Email *</label>
                <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
                {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Phone *</label>
                <input {...register("phone")} type="tel" className={inputClass(!!errors.phone)} placeholder="(303) 555-0100" />
                {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4a5568] mb-1">Property Address *</label>
              <input {...register("propertyAddress")} className={inputClass(!!errors.propertyAddress)} placeholder="123 Main St, Denver, CO 80201" />
              {errors.propertyAddress && <p className="mt-1 text-red-500 text-xs">{errors.propertyAddress.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4a5568] mb-1">Community / HOA *</label>
              <input {...register("hoaName")} className={inputClass(!!errors.hoaName)} placeholder="Sunset Ridge HOA" />
              {errors.hoaName && <p className="mt-1 text-red-500 text-xs">{errors.hoaName.message}</p>}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">Resolution Type *</p>
            <div className="space-y-2">
              {Object.values(ViolationResolution).map((opt) => (
                <label key={opt} className="flex items-start gap-3 cursor-pointer group bg-[#fafbfc] border border-[#e2e8f0] rounded-lg px-4 py-3 hover:border-[#1e3a5f]/30 transition-colors">
                  <input type="radio" value={opt} {...register("resolution")} className="mt-0.5 accent-[#e8640c]" />
                  <span className="text-sm text-[#4a5568] group-hover:text-[#1a2332] transition-colors">{opt}</span>
                </label>
              ))}
            </div>
            {errors.resolution && <p className="mt-2 text-red-500 text-xs">{errors.resolution.message}</p>}
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 space-y-4">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">Additional Information</p>
            <div>
              <label className="block text-xs font-medium text-[#4a5568] mb-1">Additional Comments</label>
              <textarea {...register("additionalComments")} rows={3} className={cn(inputClass(false), "resize-none")} placeholder="Provide additional context or timeline..." />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#4a5568] mb-2">Photos / Documents</label>
              <div
                className="bg-[#fafbfc] border border-dashed border-[#e2e8f0] rounded-lg hover:border-[#1e3a5f]/40 transition-colors p-5 text-center cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                <Upload size={18} className="text-[#cbd5e1] mx-auto mb-2" />
                <p className="text-[#94a3b8] text-xs">Upload files (max 5 × 10MB each)</p>
                <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFiles} />
              </div>
              {files.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between text-xs text-[#4a5568] bg-[#f0f3f7] rounded-lg px-3 py-2">
                      {f.name}
                      <button type="button" onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}>
                        <X size={12} className="text-[#94a3b8] hover:text-red-400 transition-colors" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Submitting..." : "Submit Response"}
          </button>
          <p className="text-center text-xs text-[#94a3b8]">Routes to compliance@pristinemanagement.com</p>
        </form>
      </div>
    </div>
  );
}
