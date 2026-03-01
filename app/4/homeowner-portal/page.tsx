import { externalLinks } from "@/lib/config";
import { ExternalLink, CreditCard, ClipboardList, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function V4HomeownerPortal() {
  return (
    <>
      {/* Vantaca — Above fold */}
      <section className="bg-[#2c6e49] text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/10 text-white/80 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            Resident Access · Powered by Vantaca
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Your Homeowner Portal
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Access your account, make payments, submit requests, and stay connected with your community management team.
          </p>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#f5f0e8] text-[#2c6e49] font-bold px-12 py-5 rounded-full text-lg transition-colors shadow-lg"
          >
            <ExternalLink size={20} />
            Login to Vantaca
          </a>
          <p className="text-white/50 text-sm mt-4">
            First time? Contact your community manager to activate your account.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: CreditCard,
              title: "Online Payments",
              desc: "Pay HOA dues or Metro District assessments securely. Set up recurring ACH payments for hassle-free autopay.",
              cta: "Pay Now",
              href: externalLinks.vantacaLogin,
              external: true,
              color: "bg-[#c4622d]/10",
              iconColor: "text-[#c4622d]",
            },
            {
              Icon: ClipboardList,
              title: "Management Requests",
              desc: "Submit maintenance requests, architectural applications, and general inquiries directly to your management team.",
              cta: "Submit a Request",
              href: "/4/contact",
              external: false,
              color: "bg-[#2c6e49]/10",
              iconColor: "text-[#2c6e49]",
            },
            {
              Icon: MessageCircle,
              title: "Contact Us",
              desc: "Reach your community manager for billing questions, urgent matters, or anything your community needs.",
              cta: "Send a Message",
              href: "/4/contact",
              external: false,
              color: "bg-[#2c2417]/10",
              iconColor: "text-[#2c2417]",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-8 border border-[#e8dfd0] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-5`}>
                <item.Icon size={22} className={item.iconColor} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2c2417] mb-3">{item.title}</h3>
              <p className="text-[#5a4a38] text-sm leading-relaxed mb-5">{item.desc}</p>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c4622d] hover:underline">
                  {item.cta} <ExternalLink size={13} />
                </a>
              ) : (
                <Link href={item.href} className="text-sm font-semibold text-[#c4622d] hover:underline">
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
