import { ExternalLink, FileText, Clock, CheckCircle } from "lucide-react";
import { externalLinks } from "@/lib/config";

export default function V1LenderServices() {
  return (
    <>
      <section className="bg-[#084870] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#1880A8]" />
            <span className="text-[#1880A8] text-xs uppercase tracking-[0.25em] font-semibold">
              For Lenders & Title Companies
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Lender Services</h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl">
            Streamlined resale certificate, demand statement, and HOA document fulfillment for mortgage professionals and title companies.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#084870] mb-6">
              Document Fulfillment via HomeWiseDocs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pristine Management partners with HomeWiseDocs to process all lender and title company document requests efficiently and compliantly. HomeWiseDocs is the leading platform for HOA document fulfillment in Colorado.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Through HomeWiseDocs you can request resale certificates, demand statements, governing documents, meeting minutes, financial statements, and all disclosure packages required for residential transactions.
            </p>
          </div>
          <div className="bg-[#eaf3f5] p-6 sm:p-8 border-l-4 border-[#1880A8]">
            <h3 className="font-serif text-xl font-bold text-[#084870] mb-5">
              Available Documents
            </h3>
            <ul className="space-y-3">
              {[
                "Resale Certificate / Status Letter",
                "Demand / Payoff Statement",
                "CC&Rs and Governing Documents",
                "Bylaws and Rules & Regulations",
                "Current Budget and Financial Statements",
                "Reserve Study",
                "Meeting Minutes (Recent)",
                "Insurance Certificate",
                "Litigation Disclosure",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <FileText size={14} className="text-[#1880A8] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16 bg-[#B0B0B0] border-2 border-[#9A9A9A] p-6 sm:p-8 md:p-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#084870]/70 mb-4">
            Primary Ordering Portal
          </p>
          <a
            href={externalLinks.homeWiseDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#0a1628] hover:bg-[#084070] text-white font-bold px-6 sm:px-10 py-4 sm:py-5 text-base transition-colors"
          >
            <ExternalLink size={18} />
            Order Documents via HomeWiseDocs
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Clock,
              title: "Fast Turnaround",
              desc: "Standard 5-business-day processing with rush options available for time-sensitive closings.",
            },
            {
              Icon: CheckCircle,
              title: "Compliant Documentation",
              desc: "All documents are prepared in compliance with Colorado HOA disclosure law (C.R.S. § 38-33.3-209).",
            },
            {
              Icon: ExternalLink,
              title: "Direct Platform Access",
              desc: "Order online 24/7 through HomeWiseDocs — no phone calls required. Track your order status in real time.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="border border-gray-200 p-6 hover:border-[#1880A8] transition-colors">
              <div className="w-10 h-10 bg-[#084870] flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#1880A8]" />
              </div>
              <h4 className="font-serif font-bold text-[#084870] mb-2">{title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

