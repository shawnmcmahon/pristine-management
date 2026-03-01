import { company } from "@/lib/content/company";
import Link from "next/link";

export default function V3About() {
  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">About</span>
        <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none">
          WHO<br />
          <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">WE ARE</span>
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-6">{company.mission}</p>
          <p className="text-white/60 leading-relaxed mb-6">{company.vision}</p>
          <p className="text-white/60 leading-relaxed">
            Metro Districts are quasi-governmental entities with taxing authority, bond obligations, and rigorous Colorado state compliance requirements. Managing one demands expertise that goes far beyond what standard HOA firms offer. Pristine Management was purpose-built for this level of complexity — and we extend that same standard to every community we serve.
          </p>
        </div>
        <div className="bg-[#0a0d10] border border-white/10 p-10">
          <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium mb-8">What Sets Metro Districts Apart</p>
          <div className="space-y-6">
            {[
              "Government accounting (GASB) vs. private financial reporting",
              "Property tax mill levy authority instead of homeowner dues only",
              "Municipal bond issuance for infrastructure financing",
              "Colorado Special District Act compliance and annual state audits",
              "Public open meeting requirements and CORA obligations",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#00e5ff] font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-white/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0d10] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Values</span>
          <div className="grid md:grid-cols-4 gap-px bg-white/5 mt-10">
            {company.values.map((v, i) => (
              <div key={v.id} className="bg-[#0a0d10] p-8 hover:bg-[#0d1517] transition-colors">
                <span className="text-[#00e5ff]/30 font-mono text-xs block mb-4">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-white uppercase text-sm tracking-wide mb-3">{v.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 text-center">
        <Link
          href="/3/services"
          className="inline-flex items-center gap-2 border border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#111418] font-bold px-10 py-4 uppercase tracking-widest text-sm transition-colors"
        >
          Explore Our Services →
        </Link>
      </section>
    </>
  );
}
