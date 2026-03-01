import { services } from "@/lib/content/services";
import Link from "next/link";

export default function V3Services() {
  return (
    <>
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Services</span>
        <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none">
          FULL
          <br />
          <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">SPECTRUM</span>
        </h1>
      </section>

      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="divide-y divide-white/10">
          {services.map((s, i) => (
            <div key={s.id} className="py-8 grid md:grid-cols-12 gap-4 items-start group hover:bg-white/2 -mx-4 px-4 transition-colors">
              <span className="text-[#00e5ff]/40 font-mono text-xs md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-black uppercase text-xl tracking-wide text-white group-hover:text-[#00e5ff] transition-colors md:col-span-4">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed md:col-span-7">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#00e5ff] py-16 px-8 text-center">
        <h2 className="text-4xl font-black uppercase text-[#111418] mb-6">Custom. Scalable. Precise.</h2>
        <Link
          href="/3/contact"
          className="inline-flex items-center gap-2 bg-[#111418] hover:bg-[#0a0d10] text-white font-bold px-10 py-4 uppercase tracking-widest text-sm transition-colors"
        >
          Get a Proposal →
        </Link>
      </section>
    </>
  );
}
