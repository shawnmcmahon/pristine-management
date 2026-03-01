import { externalLinks } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export default function V3LenderServices() {
  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Lender Services</span>
        <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none">
          DOCUMENT<br />
          <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">FULFILLMENT</span>
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            All resale certificates, demand statements, and HOA disclosure documents for Pristine Management communities are processed through HomeWiseDocs — Colorado&apos;s leading document fulfillment platform.
          </p>
          <a
            href={externalLinks.homeWiseDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-black px-10 py-5 uppercase tracking-widest text-sm transition-colors"
          >
            Order on HomeWiseDocs
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div>
          <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-6">Available Documents</p>
          <ul className="space-y-3">
            {[
              "Resale Certificate / Status Letter",
              "Demand / Payoff Statement",
              "Governing Documents (CC&Rs, Bylaws)",
              "Current Budget & Financial Statements",
              "Reserve Study",
              "Meeting Minutes",
              "Insurance Certificate",
              "Litigation Disclosure",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-white/60 text-sm">
                <span className="text-[#00e5ff]/40 font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border border-white/10 p-6">
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-2">Turnaround</p>
            <p className="text-white text-sm">Standard 5-business-day processing. Rush options available.</p>
          </div>
        </div>
      </section>
    </>
  );
}
