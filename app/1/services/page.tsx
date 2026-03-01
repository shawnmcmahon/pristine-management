import { services } from "@/lib/content/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function V1Services() {
  return (
    <>
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              What We Do
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold max-w-2xl">
            Full-Spectrum Community Management
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Every service we provide is designed to reduce burden on your board while delivering measurable results for your community.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group flex gap-6 p-6 border border-gray-200 hover:border-[#c9a84c] transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 bg-[#0a1628] group-hover:bg-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                <span className="font-serif font-bold text-[#c9a84c] group-hover:text-[#0a1628] text-sm transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Tailored to Your Community&apos;s Needs
          </h2>
          <p className="text-gray-400 mb-8">
            Our service packages are customized for your specific community structure, size, and goals. Contact us to discuss what&apos;s right for you.
          </p>
          <Link
            href="/1/contact"
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8943e] text-[#0a1628] font-semibold px-8 py-3.5 transition-colors"
          >
            Request a Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
