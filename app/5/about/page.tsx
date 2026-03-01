import { company } from "@/lib/content/company";
import Link from "next/link";

export default function V5About() {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Company</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">About Pristine Management</h1>
      </div>

      <div className="p-8 space-y-6">
        {/* Mission card */}
        <div className="bg-[#1e3a5f] rounded-xl p-8 text-white">
          <p className="text-[#e8640c] text-xs uppercase tracking-widest font-semibold mb-3">Mission Statement</p>
          <blockquote className="text-xl font-semibold leading-relaxed mb-4">&ldquo;{company.mission}&rdquo;</blockquote>
          <p className="text-white/70 leading-relaxed">{company.vision}</p>
        </div>

        {/* HOA vs Metro comparison */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f0f3f7]">
            <p className="font-semibold text-[#1a2332]">HOA vs. Metro District: Key Differences</p>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f0f3f7]">
            <div className="p-6">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">Traditional HOA</p>
              <ul className="space-y-3">
                {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#4a5568]">
                    <span className="text-[#cbd5e1] mt-0.5 shrink-0">○</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-widest">Metro District</p>
                <span className="bg-[#e8640c] text-white text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded">Our Specialty</span>
              </div>
              <ul className="space-y-3">
                {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#1a2332]">
                    <span className="text-[#e8640c] mt-0.5 shrink-0">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Metro Districts are different */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
          <p className="font-semibold text-[#1a2332] mb-4">Why Metro Districts Require Specialized Management</p>
          <p className="text-[#4a5568] text-sm leading-relaxed mb-3">
            Metro Districts operate under Colorado&apos;s Special District Act as quasi-governmental entities. Unlike traditional HOAs, they have authority to levy property taxes, issue municipal bonds, and must comply with GASB government accounting standards, Colorado Revised Statutes, and state audit requirements.
          </p>
          <p className="text-[#4a5568] text-sm leading-relaxed">
            This level of complexity demands expertise that typical HOA management companies don&apos;t possess. Pristine Management was built specifically for this — bringing government-grade financial management and statutory compliance to Metro Districts and extending those same elevated standards to every community we serve.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.values.map((v) => (
            <div key={v.id} className="bg-white rounded-xl border border-[#e2e8f0] p-5 hover:border-[#1e3a5f]/30 transition-colors">
              <div className="w-8 h-8 bg-[#e8640c]/10 rounded-lg flex items-center justify-center mb-3">
                <span className="text-[#e8640c] font-bold text-xs">✓</span>
              </div>
              <h3 className="font-semibold text-[#1a2332] text-sm mb-2">{v.title}</h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Link href="/5/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-[#1e3a5f] hover:bg-[#16304f] px-5 py-2.5 rounded-lg transition-colors">
            View Services
          </Link>
          <Link href="/5/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a2332] bg-white border border-[#e2e8f0] hover:bg-[#f0f3f7] px-5 py-2.5 rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
