import { company } from "@/lib/content/company";
import Link from "next/link";

export default function V2About() {
  return (
    <>
      <section className="pt-40 pb-24 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">About Us</p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight max-w-3xl mb-12">
          Built for the communities others can&apos;t manage.
        </h1>
        <p className="text-stone-500 text-xl leading-relaxed max-w-2xl">
          {company.mission}
        </p>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-stone-900 mb-6">Why Metro Districts Need Specialists</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Metro Districts are quasi-governmental special districts operating under Colorado&apos;s Special District Act. They have taxing authority, can issue municipal bonds, and must comply with GASB government accounting standards — requirements that traditional HOA management firms simply aren&apos;t equipped to handle.
            </p>
            <p className="text-stone-500 leading-relaxed mb-4">
              Pristine Management was founded to close this gap. We bring the rigor of government-grade financial management, state compliance expertise, and Metro District operational knowledge to every community we serve.
            </p>
            <p className="text-stone-500 leading-relaxed">
              {company.vision}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-light text-stone-900 mb-6">The Complexity We Handle</h2>
            <div className="space-y-4">
              {[
                { label: "Traditional HOA", items: company.hoaVsMetroDistinct.hoa.points },
                { label: "Metro District (additionally)", items: company.hoaVsMetroDistinct.metro.points },
              ].map((section) => (
                <div key={section.label}>
                  <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-3">{section.label}</p>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-stone-600 flex gap-3">
                        <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-6xl mx-auto px-8">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-12">Our Values</p>
        <div className="grid md:grid-cols-2 gap-12">
          {company.values.map((v) => (
            <div key={v.id} className="border-b border-stone-100 pb-10">
              <h3 className="text-2xl font-light text-stone-900 mb-4">{v.title}</h3>
              <p className="text-stone-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 py-16">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-3xl font-light">Ready to work together?</h2>
          <Link
            href="/2/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-emerald-700 font-medium px-8 py-4 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
