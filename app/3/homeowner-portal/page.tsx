import { externalLinks } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function V3HomeownerPortal() {
  return (
    <>
      {/* Above fold — Vantaca CTA dominant */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, #00e5ff 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative">
          <span className="text-[#00e5ff] text-xs uppercase tracking-[0.3em] font-medium">Resident Access</span>
          <h1 className="font-black text-7xl md:text-9xl uppercase text-white mt-4 leading-none mb-12">
            HOMEOWNER<br />
            <span style={{ WebkitTextStroke: "2px #00e5ff" }} className="text-transparent">PORTAL</span>
          </h1>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00e5ff] hover:bg-[#00c4db] text-[#111418] font-black px-12 py-6 uppercase tracking-widest text-lg transition-colors"
          >
            Login to Vantaca
            <ArrowUpRight size={24} />
          </a>
          <p className="text-white/30 text-sm mt-6">
            Pay dues · Submit requests · Access documents · Track work orders
          </p>
        </div>
      </section>

      <section className="bg-[#0a0d10] py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-white/5">
          {[
            {
              title: "Payments",
              desc: "Pay HOA dues and Metro District assessments online. One-time or recurring ACH. Secure and instant.",
              href: externalLinks.vantacaLogin,
              external: true,
              cta: "Pay Now",
            },
            {
              title: "Management Request",
              desc: "Submit maintenance requests, architectural applications, or inquiries. Tracked and responded to within one business day.",
              href: "/3/contact",
              external: false,
              cta: "Submit Request",
            },
            {
              title: "Contact Management",
              desc: "Reach your community manager for urgent matters, billing questions, or any community concern.",
              href: "/3/contact",
              external: false,
              cta: "Contact Us",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#0a0d10] p-10 hover:bg-[#0d1517] transition-colors group">
              <h3 className="font-black uppercase text-white tracking-wide mb-4 group-hover:text-[#00e5ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{item.desc}</p>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#00e5ff] text-xs uppercase tracking-widest font-bold hover:underline">
                  {item.cta} <ArrowUpRight size={12} />
                </a>
              ) : (
                <Link href={item.href} className="text-[#00e5ff] text-xs uppercase tracking-widest font-bold hover:underline">
                  {item.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
