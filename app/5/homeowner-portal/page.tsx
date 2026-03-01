import { externalLinks } from "@/lib/config";
import { ArrowUpRight, CreditCard, ClipboardList, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function V5HomeownerPortal() {
  return (
    <div className="pt-16 lg:pt-0">
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Resident Access</p>
        <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Homeowner Portal</h1>
      </div>

      <div className="p-8 space-y-6">
        {/* Vantaca CTA — Above fold, most prominent element */}
        <div className="bg-[#1e3a5f] rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[#e8640c] text-xs uppercase tracking-widest font-semibold mb-3">
                Powered by Vantaca
              </p>
              <h2 className="text-2xl font-bold mb-2">Access Your Account</h2>
              <p className="text-white/70 max-w-md">
                Log in to view your account balance, pay dues, submit maintenance requests, access community documents, and track work orders in real time.
              </p>
            </div>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e8640c] hover:bg-[#d05a0b] text-white font-bold px-8 py-4 rounded-lg transition-colors text-base whitespace-nowrap"
            >
              <span>Login to Vantaca</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="text-white/40 text-xs mt-4">
            New residents: contact your community manager to activate portal access.
          </p>
        </div>

        {/* Portal Features */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              Icon: CreditCard,
              title: "Online Payments",
              desc: "Pay HOA dues and Metro District assessments online. One-time or recurring ACH payments. Never miss a due date.",
              cta: "Pay Now",
              href: externalLinks.vantacaLogin,
              external: true,
            },
            {
              Icon: ClipboardList,
              title: "Management Requests",
              desc: "Submit maintenance requests, architectural review applications, or general inquiries. All tracked and responded to within one business day.",
              cta: "Submit a Request",
              href: "/5/contact",
              external: false,
            },
            {
              Icon: MessageSquare,
              title: "Contact Management",
              desc: "Reach your community manager directly for billing questions, urgent matters, or any community concern.",
              cta: "Send Message",
              href: "/5/contact",
              external: false,
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:border-[#1e3a5f]/30 transition-colors">
              <div className="w-10 h-10 bg-[#f0f3f7] rounded-lg flex items-center justify-center mb-4">
                <item.Icon size={18} className="text-[#e8640c]" />
              </div>
              <h3 className="font-semibold text-[#1a2332] mb-2">{item.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{item.desc}</p>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#e8640c] hover:underline">
                  {item.cta} <ArrowUpRight size={13} />
                </a>
              ) : (
                <Link href={item.href} className="text-sm font-medium text-[#e8640c] hover:underline">
                  {item.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
