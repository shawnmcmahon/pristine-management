import { externalLinks } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function V2HomeownerPortal() {
  return (
    <>
      {/* Vantaca — Above fold, prominent */}
      <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 pt-20">
        <p className="text-emerald-600 text-xs uppercase tracking-widest font-medium mb-8">
          Resident Access
        </p>
        <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight mb-8 max-w-2xl">
          Your homeowner account.
        </h1>
        <p className="text-stone-500 text-xl leading-relaxed max-w-xl mb-12">
          Pay dues, submit requests, access documents, and connect with your management team — all through the Vantaca homeowner portal.
        </p>
        <div>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-10 py-5 rounded-full text-lg transition-colors"
          >
            Log In to Vantaca Portal
            <ArrowUpRight size={20} />
          </a>
          <p className="mt-4 text-stone-400 text-sm">
            Don&apos;t have an account? Contact your community manager to get started.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-light text-stone-900 mb-12">What you can do in the portal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pay Online",
                desc: "Secure online payment for HOA dues and Metro District assessments. Set up recurring payments or pay one-time.",
                cta: "Pay Now",
                href: externalLinks.vantacaLogin,
                external: true,
              },
              {
                title: "Submit Requests",
                desc: "Architectural review applications, maintenance requests, and general inquiries routed directly to your management team.",
                cta: "Submit a Request",
                href: "/2/contact",
                external: false,
              },
              {
                title: "Access Documents",
                desc: "CC&Rs, bylaws, meeting minutes, financial statements, and association documents available on demand.",
                cta: "Open Portal",
                href: externalLinks.vantacaLogin,
                external: true,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-stone-100">
                <h3 className="text-xl font-medium text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {item.cta} <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
