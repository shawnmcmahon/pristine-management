import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function V1Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-white text-lg font-bold mb-3">
            Pristine Management
          </h3>
          <p className="text-sm leading-relaxed">
            Professional HOA and Metro District management services across Colorado. Built for the communities that demand more.
          </p>
        </div>
        <div>
          <h4 className="text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/1/about", label: "About Us" },
              { href: "/1/services", label: "Our Services" },
              { href: "/1/homeowner-portal", label: "Homeowner Portal" },
              { href: "/1/lender-services", label: "Lender Services" },
              { href: "/1/violations", label: "Violations" },
              { href: "/1/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#c9a84c] shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-[#c9a84c] shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
              <span>Denver Metro Area, Colorado</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1a3050] py-4">
        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Pristine Management, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
