"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function V1Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus("success");
        setStatusMessage(json.message);
        reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(json.message ?? "Submission failed.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("An unexpected error occurred.");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full border px-4 py-3 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors",
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:border-[#c9a84c] focus:ring-[#c9a84c]"
    );

  return (
    <>
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#0a1628] mb-6">
              Reach Our Team
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-[#0a1628] hover:text-[#c9a84c] transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-[#0a1628] hover:text-[#c9a84c] transition-colors break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Location</p>
                  <p className="text-[#0a1628]">Denver Metro Area, Colorado</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-[#f7f5f0] border-l-4 border-[#c9a84c] p-5">
              <p className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold mb-2">Response Time</p>
              <p className="text-sm text-gray-700">
                We respond to all inquiries within one business day. For urgent matters, please call our office directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitStatus === "success" ? (
              <div className="text-center py-16">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-[#0a1628] mb-3">Message Sent</h3>
                <p className="text-gray-600 mb-8">{statusMessage}</p>
                <button onClick={() => setSubmitStatus("idle")} className="bg-[#0a1628] text-white font-semibold px-8 py-3 hover:bg-[#c9a84c] hover:text-[#0a1628] transition-colors">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">First Name *</label>
                    <input {...register("firstName")} className={inputClass(!!errors.firstName)} placeholder="Jane" />
                    {errors.firstName && <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">Last Name *</label>
                    <input {...register("lastName")} className={inputClass(!!errors.lastName)} placeholder="Smith" />
                    {errors.lastName && <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">Email *</label>
                    <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
                    {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">Phone</label>
                    <input {...register("phone")} type="tel" className={inputClass(false)} placeholder="(303) 555-0100" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">Subject *</label>
                  <input {...register("subject")} className={inputClass(!!errors.subject)} placeholder="How can we help?" />
                  {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a1628] mb-1.5">Message *</label>
                  <textarea {...register("message")} rows={5} className={inputClass(!!errors.message)} placeholder="Tell us about your community and how we can help..." />
                  {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
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
                  className="w-full bg-[#0a1628] hover:bg-[#c9a84c] text-white hover:text-[#0a1628] font-semibold py-4 transition-colors duration-200 disabled:opacity-60"
                >
                  {submitStatus === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
