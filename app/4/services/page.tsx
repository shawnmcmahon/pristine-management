import { services } from "@/lib/content/services";
import Link from "next/link";

export default function V4Services() {
  return (
    <>
      <section className="bg-[#2c2417] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#c4622d]/20 text-[#e8a882] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            What We Offer
          </div>
          <h1 className="font-serif text-5xl font-bold mb-4">Comprehensive Services</h1>
          <p className="text-white/70 text-lg">Everything your community needs to thrive.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.id}
              className="bg-white rounded-3xl p-8 border border-[#e8dfd0] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#c4622d]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#c4622d]/10 flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-[#c4622d] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[#2c2417]">{s.title}</h3>
              </div>
              <p className="text-[#5a4a38] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#c4622d] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to find the right fit for your community?</h2>
          <p className="text-white/80 mb-8">Let&apos;s talk about what your HOA or Metro District actually needs.</p>
          <Link href="/4/contact" className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f0e8] text-[#c4622d] font-bold px-10 py-4 rounded-full transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
