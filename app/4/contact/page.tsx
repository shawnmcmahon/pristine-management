"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/lib/config";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V4Contact() {
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
    "w-full bg-white border rounded-xl px-4 py-3 text-[#2c2417] text-sm placeholder-[#c9b99a] focus:outline-none focus:ring-2 transition-all",
    hasErr ? "border-red-300 focus:ring-red-200" : "border-[#e8dfd0] focus:ring-[#c4622d]/20 focus:border-[#c4622d]/50"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-[#2c6e49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-[#2c6e49]" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-[#2c2417] mb-4">Message Sent!</h2>
        <p className="text-[#5a4a38] mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-[#c4622d] font-semibold hover:underline text-sm">Send another message</button>
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-[#2c2417] text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            Let&apos;s Connect
          </div>
          <h1 className="font-serif text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/70">We&apos;d love to hear from you. Every inquiry gets a personal response.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-serif text-2xl font-bold text-[#2c2417] mb-8">Contact Information</h2>
          <div className="space-y-5">
            {[
              { Icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { Icon: MapPin, label: "Service Area", value: "Denver Metro, Colorado", href: null },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#c4622d]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <item.Icon size={16} className="text-[#c4622d]" />
                </div>
                <div>
                  <p className="text-xs text-[#c9b99a] uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[#2c2417] text-sm hover:text-[#c4622d] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-[#2c2417] text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl border border-[#e8dfd0] p-5">
            <p className="text-xs text-[#c4622d] uppercase tracking-widest font-semibold mb-2">Response Time</p>
            <p className="text-[#5a4a38] text-sm">We respond to every inquiry within one business day. For urgent matters, please call.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-4">
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
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Email *</label>
            <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="jane@example.com" />
            {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Subject *</label>
            <input {...register("subject")} className={inputClass(!!errors.subject)} placeholder="How can we help?" />
            {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#5a4a38] uppercase tracking-wider mb-1.5">Message *</label>
            <textarea {...register("message")} rows={5} className={cn(inputClass(!!errors.message), "resize-none")} placeholder="Tell us about your community..." />
            {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
          </div>
          {submitStatus === "error" && <p className="text-red-500 text-sm">{statusMessage}</p>}
          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-[#c4622d] hover:bg-[#b05626] text-white font-bold py-4 rounded-full transition-colors disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
