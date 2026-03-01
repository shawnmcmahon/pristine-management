import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { company } from "@/lib/content/company";
import { externalLinks } from "@/lib/config";

export default function V3Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end px-8 pb-20 pt-28 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-20 right-8 w-[1px] h-64 bg-gradient-to-b from-transparent via-[#00e5ff]/40 to-transparent" />
        <div className="absolute top-40 right-16 w-[1px] h-40 bg-gradient-to-b from-transparent via-[#00e5ff]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="mb-12">
            <span className="inline-block border border-[#00e5ff]/40 text-[#00e5ff] text-xs uppercase tracking-[0.3em] px-4 py-2 font-medium">
              Colorado&apos;s Metro District Specialists
            </span>
          </div>
          <h1 className="font-black text-7xl md:text-9xl lg:text-[11rem] uppercase leading-none tracking-tight text-white mb-8">
            PRISTINE
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #00e5ff" }}
            >
              MGMT.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <p className="text-white/50 text-lg max-w-md leading-relaxed">
              HOA and Metro District management engineered for Colorado communities that refuse to settle for ordinary.
            </p>
            <div className="flex gap-4">
              <Link
                href="/3/contact"
                className="inline-flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-bold px-8 py-4 uppercase text-sm tracking-widest transition-colors"
              >
                Start Now
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={externalLinks.vantacaLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#00e5ff] text-white hover:text-[#00e5ff] font-bold px-8 py-4 uppercase text-sm tracking-widest transition-colors"
              >
                Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="bg-[#00e5ff] py-8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#111418]">
          {[
            { n: "100+", l: "Communities" },
            { n: "24/7", l: "Support" },
            { n: "$50M+", l: "Assets Managed" },
            { n: "100%", l: "Compliance" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-black">{s.n}</p>
              <p className="text-xs uppercase tracking-widest font-medium mt-1 opacity-70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOA vs Metro — Diagonal break */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Not All Communities Are Equal</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-4 text-white leading-none">
              HOA vs.<br />
              <span style={{ WebkitTextStroke: "1px #00e5ff" }} className="text-transparent">Metro District</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#111418] p-10">
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-6">Traditional HOA</p>
              <ul className="space-y-4">
                {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-white/60 text-sm">
                    <span className="text-white/20 font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0d1517] p-10">
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[#00e5ff] text-xs uppercase tracking-widest font-medium">Metro District</p>
                <span className="bg-[#00e5ff] text-[#111418] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">Our Core</span>
              </div>
              <ul className="space-y-4">
                {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-white/80 text-sm">
                    <span className="text-[#00e5ff] font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0a0d10]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Services</span>
              <h2 className="text-5xl font-black uppercase text-white mt-2">What We Do</h2>
            </div>
            <Link href="/3/services" className="text-[#00e5ff] text-sm uppercase tracking-widest font-medium hover:underline">
              All Services →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {services.map((s, i) => (
              <div key={s.id} className="bg-[#0a0d10] p-8 hover:bg-[#0d1517] transition-colors group border-b-2 border-transparent hover:border-[#00e5ff]">
                <span className="text-[#00e5ff]/30 font-mono text-xs block mb-4">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-white uppercase text-sm tracking-wide mb-3 group-hover:text-[#00e5ff] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #00e5ff 0%, transparent 60%)",
        }} />
        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white mb-8">
            Let&apos;s Build<br />
            <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">
              Something Better.
            </span>
          </h2>
          <Link
            href="/3/contact"
            className="inline-flex items-center gap-2 bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-black px-12 py-5 uppercase tracking-widest text-sm transition-colors"
          >
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
