import { services } from "@/lib/content/services";
import Link from "next/link";

export default function V5Services() {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Capabilities</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Services Offered</h1>
      </div>

      <div className="p-8 space-y-4">
        <div className="bg-[#1e3a5f] rounded-xl p-6 text-white mb-6">
          <p className="text-white/70 leading-relaxed">
            Full-spectrum community management tailored to the unique requirements of Colorado HOAs and Metro Districts. Every service is delivered with accountability, transparency, and measurable outcomes.
          </p>
        </div>

        {services.map((s, i) => (
          <div key={s.id} className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:border-[#1e3a5f]/30 hover:shadow-sm transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#f0f3f7] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#e8640c]/10 transition-colors">
                <span className="text-[#94a3b8] group-hover:text-[#e8640c] font-mono text-xs font-bold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2332] mb-2">{s.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{s.description}</p>
              </div>
              <span className="ml-auto w-2 h-2 rounded-full bg-[#22c55e] shrink-0 mt-1" title="Active service" />
            </div>
          </div>
        ))}

        <div className="bg-[#e8640c]/5 border border-[#e8640c]/20 rounded-xl p-6 flex items-center justify-between gap-4">
          <p className="text-[#1a2332] font-medium">Ready to discuss services for your community?</p>
          <Link href="/5/contact" className="shrink-0 inline-flex items-center gap-1.5 bg-[#e8640c] hover:bg-[#d05a0b] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Request a Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}
