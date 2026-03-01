import { externalLinks } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export default function V2LenderServices() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">
          Lenders &amp; Title Companies
        </p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight mb-8 max-w-2xl">
          Document fulfillment, simplified.
        </h1>
        <p className="text-stone-500 text-xl leading-relaxed max-w-xl mb-12">
          All resale certificates, demand statements, and HOA disclosure documents are processed through HomeWiseDocs — Colorado&apos;s leading document platform.
        </p>
        <a
          href={externalLinks.homeWiseDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-stone-900 hover:bg-emerald-600 text-white font-medium px-10 py-5 rounded-full text-lg transition-colors duration-300"
        >
          Order via HomeWiseDocs
          <ArrowUpRight size={20} />
        </a>
      </section>

      <section className="pb-32 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-stone-900 mb-6">Available Documents</h2>
            <ul className="space-y-3">
              {[
                "Resale Certificate / Status Letter",
                "Demand / Payoff Statement",
                "CC&Rs and Governing Documents",
                "Bylaws and Rules & Regulations",
                "Current Budget and Financial Statements",
                "Reserve Study",
                "Recent Meeting Minutes",
                "Insurance Certificate",
                "Litigation Disclosure",
              ].map((item) => (
                <li key={item} className="text-stone-500 text-sm flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-light text-stone-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "01", text: "Visit HomeWiseDocs.com and search for the community." },
                { step: "02", text: "Select the documents needed for your transaction." },
                { step: "03", text: "Complete the secure online order and payment." },
                { step: "04", text: "Receive your documents within the standard 5-business-day window, or faster with rush options." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-emerald-200 text-2xl font-light shrink-0 w-8">{item.step}</span>
                  <p className="text-stone-500 text-sm leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
