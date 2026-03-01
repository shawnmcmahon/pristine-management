"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/lib/config";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V3Contact() {
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
    "w-full bg-[#0a0d10] border px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none transition-colors",
    hasErr ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-[#00e5ff]"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <CheckCircle size={48} className="text-[#00e5ff] mx-auto mb-6" />
        <h2 className="font-black text-4xl uppercase text-white mb-4">Message Sent.</h2>
        <p className="text-white/50 mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-[#00e5ff] text-xs uppercase tracking-widest font-bold hover:underline">Send Another</button>
      </div>
    </div>
  );

  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Get in Touch</span>
        <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none">
          CONTACT<br />
          <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">US</span>
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <div className="space-y-8">
            <div>
              <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-2">Phone</p>
              <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-[#00e5ff] transition-colors">{siteConfig.phone}</a>
            </div>
            <div>
              <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-2">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-[#00e5ff] transition-colors break-all text-sm">{siteConfig.email}</a>
            </div>
            <div>
              <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-2">Service Area</p>
              <p className="text-white/60 text-sm">Colorado Front Range & Denver Metro</p>
            </div>
            <div className="border border-white/10 p-6">
              <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-2">Response Time</p>
              <p className="text-white/60 text-sm">Within 1 business day</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 space-y-5">
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
          <div>
            <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="Email Address *" />
            {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>}
          </div>
          <div>
            <input {...register("subject")} className={inputClass(!!errors.subject)} placeholder="Subject *" />
            {errors.subject && <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>}
          </div>
          <div>
            <textarea {...register("message")} rows={5} className={cn(inputClass(!!errors.message), "resize-none")} placeholder="Your message *" />
            {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>}
          </div>
          {submitStatus === "error" && <p className="text-red-400 text-sm">{statusMessage}</p>}
          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-black uppercase tracking-widest py-4 text-sm transition-colors disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
