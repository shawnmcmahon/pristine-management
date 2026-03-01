"use client";
import { useState } from "react";
import { faqs } from "@/lib/content/faq";
import { cn } from "@/lib/utils";

export default function V3FAQ() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">FAQ</span>
        <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none">
          ANSWERS
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-4xl mx-auto">
        <div className="divide-y divide-white/10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                <span className={cn(
                  "font-bold uppercase text-sm tracking-wide transition-colors",
                  active === faq.id ? "text-[#00e5ff]" : "text-white/80 group-hover:text-white"
                )}>
                  {faq.question}
                </span>
                <span className={cn(
                  "text-2xl font-light shrink-0 transition-transform duration-300",
                  active === faq.id ? "text-[#00e5ff] rotate-45" : "text-white/30"
                )}>+</span>
              </button>
              {active === faq.id && (
                <div className="pb-6 pl-0 text-white/50 text-sm leading-relaxed border-l-2 border-[#00e5ff] pl-4">
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
