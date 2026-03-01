"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { siteConfig } from "@/lib/config";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V2Contact() {
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

  const field = (hasErr: boolean) => cn(
    "w-full border-b py-3 text-stone-800 text-sm placeholder-stone-300 focus:outline-none transition-colors bg-transparent",
    hasErr ? "border-red-300 focus:border-red-500" : "border-stone-200 focus:border-emerald-500"
  );

  if (submitStatus === "success") return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-6" />
        <h2 className="text-3xl font-light text-stone-900 mb-4">Message sent.</h2>
        <p className="text-stone-500 mb-8">{statusMessage}</p>
        <button onClick={() => setSubmitStatus("idle")} className="text-sm font-medium text-emerald-600 hover:underline">Send another message</button>
      </div>
    </div>
  );

  return (
    <>
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">Contact</p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight mb-6">Let&apos;s talk.</h1>
        <p className="text-stone-500 text-xl">We respond to every inquiry within one business day.</p>
      </section>

      <section className="pb-32 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">
        <div>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Phone</p>
              <a href={`tel:${siteConfig.phone}`} className="text-stone-800 hover:text-emerald-600 transition-colors">{siteConfig.phone}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-stone-800 hover:text-emerald-600 transition-colors break-all">{siteConfig.email}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Location</p>
              <p className="text-stone-800">Denver Metro Area, Colorado</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          <div>
            <input {...register("email")} type="email" className={field(!!errors.email)} placeholder="Email Address *" />
            {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>}
          </div>
          <div>
            <input {...register("subject")} className={field(!!errors.subject)} placeholder="Subject *" />
            {errors.subject && <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>}
          </div>
          <div>
            <textarea {...register("message")} rows={5} className={cn(field(!!errors.message), "resize-none")} placeholder="Your message *" />
            {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>}
          </div>
          {submitStatus === "error" && <p className="text-red-500 text-sm">{statusMessage}</p>}
          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-stone-900 hover:bg-emerald-600 text-white font-medium py-4 rounded-full transition-colors duration-300 disabled:opacity-50"
          >
            {submitStatus === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
