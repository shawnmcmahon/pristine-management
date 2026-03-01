import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { company } from "@/lib/content/company";
import { externalLinks } from "@/lib/config";

export default function V2Home() {
  return (
    <>
      {/* Hero — Full viewport, minimal */}
      <section className="min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto pt-20">
        <div className="max-w-4xl">
          <p className="text-emerald-600 text-sm font-medium tracking-wide mb-8">
            HOA &amp; Metro District Management — Colorado
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-stone-900 leading-[1.05] mb-8">
            Community
            <br />
            management,
            <br />
            <em className="italic text-emerald-600">reimagined.</em>
          </h1>
          <p className="text-stone-500 text-xl leading-relaxed max-w-xl mb-12">
            Pristine Management brings precision, transparency, and modern expertise to Colorado&apos;s most demanding HOA and Metro District communities.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link
              href="/2/contact"
              className="inline-flex items-center gap-3 bg-stone-900 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300 text-sm"
            >
              Start the Conversation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/2/services"
              className="text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors"
            >
              View services →
            </Link>
          </div>
        </div>
      </section>

      {/* Divider statement */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-white/90 text-2xl md:text-3xl font-light leading-relaxed max-w-3xl">
            &ldquo;Whether you govern a traditional HOA or a complex Metro District, every community deserves management that truly understands the difference.&rdquo;
          </p>
        </div>
      </section>

      {/* HOA vs Metro */}
      <section className="py-32 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-6">
              The Distinction Matters
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-8">
              Not all communities
              <br />
              <span className="text-emerald-600 italic">are the same.</span>
            </h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              A traditional HOA and a Metro District look similar on the surface — both govern planned communities, both have boards, both manage common areas. But a Metro District is a quasi-governmental entity operating under Colorado state law with taxing authority, bond obligations, and audit requirements that demand a fundamentally different level of management expertise.
            </p>
            <p className="text-stone-500 leading-relaxed">
              Pristine Management was purpose-built for this complexity. We serve both structures, with Metro District management as our defining specialty.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-stone-100 p-8 rounded-2xl hover:border-stone-200 transition-colors">
              <h3 className="font-medium text-stone-900 mb-4 text-lg">Traditional HOA</h3>
              <ul className="space-y-2">
                {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                  <li key={i} className="text-sm text-stone-500 flex items-start gap-2">
                    <span className="text-stone-300 mt-1">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-stone-900 text-lg">Metro District</h3>
                <span className="text-emerald-600 text-xs font-medium bg-emerald-100 px-2 py-0.5 rounded-full">
                  Our Specialty
                </span>
              </div>
              <ul className="space-y-2">
                {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                  <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-stone-50 py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900">Everything your community needs.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {services.map((s) => (
              <div key={s.id} className="bg-stone-50 p-8 hover:bg-white transition-colors group">
                <h3 className="font-medium text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors text-sm">
                  {s.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed line-clamp-4">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/2/services" className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-emerald-600 transition-colors">
              See all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-4">Our Foundation</p>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900">{company.mission}</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {company.values.map((v, i) => (
            <div key={v.id}>
              <span className="text-emerald-200 text-5xl font-light block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-medium text-stone-900 mb-2">{v.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Homeowner CTA */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-light mb-2">Already a homeowner?</h2>
            <p className="text-stone-400">Access your account through the Vantaca portal.</p>
          </div>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-4 rounded-full transition-colors shrink-0"
          >
            Open Portal
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
