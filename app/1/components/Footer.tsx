import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function V1Footer() {
  return (
    <footer className="bg-[#084870] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-white text-lg font-bold mb-3">
            Pristine Management
          </h3>
          <p className="text-sm leading-relaxed">
            Professional HOA and Metro District management services across Colorado. Built for the communities that demand more.
          </p>
        </div>
        <div>
          <h4 className="text-[#1880A8] text-xs uppercase tracking-widest font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/homeowner-portal", label: "Homeowner Portal" },
              { href: "/lender-services", label: "Lender Services" },
              { href: "/violations", label: "Violations" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#1880A8] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#1880A8] text-xs uppercase tracking-widest font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#1880A8] shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="text-[#1880A8] shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-[#1880A8] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {siteConfig.addressLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="text-[#1880A8] shrink-0 mt-0.5" />
              <span>{siteConfig.availableHours}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#106090] py-4">
        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Pristine Management, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

