import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function V4Footer() {
  return (
    <footer className="bg-[#2c2417] text-[#c9b99a] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-white text-xl font-bold mb-1">Pristine</p>
          <p className="text-[#c4622d] text-xs uppercase tracking-[0.2em] mb-4">Management</p>
          <p className="text-sm leading-relaxed text-[#c9b99a]/70">
            Serving Colorado HOA and Metro District communities with care, expertise, and unwavering commitment.
          </p>
        </div>
        <div>
          <p className="text-[#c4622d] text-xs uppercase tracking-widest font-semibold mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/4/about", label: "About Us" },
              { href: "/4/services", label: "Services" },
              { href: "/4/faq", label: "FAQ" },
              { href: "/4/homeowner-portal", label: "Homeowner Portal" },
              { href: "/4/violations", label: "Violations" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#c4622d] text-xs uppercase tracking-widest font-semibold mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">{siteConfig.email}</a></li>
            <li className="text-[#c9b99a]/70">Denver Metro Area, Colorado</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-center text-xs text-[#c9b99a]/40">
        © {new Date().getFullYear()} Pristine Management, LLC. All rights reserved.
      </div>
    </footer>
  );
}
