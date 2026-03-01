"use client";
import { useState } from "react";
import { faqs } from "@/lib/content/faq";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V2FAQ() {
  const [active, setActive] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <>
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">Knowledge Base</p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight">
          Questions, answered.
        </h1>
      </section>

      <section className="pb-32 max-w-3xl mx-auto px-8">
        <div className="space-y-px">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-stone-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className={cn(
                  "font-medium transition-colors",
                  active === faq.id ? "text-emerald-600" : "text-stone-900"
                )}>
                  {faq.question}
                </span>
                <span className="shrink-0 text-stone-400">
                  {active === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {active === faq.id && (
                <div className="px-6 pb-6 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
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
