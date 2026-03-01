"use client";
import { useState } from "react";
import { faqs } from "@/lib/content/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function V5FAQ() {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "metro", label: "Metro District" },
    { id: "hoa", label: "HOA" },
    { id: "financial", label: "Financial" },
    { id: "portal", label: "Portal" },
    { id: "general", label: "General" },
  ];

  const filtered = filter === "all" ? faqs : faqs.filter((f) => f.category === filter);

  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Knowledge Base</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Frequently Asked Questions</h1>
      </div>

      <div className="p-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                filter === c.id
                  ? "bg-[#1e3a5f] text-white"
                  : "bg-white border border-[#e2e8f0] text-[#4a5568] hover:bg-[#f0f3f7]"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((faq) => (
            <div key={faq.id} className={cn(
              "bg-white rounded-xl border transition-all",
              active === faq.id ? "border-[#1e3a5f]/40" : "border-[#e2e8f0]"
            )}>
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-sm text-[#1a2332]">{faq.question}</span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "shrink-0 text-[#94a3b8] transition-transform duration-300",
                    active === faq.id ? "rotate-180 text-[#e8640c]" : ""
                  )}
                />
              </button>
              {active === faq.id && (
                <div className="px-5 pb-4 text-[#4a5568] text-sm leading-relaxed border-t border-[#f0f3f7] pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
