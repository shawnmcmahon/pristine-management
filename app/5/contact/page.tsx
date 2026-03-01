"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/lib/config";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V5Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (json.success) { setSubmitStatus("success"); setStatusMessage(json.message); reset(); }
      else { setSubmitStatus("error"); setStatusMessage(json.message); }
    } catch { setSubmitStatus("error"); setStatusMessage("An unexpected error occurred."); }
  };

  const inputClass = (hasErr: boolean) => cn(
    "w-full bg-white border rounded-lg px-4 py-2.5 text-[#1a2332] text-sm placeholder-[#cbd5e1] focus:outline-none focus:ring-2 transition-all",
    hasErr ? "border-red-300 focus:ring-red-100" : "border-[#e2e8f0] focus:ring-[#1e3a5f]/10 focus:border-[#1e3a5f]/40"
  );

  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Reach Us</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Contact</h1>
      </div>

      <div className="p-8 space-y-6">
        {/* Contact info cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { Icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
            { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { Icon: MapPin, label: "Service Area", value: "Denver Metro, Colorado", href: null },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#e8640c]/10 rounded-lg flex items-center justify-center shrink-0">
                <item.Icon size={16} className="text-[#e8640c]" />
              </div>
              <div>
                <p className="text-[#94a3b8] text-[10px] uppercase tracking-wider font-medium">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-[#1a2332] text-sm font-medium hover:text-[#e8640c] transition-colors">{item.value}</a>
                ) : (
                  <p className="text-[#1a2332] text-sm font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {submitStatus === "success" ? (
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-8 flex flex-col items-center text-center max-w-lg">
            <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle size={26} className="text-[#22c55e]" />
            </div>
            <h2 className="font-bold text-[#1a2332] mb-2">Message Sent</h2>
            <p className="text-[#4a5568] text-sm mb-5">{statusMessage}</p>
            <button onClick={() => setSubmitStatus("idle")} className="text-sm font-medium text-[#e8640c] hover:underline">
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 max-w-2xl">
            <p className="font-semibold text-[#1a2332] mb-5">Send a Message</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Email *</label>
                <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
                {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Subject *</label>
                <input {...register("subject")} className={inputClass(!!errors.subject)} placeholder="How can we help?" />
                {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4a5568] mb-1">Message *</label>
                <textarea {...register("message")} rows={4} className={cn(inputClass(!!errors.message), "resize-none")} placeholder="Tell us about your community..." />
                {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
              </div>
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">{statusMessage}</div>
              )}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
              >
                {submitStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
