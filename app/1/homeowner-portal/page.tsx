import Link from "next/link";
import { ExternalLink, CreditCard, ClipboardList, Phone } from "lucide-react";
import { externalLinks } from "@/lib/config";

export default function V1HomeownerPortal() {
  return (
    <>
      <section className="bg-[#084870] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#1880A8]" />
            <span className="text-[#1880A8] text-xs uppercase tracking-[0.25em] font-semibold">
              Resident Access
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">Homeowner Portal</h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl">
            Access your account, make payments, submit requests, and stay connected with your community - all in one place.
          </p>
        </div>
      </section>

      {/* Vantaca CTA â€” Above the Fold */}
      <section className="bg-[#B0B0B0] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#0a1628]/70 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Powered by Vantaca
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Access Your Homeowner Account
          </h2>
          <p className="text-[#0a1628]/80 mb-8 text-base sm:text-lg">
            Log in to view your account balance, make payments, submit work orders, and access community documents.
          </p>
          <a
            href={externalLinks.vantacaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-[#0a1628] hover:bg-[#084070] text-white font-bold px-6 sm:px-10 py-4 text-base sm:text-lg transition-colors shadow-lg"
          >
            <ExternalLink size={20} />
            Login to Vantaca Portal
          </a>
          <p className="mt-4 text-[#084870]/60 text-sm">
            New residents: contact your management team for portal activation
          </p>
        </div>
      </section>

      {/* Portal Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#084870]">
            Everything You Need in One Place
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Payments */}
          <div className="border border-gray-200 p-6 sm:p-8 hover:border-[#1880A8] transition-colors group">
            <div className="w-12 h-12 bg-[#084870] flex items-center justify-center mb-5">
              <CreditCard size={20} className="text-[#1880A8]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084870] mb-3">
              Online Payments
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Pay your HOA dues or Metro District assessments securely online. Set up recurring ACH payments to never miss a due date.
            </p>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#084870] hover:text-[#1880A8] transition-colors group-hover:text-[#1880A8]"
            >
              Pay Now <ExternalLink size={14} />
            </a>
          </div>

          {/* Management Request */}
          <div className="border border-gray-200 p-6 sm:p-8 hover:border-[#1880A8] transition-colors group">
            <div className="w-12 h-12 bg-[#084870] flex items-center justify-center mb-5">
              <ClipboardList size={20} className="text-[#1880A8]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084870] mb-3">
              Management Requests
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Submit maintenance requests, architectural review applications, or general inquiries directly to your management team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#084870] hover:text-[#1880A8] transition-colors group-hover:text-[#1880A8]"
            >
              Submit a Request -&gt;
            </Link>
          </div>

          {/* Contact */}
          <div className="border border-gray-200 p-6 sm:p-8 hover:border-[#1880A8] transition-colors group">
            <div className="w-12 h-12 bg-[#084870] flex items-center justify-center mb-5">
              <Phone size={20} className="text-[#1880A8]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084870] mb-3">
              Contact Management
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Reach your community manager directly for urgent matters, billing questions, or any community concern that needs immediate attention.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#084870] hover:text-[#1880A8] transition-colors group-hover:text-[#1880A8]"
            >
              Contact Us -&gt;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



