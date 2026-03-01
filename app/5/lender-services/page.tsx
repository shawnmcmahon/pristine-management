import { externalLinks } from "@/lib/config";
import { ArrowUpRight, FileText } from "lucide-react";

export default function V5LenderServices() {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Lenders & Title</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Lender Services</h1>
      </div>

      <div className="p-8 space-y-6">
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-2">Document Platform</p>
              <h2 className="text-xl font-bold text-[#1a2332] mb-2">HomeWiseDocs Integration</h2>
              <p className="text-[#4a5568] text-sm leading-relaxed max-w-lg">
                All document requests for Pristine Management communities are fulfilled through HomeWiseDocs — Colorado&apos;s trusted HOA document platform. Order online 24/7 with standard 5-business-day turnaround and rush options available.
              </p>
            </div>
            <a
              href={externalLinks.homeWiseDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Order Documents <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
            <p className="font-semibold text-[#1a2332] mb-4">Available Documents</p>
            <ul className="space-y-2.5">
              {[
                "Resale Certificate / Status Letter",
                "Demand / Payoff Statement",
                "CC&Rs and Governing Documents",
                "Bylaws and Rules & Regulations",
                "Current Budget and Financials",
                "Reserve Study",
                "Recent Meeting Minutes",
                "Insurance Certificate",
                "Litigation Disclosure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#4a5568]">
                  <FileText size={13} className="text-[#e8640c] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {[
              { title: "Turnaround Time", body: "Standard 5 business days. Rush processing available for time-sensitive closings." },
              { title: "Colorado Compliant", body: "All documents satisfy C.R.S. § 38-33.3-209 disclosure requirements." },
              { title: "24/7 Ordering", body: "Place, pay for, and track your document order online any time through HomeWiseDocs." },
              { title: "Questions?", body: "Contact our office for guidance on specific document requirements for your transaction." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] px-5 py-4">
                <p className="font-semibold text-sm text-[#1a2332] mb-1">{item.title}</p>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
