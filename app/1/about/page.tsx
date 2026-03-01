import { Shield, Target, Eye, Award } from "lucide-react";
import { company } from "@/lib/content/company";
import Link from "next/link";

const valueIcons = [Shield, Target, Eye, Award];

export default function V1About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Who We Are
            </span>
          </div>
          <h1 className="font-serif text-5xl font-bold">About Pristine Management</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Our Mission
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0a1628] mt-3 mb-6">
              Accountability at Every Level
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{company.mission}</p>
            <p className="text-gray-600 leading-relaxed">{company.vision}</p>
          </div>
          <div className="bg-[#f7f5f0] p-8 border-l-4 border-[#c9a84c]">
            <h3 className="font-serif text-xl font-bold text-[#0a1628] mb-4">
              Why Pristine Management Exists
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Metro Districts are fundamentally different from traditional HOAs — and they&apos;ve historically been underserved by management companies that lack the government accounting expertise, compliance knowledge, and operational discipline they require.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pristine Management was founded to close that gap. We built our practice specifically around the unique demands of Metropolitan Districts, then extended those same elevated standards to traditional HOA communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result is a management firm that brings government-grade rigor to every community it serves — regardless of structure.
            </p>
          </div>
        </div>
      </section>

      {/* HOA vs Metro Distinction */}
      <section className="bg-[#0a1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
              Understanding the Difference
            </span>
            <h2 className="font-serif text-4xl font-bold mt-3">
              HOA vs. Metro District Management
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-gray-300 font-semibold mb-4">
                Traditional HOA Management Requires:
              </h3>
              <ul className="space-y-3">
                {[
                  "Covenant enforcement and rule administration",
                  "Common area maintenance coordination",
                  "Annual dues collection and budgeting",
                  "Board meeting facilitation",
                  "Vendor contract management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#c9a84c] font-semibold mb-4">
                Metro District Management Additionally Requires:
              </h3>
              <ul className="space-y-3">
                {[
                  "GASB-compliant government accounting standards",
                  "Colorado Special District Act compliance",
                  "Mill levy certification and county reporting",
                  "Municipal bond covenant administration",
                  "Public notice, open meeting, and CORA compliance",
                  "State audit coordination and reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-semibold">
            What We Stand For
          </span>
          <h2 className="font-serif text-4xl font-bold text-[#0a1628] mt-3">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={v.id} className="group border border-gray-200 p-8 hover:border-[#c9a84c] transition-all duration-300">
                <div className="w-12 h-12 bg-[#0a1628] group-hover:bg-[#c9a84c] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={20} className="text-[#c9a84c] group-hover:text-[#0a1628] transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0a1628] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5f0] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#0a1628] mb-4">
            Learn More About Our Services
          </h2>
          <p className="text-gray-600 mb-8">
            Explore the full scope of what Pristine Management delivers to HOA and Metro District communities across Colorado.
          </p>
          <Link
            href="/1/services"
            className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0d1e36] text-white font-semibold px-8 py-3.5 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </section>
    </>
  );
}
