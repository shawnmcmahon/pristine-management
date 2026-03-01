import { externalLinks } from "@/lib/config";
import { ExternalLink, FileText } from "lucide-react";

export default function V4LenderServices() {
  return (
    <>
      <section className="bg-[#2c2417] text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            For Lenders & Title Companies
          </div>
          <h1 className="font-serif text-5xl font-bold mb-4">Lender Services</h1>
          <p className="text-white/70">Streamlined document fulfillment for Colorado real estate transactions.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl border border-[#e8dfd0] p-10 mb-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#2c2417] mb-4">
                Document Orders via HomeWiseDocs
              </h2>
              <p className="text-[#5a4a38] leading-relaxed mb-6">
                All resale certificates, demand statements, and disclosure packages for Pristine Management communities are available through HomeWiseDocs — Colorado&apos;s trusted HOA document platform.
              </p>
              <a
                href={externalLinks.homeWiseDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c4622d] hover:bg-[#b05626] text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                <ExternalLink size={18} />
                Order on HomeWiseDocs
              </a>
            </div>
            <div className="bg-[#f5f0e8] rounded-2xl p-8">
              <h3 className="font-serif font-bold text-[#2c2417] mb-5">Available Documents</h3>
              <ul className="space-y-3">
                {[
                  "Resale Certificate",
                  "Demand / Payoff Statement",
                  "CC&Rs and Governing Documents",
                  "Bylaws and Rules",
                  "Budget and Financials",
                  "Reserve Study",
                  "Meeting Minutes",
                  "Insurance Certificate",
                  "Litigation Disclosure",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#5a4a38]">
                    <FileText size={13} className="text-[#c4622d] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "5-Day Turnaround", desc: "Standard processing with rush options for time-sensitive closings." },
            { title: "Colorado Compliant", desc: "All documents meet C.R.S. § 38-33.3-209 disclosure requirements." },
            { title: "24/7 Online Ordering", desc: "Order, pay, and track your documents through HomeWiseDocs anytime." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-6 border border-[#e8dfd0] text-center">
              <h4 className="font-serif font-bold text-[#2c2417] mb-2">{item.title}</h4>
              <p className="text-[#5a4a38] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
