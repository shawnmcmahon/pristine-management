import Link from "next/link";
import { ExternalLink, CreditCard, ClipboardList, Phone } from "lucide-react";
import { externalLinks } from "@/lib/config";

export default function V1HomeownerPortal() {
  return (
    <>
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Resident Access
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold">Homeowner Portal</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Access your account, make payments, submit requests, and stay connected with your community — all in one place.
          </p>
        </div>
      </section>

      {/* Vantaca CTA — Above the Fold */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#0a1628]/70 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Powered by Vantaca
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#0a1628] mb-4">
            Access Your Homeowner Account
          </h2>
          <p className="text-[#0a1628]/80 mb-8 text-lg">
            Log in to view your account balance, make payments, submit work orders, and access community documents.
          </p>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#0d1e36] text-white font-bold px-10 py-4 text-lg transition-colors shadow-lg"
          >
            <ExternalLink size={20} />
            Login to Vantaca Portal
          </a>
          <p className="mt-4 text-[#0a1628]/60 text-sm">
            New residents: contact your management team for portal activation
          </p>
        </div>
      </section>

      {/* Portal Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#0a1628]">
            Everything You Need in One Place
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Payments */}
          <div className="border border-gray-200 p-8 hover:border-[#c9a84c] transition-colors group">
            <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center mb-5">
              <CreditCard size={20} className="text-[#c9a84c]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0a1628] mb-3">
              Online Payments
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Pay your HOA dues or Metro District assessments securely online. Set up recurring ACH payments to never miss a due date.
            </p>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors group-hover:text-[#c9a84c]"
            >
              Pay Now <ExternalLink size={14} />
            </a>
          </div>

          {/* Management Request */}
          <div className="border border-gray-200 p-8 hover:border-[#c9a84c] transition-colors group">
            <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center mb-5">
              <ClipboardList size={20} className="text-[#c9a84c]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0a1628] mb-3">
              Management Requests
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Submit maintenance requests, architectural review applications, or general inquiries directly to your management team.
            </p>
            <Link
              href="/1/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors group-hover:text-[#c9a84c]"
            >
              Submit a Request →
            </Link>
          </div>

          {/* Contact */}
          <div className="border border-gray-200 p-8 hover:border-[#c9a84c] transition-colors group">
            <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center mb-5">
              <Phone size={20} className="text-[#c9a84c]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0a1628] mb-3">
              Contact Management
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Reach your community manager directly for urgent matters, billing questions, or any community concern that needs immediate attention.
            </p>
            <Link
              href="/1/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors group-hover:text-[#c9a84c]"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
