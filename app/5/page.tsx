import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Shield, Users, CheckCircle } from "lucide-react";
import { services } from "@/lib/content/services";
import { company } from "@/lib/content/company";
import { externalLinks } from "@/lib/config";

const stats = [
  { value: "100+", label: "Communities", sub: "HOA & Metro District", Icon: Users, color: "text-[#e8640c]" },
  { value: "$50M+", label: "Assets Managed", sub: "Annual budget oversight", Icon: TrendingUp, color: "text-[#2e7d32]" },
  { value: "24/7", label: "Portal Access", sub: "Vantaca-powered", Icon: Shield, color: "text-[#1e3a5f]" },
  { value: "100%", label: "Compliance", sub: "State & federal", Icon: CheckCircle, color: "text-[#6d28d9]" },
];

export default function V5Home() {
  return (
    <div className="pt-16 lg:pt-0 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-widest">Overview</p>
            <h1 className="text-2xl font-bold text-[#1a2332] mt-0.5">Pristine Management</h1>
          </div>
          <div className="flex gap-3">
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4a5568] bg-[#f0f3f7] hover:bg-[#e2e8f0] px-4 py-2 rounded-lg transition-colors"
            >
              Portal <ArrowUpRight size={14} />
            </a>
            <Link
              href="/5/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-[#e8640c] hover:bg-[#d05a0b] px-4 py-2 rounded-lg transition-colors"
            >
              Contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-[#e2e8f0] p-5 hover:border-[#1e3a5f]/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <s.Icon size={18} className={s.color} />
                <span className="text-[#94a3b8] text-[10px] uppercase tracking-widest font-medium">{s.label}</span>
              </div>
              <p className="text-3xl font-bold text-[#1a2332]">{s.value}</p>
              <p className="text-[#94a3b8] text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Hero statement + HOA vs Metro */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#1e3a5f] rounded-xl p-8 text-white">
            <p className="text-[#e8640c] text-xs uppercase tracking-widest font-semibold mb-4">Colorado&apos;s Specialist</p>
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Professional HOA & Metro District Management Engineered for Precision
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              {company.mission}
            </p>
            <Link
              href="/5/services"
              className="inline-flex items-center gap-2 bg-[#e8640c] hover:bg-[#d05a0b] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              View Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
            <p className="text-[#94a3b8] text-[10px] uppercase tracking-widest font-medium mb-5">Structure Comparison</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#4a5568] mb-2">Traditional HOA</p>
                <ul className="space-y-1.5">
                  {company.hoaVsMetroDistinct.hoa.points.slice(0, 3).map((pt, i) => (
                    <li key={i} className="flex gap-2 text-xs text-[#94a3b8]">
                      <span className="text-[#cbd5e1] mt-0.5 shrink-0">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[#f0f3f7] pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xs font-semibold text-[#1e3a5f]">Metro District</p>
                  <span className="bg-[#e8640c] text-white text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded">
                    Specialty
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {company.hoaVsMetroDistinct.metro.points.slice(0, 4).map((pt, i) => (
                    <li key={i} className="flex gap-2 text-xs text-[#4a5568]">
                      <span className="text-[#e8640c] mt-0.5 shrink-0">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/5/about" className="text-xs font-medium text-[#e8640c] hover:underline block">
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f0f3f7] flex items-center justify-between">
            <p className="font-semibold text-[#1a2332]">Services Overview</p>
            <Link href="/5/services" className="text-xs text-[#e8640c] hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-[#f0f3f7]">
            {services.slice(0, 6).map((s) => (
              <div key={s.id} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#fafbfc] transition-colors">
                <div className="min-w-0">
                  <p className="font-medium text-[#1a2332] text-sm">{s.title}</p>
                  <p className="text-[#94a3b8] text-xs mt-0.5 truncate">{s.description.slice(0, 80)}...</p>
                </div>
                <span className="shrink-0 w-2 h-2 rounded-full bg-[#22c55e]" title="Active" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#1a2332] mb-1">Homeowner Portal</p>
              <p className="text-[#94a3b8] text-sm">Payments, requests, and account access</p>
            </div>
            <a
              href={externalLinks.vantacaLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#1e3a5f] hover:bg-[#16304f] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Open <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="bg-[#e8640c]/5 border border-[#e8640c]/20 rounded-xl p-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#1a2332] mb-1">Request a Proposal</p>
              <p className="text-[#94a3b8] text-sm">Start the conversation about your community</p>
            </div>
            <Link
              href="/5/contact"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#e8640c] hover:bg-[#d05a0b] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Contact <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
