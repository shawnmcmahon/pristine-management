import { company } from "@/lib/content/company";
import Link from "next/link";

export default function V4About() {
  return (
    <>
      <section className="bg-[#2c2417] text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            Our Story
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Built for Colorado Communities
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">{company.mission}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#2c2417] mb-6">
            Why We Specialize in Metro Districts
          </h2>
          <p className="text-[#5a4a38] leading-relaxed mb-4">
            Metro Districts operate under Colorado state law as quasi-governmental entities with real taxing authority, bond obligations, and strict compliance timelines. The level of expertise required goes far beyond what typical HOA management firms provide.
          </p>
          <p className="text-[#5a4a38] leading-relaxed mb-4">
            Pristine Management was founded to serve this underserved gap — providing government-grade financial management, statutory compliance expertise, and operational precision to Metro Districts while extending those same elevated standards to traditional HOA communities.
          </p>
          <p className="text-[#5a4a38] leading-relaxed">{company.vision}</p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-[#e8dfd0]">
          <h3 className="font-serif text-xl font-bold text-[#2c2417] mb-6">Metro District vs. Traditional HOA</h3>
          <div className="space-y-6">
            <div>
              <p className="text-[#c4622d] text-xs uppercase tracking-widest font-semibold mb-3">Traditional HOA</p>
              <ul className="space-y-2">
                {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#5a4a38]">
                    <span className="text-[#c9b99a] mt-0.5">•</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-[#e8dfd0]">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-[#c4622d] text-xs uppercase tracking-widest font-semibold">Metro District</p>
                <span className="bg-[#c4622d]/10 text-[#c4622d] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">Our Specialty</span>
              </div>
              <ul className="space-y-2">
                {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#2c2417]">
                    <span className="text-[#c4622d] mt-0.5">♦</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#2c2417]">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((v) => (
              <div key={v.id} className="bg-white rounded-3xl p-8 border border-[#e8dfd0] hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
                <div className="w-8 h-8 bg-[#c4622d]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#c4622d] text-sm">✦</span>
                </div>
                <h3 className="font-serif font-bold text-[#2c2417] mb-2">{v.title}</h3>
                <p className="text-[#5a4a38] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Link href="/4/services" className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#b05626] text-white font-semibold px-10 py-4 rounded-full transition-colors">
          Explore Our Services
        </Link>
      </section>
    </>
  );
}
