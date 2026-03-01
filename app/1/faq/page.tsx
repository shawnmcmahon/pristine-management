"use client";
import { useState } from "react";
import { faqs } from "@/lib/content/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Questions" },
  { id: "metro", label: "Metro Districts" },
  { id: "hoa", label: "Traditional HOA" },
  { id: "financial", label: "Financial" },
  { id: "portal", label: "Homeowner Portal" },
  { id: "general", label: "General" },
];

export default function V1FAQ() {
  const [active, setActive] = useState<string | null>(null);
  const [category, setCategory] = useState("all");

  const filtered = category === "all" ? faqs : faqs.filter((f) => f.category === category);

  return (
    <>
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Knowledge Base
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Clear answers to common questions about HOA management, Metro Districts, and how Pristine Management serves your community.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium border transition-colors duration-200",
                category === cat.id
                  ? "bg-[#0a1628] text-white border-[#0a1628]"
                  : "border-gray-300 text-gray-600 hover:border-[#c9a84c] hover:text-[#0a1628]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200">
          {filtered.map((faq) => (
            <div key={faq.id} className="py-5">
              <button
                onClick={() => setActive(active === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className="font-serif text-lg font-semibold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "shrink-0 text-[#c9a84c] transition-transform duration-300",
                    active === faq.id ? "rotate-180" : ""
                  )}
                />
              </button>
              {active === faq.id && (
                <div className="mt-4 pl-0 pr-8 text-gray-600 text-sm leading-relaxed border-l-2 border-[#c9a84c] pl-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-10">No questions in this category yet.</p>
        )}
      </section>
    </>
  );
}
