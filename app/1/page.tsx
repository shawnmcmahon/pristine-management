import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Building2 } from "lucide-react";
import { services } from "@/lib/content/services";
import { company } from "@/lib/content/company";
import { externalLinks } from "@/lib/config";

const stats = [
  { value: "1:1", label: "Board Partnership" },
  { value: "24/7", label: "Homeowner Support" },
  { value: "Colorado", label: "Local Expertise" },
  { value: "100%", label: "Compliance Rate" },
];

export default function V1Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white text-[#0a1628] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(10,22,40,0.08) 60px, rgba(10,22,40,0.08) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(10,22,40,0.08) 60px, rgba(10,22,40,0.08) 61px)",
          }}
        />
        <div className="absolute right-[20px] lg:right-[60px] xl:right-[120px] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
          <Image
            src="/logo-no-text.svg"
            alt=""
            aria-hidden="true"
            width={640}
            height={322}
            className="w-[300px] lg:w-[420px] xl:w-[520px] h-auto"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 lg:py-36">
          <div className="max-w-3xl md:max-w-[36rem] lg:max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#B0B0B0]" />
              <span className="text-[#B0B0B0] text-xs uppercase tracking-[0.25em] font-semibold">
                Colorado&apos;s Metro District Specialists
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Management That <br />
              <span className="text-[#B0B0B0]">Sets the Standard.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Pristine Management delivers expert HOA and Metro District administration across Colorado. From financial oversight to legal compliance, we handle every dimension of community management with precision and integrity.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-[#B0B0B0] hover:bg-[#9A9A9A] text-[#0a1628] font-semibold px-8 py-3.5 transition-colors duration-200"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-[#0a1628]/25 hover:border-[#B0B0B0] hover:text-[#B0B0B0] text-[#0a1628] font-medium px-8 py-3.5 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#B0B0B0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#0a1628]">
                {s.value}
              </div>
              <div className="text-[#0a1628]/70 text-xs uppercase tracking-wider font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOA vs Metro District */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-14">
          <span className="text-[#B0B0B0] text-xs uppercase tracking-[0.25em] font-semibold">
            Understanding Your Community
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628] mt-3">
            HOA vs. Metro District
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Not all community associations are the same. Understanding the structural differences helps you choose the right management partner.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* HOA */}
          <div className="border border-gray-200 p-8 hover:border-[#B0B0B0] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                <Users size={20} className="text-[#0a1628]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a1628]">
                Traditional HOA
              </h3>
            </div>
            <ul className="space-y-3">
              {company.hoaVsMetroDistinct.hoa.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          {/* Metro */}
          <div className="border-2 border-[#B0B0B0] bg-[#faf8f2] p-8 relative">
            <div className="absolute top-0 right-0 bg-[#B0B0B0] text-[#0a1628] text-[10px] uppercase tracking-widest font-bold px-3 py-1">
              Our Specialty
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#B0B0B0]/20 flex items-center justify-center">
                <Building2 size={20} className="text-[#B0B0B0]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a1628]">
                Metro District
              </h3>
            </div>
            <ul className="space-y-3">
              {company.hoaVsMetroDistinct.metro.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B0B0B0] mt-2 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#f7f5f0] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#B0B0B0] text-xs uppercase tracking-[0.25em] font-semibold">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628] mt-2">
                Comprehensive Services
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#0a1628] hover:text-[#B0B0B0] transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 border-t-2 border-transparent hover:border-[#B0B0B0] transition-all duration-300 group"
              >
                <h3 className="font-serif text-lg font-bold text-[#0a1628] mb-3 group-hover:text-[#B0B0B0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1628] hover:text-[#B0B0B0] transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#B0B0B0] text-xs uppercase tracking-[0.25em] font-semibold">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a1628] mt-3 mb-6">
              Purpose-Built for Colorado Communities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {company.mission}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {company.vision}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company.values.map((v) => (
              <div key={v.id} className="p-5 bg-[#0a1628] text-white">
                <div className="w-8 h-0.5 bg-[#B0B0B0] mb-3" />
                <h4 className="font-serif font-bold mb-2">{v.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready to Elevate Your Community?
          </h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            Whether you manage a traditional HOA or a complex Metro District, Pristine Management has the expertise your community deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-[#B0B0B0] hover:bg-[#9A9A9A] text-[#0a1628] font-semibold px-8 py-3.5 transition-colors"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-white/30 hover:border-[#B0B0B0] text-white hover:text-[#B0B0B0] font-medium px-8 py-3.5 transition-colors"
            >
              Homeowner Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
}




