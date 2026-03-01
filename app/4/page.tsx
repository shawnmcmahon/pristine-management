import Link from "next/link";
import { ArrowRight, Heart, Shield, TrendingUp, Users } from "lucide-react";
import { services } from "@/lib/content/services";
import { company } from "@/lib/content/company";
import { externalLinks } from "@/lib/config";

export default function V4Home() {
  return (
    <>
      {/* Hero — Warm split screen */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c4622d]/10 text-[#c4622d] rounded-full px-4 py-2 text-sm font-medium mb-8">
              <Heart size={14} />
              Colorado&apos;s Community-First Management Firm
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2c2417] leading-tight mb-6">
              Your community
              <span className="text-[#c4622d]"> deserves</span>
              <br />management that cares.
            </h1>
            <p className="text-[#5a4a38] text-lg leading-relaxed mb-8">
              Pristine Management brings genuine expertise and personal accountability to HOA and Metro District communities across Colorado. Because where you live matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/4/contact"
                className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#b05626] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Let&apos;s Talk <ArrowRight size={18} />
              </Link>
              <Link
                href="/4/services"
                className="inline-flex items-center gap-2 border border-[#e8dfd0] hover:border-[#c4622d] text-[#5a4a38] font-medium px-8 py-3.5 rounded-full transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Decorative stat cards */}
            {[
              { n: "100+", l: "Communities Served", Icon: Users, color: "bg-[#c4622d]" },
              { n: "$50M+", l: "Assets Managed", Icon: TrendingUp, color: "bg-[#2c6e49]" },
              { n: "24/7", l: "Homeowner Access", Icon: Shield, color: "bg-[#2c2417]" },
              { n: "100%", l: "Compliance Record", Icon: Heart, color: "bg-[#8b5a2b]" },
            ].map((s) => (
              <div
                key={s.l}
                className={`${s.color} rounded-3xl p-8 flex flex-col justify-between min-h-36 transform hover:-translate-y-1 transition-transform duration-200`}
              >
                <s.Icon size={22} className="text-white/70" />
                <div>
                  <p className="text-white font-bold text-3xl font-serif">{s.n}</p>
                  <p className="text-white/70 text-xs font-medium mt-0.5">{s.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOA vs Metro */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#c4622d]/10 text-[#c4622d] text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
              Why It Matters
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#2c2417]">
              HOA vs. Metro District
            </h2>
            <p className="text-[#5a4a38] mt-4 max-w-xl mx-auto">
              Understanding your community&apos;s structure helps you appreciate why specialized management makes all the difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border-2 border-[#e8dfd0] p-8 hover:border-[#c4622d]/30 transition-colors">
              <h3 className="font-serif text-xl font-bold text-[#2c2417] mb-5">Traditional HOA</h3>
              <ul className="space-y-3">
                {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5a4a38]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#c4622d]/5 border-2 border-[#c4622d]/30 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#c4622d] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Our Specialty
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2c2417] mb-5">Metro District</h3>
              <ul className="space-y-3">
                {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2c2417]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4622d] mt-2 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block bg-[#c4622d]/10 text-[#c4622d] text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
              Services
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#2c2417]">
              Everything your community needs.
            </h2>
          </div>
          <Link href="/4/services" className="hidden md:flex items-center gap-2 text-sm text-[#5a4a38] hover:text-[#c4622d] transition-colors">
            See all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-7 border border-[#e8dfd0] hover:-translate-y-1 hover:shadow-md hover:shadow-[#c4622d]/10 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#c4622d]/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-[#c4622d] font-serif font-bold text-sm">✦</span>
              </div>
              <h3 className="font-serif font-bold text-[#2c2417] mb-2">{s.title}</h3>
              <p className="text-[#5a4a38] text-xs leading-relaxed line-clamp-4">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#2c2417] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#c4622d]/20 text-[#e8a882] rounded-full px-4 py-2 text-xs uppercase tracking-widest font-semibold mb-6">
            Our Mission
          </div>
          <blockquote className="font-serif text-3xl md:text-4xl font-bold leading-relaxed mb-8">
            &ldquo;{company.mission}&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg mb-10">{company.vision}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/4/about"
              className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#b05626] text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Meet Our Team <ArrowRight size={18} />
            </Link>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#c4622d] text-white font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              Homeowner Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
