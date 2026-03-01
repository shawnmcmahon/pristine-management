"use client";
import { useState } from "react";
import { faqs } from "@/lib/content/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V4FAQ() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="bg-[#2c2417] text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            FAQ
          </div>
          <h1 className="font-serif text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70">Honest answers to the questions communities ask most.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className={cn(
              "bg-white rounded-2xl border transition-all duration-300",
              active === faq.id ? "border-[#c4622d]/40 shadow-sm" : "border-[#e8dfd0]"
            )}>
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className={cn(
                  "font-serif font-semibold transition-colors",
                  active === faq.id ? "text-[#c4622d]" : "text-[#2c2417]"
                )}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-[#c4622d] shrink-0 transition-transform duration-300",
                    active === faq.id ? "rotate-180" : ""
                  )}
                />
              </button>
              {active === faq.id && (
                <div className="px-6 pb-6 text-[#5a4a38] text-sm leading-relaxed border-t border-[#f5f0e8] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
