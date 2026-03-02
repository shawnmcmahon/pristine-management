"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { violationSchema, type ViolationFormData } from "@/lib/schemas";
import { ViolationResolution } from "@/lib/types";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const resolutionOptions = Object.values(ViolationResolution);

export default function V1Violations() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ViolationFormData>({
    resolver: zodResolver(violationSchema),
  });

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []).filter(
      (f) => f.size <= 10 * 1024 * 1024
    );
    setFiles((prev) => [...prev, ...selected].slice(0, 5));
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const onSubmit = async (data: ViolationFormData) => {
    setSubmitStatus("loading");
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => v && fd.append(k, v as string));
      files.forEach((f) => fd.append("files", f));

      const res = await fetch("/api/violations", { method: "POST", body: fd });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus("success");
        setStatusMessage(json.message);
        reset();
        setFiles([]);
      } else {
        setSubmitStatus("error");
        setStatusMessage(json.message ?? "Submission failed. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("An unexpected error occurred. Please try again.");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full border px-4 py-3 text-sm text-[#084870] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors",
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:border-[#1880A8] focus:ring-[#1880A8]"
    );

  return (
    <>
      <section className="bg-[#084870] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#1880A8]" />
            <span className="text-[#1880A8] text-xs uppercase tracking-[0.25em] font-semibold">
              Compliance
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Violation Response Form</h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl">
            Respond to a violation notice, request a hearing, report an error, or submit a long-term correction plan.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {submitStatus === "success" ? (
          <div className="text-center py-16">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-[#084870] mb-3">
              Submission Received
            </h2>
            <p className="text-gray-600 mb-8">{statusMessage}</p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="w-full sm:w-auto bg-[#084870] text-white font-semibold px-8 py-3 hover:bg-[#1880A8] hover:text-[#084870] transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                  First Name *
                </label>
                <input {...register("firstName")} className={inputClass(!!errors.firstName)} placeholder="Jane" />
                {errors.firstName && <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                  Last Name *
                </label>
                <input {...register("lastName")} className={inputClass(!!errors.lastName)} placeholder="Smith" />
                {errors.lastName && <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                  Email Address *
                </label>
                <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
                {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                  Phone Number *
                </label>
                <input {...register("phone")} type="tel" className={inputClass(!!errors.phone)} placeholder="(303) 555-0100" />
                {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                Property Address *
              </label>
              <input {...register("propertyAddress")} className={inputClass(!!errors.propertyAddress)} placeholder="123 Main St, Denver, CO 80201" />
              {errors.propertyAddress && <p className="mt-1 text-red-500 text-xs">{errors.propertyAddress.message}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                Homeowners Association / Community *
              </label>
              <input {...register("hoaName")} className={inputClass(!!errors.hoaName)} placeholder="Sunset Ridge HOA" />
              {errors.hoaName && <p className="mt-1 text-red-500 text-xs">{errors.hoaName.message}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-3">
                Resolution *
              </label>
              <div className="space-y-3">
                {resolutionOptions.map((opt) => (
                  <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      value={opt}
                      {...register("resolution")}
                      className="mt-0.5 accent-[#1880A8]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#084870] transition-colors">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
              {errors.resolution && (
                <p className="mt-2 text-red-500 text-xs">{errors.resolution.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                Additional Comments
              </label>
              <textarea
                {...register("additionalComments")}
                rows={4}
                className={inputClass(false)}
                placeholder="Provide any additional context, timeline, or details..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#084870] mb-1.5">
                Photos / Supporting Documents
              </label>
              <div
                className="border-2 border-dashed border-gray-300 hover:border-[#1880A8] transition-colors p-6 text-center cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                <Upload size={24} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  JPEG, PNG, PDF up to 10MB each (max 5 files)
                </p>
                <input
                  ref={fileRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={handleFiles}
                />
              </div>
              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between bg-[#eaf3f5] px-4 py-2 text-sm">
                      <span className="text-[#084870] truncate">{f.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="ml-3 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 p-3">
                <AlertCircle size={16} />
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full bg-[#084870] hover:bg-[#1880A8] text-white hover:text-[#084870] font-semibold py-4 transition-colors duration-200 disabled:opacity-60"
            >
              {submitStatus === "loading" ? "Submitting..." : "Submit Violation Response"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Submissions are routed to compliance@pristinemanagement.com
            </p>
          </form>
        )}
      </section>
    </>
  );
}

