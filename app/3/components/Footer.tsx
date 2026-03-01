import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function V3Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-start">
        <div>
          <p className="font-bold text-white text-xl tracking-tight">
            PRISTINE <span className="text-[#00e5ff] font-light">MANAGEMENT</span>
          </p>
          <p className="text-white/40 text-sm mt-2">Denver Metro Area, Colorado</p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm text-white/40">
          {[
            { href: "/3/about", label: "About" },
            { href: "/3/services", label: "Services" },
            { href: "/3/homeowner-portal", label: "Portal" },
            { href: "/3/violations", label: "Violations" },
            { href: "/3/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#00e5ff] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-white/40">
          <a href={`tel:${siteConfig.phone}`} className="block hover:text-white transition-colors">{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`} className="block hover:text-white transition-colors">{siteConfig.email}</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Pristine Management, LLC.</p>
      </div>
    </footer>
  );
}
