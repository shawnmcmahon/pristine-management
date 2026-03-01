import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function V2Footer() {
  return (
    <footer className="border-t border-stone-100 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <p className="text-lg font-semibold text-stone-900 mb-3">
              Pristine<span className="text-emerald-600 font-light"> Management</span>
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Colorado&apos;s specialist in HOA and Metro District management. Setting the standard for community excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-stone-900 font-medium mb-4">Company</p>
              <ul className="space-y-2 text-stone-400">
                <li><Link href="/2/about" className="hover:text-emerald-600 transition-colors">About</Link></li>
                <li><Link href="/2/services" className="hover:text-emerald-600 transition-colors">Services</Link></li>
                <li><Link href="/2/faq" className="hover:text-emerald-600 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-stone-900 font-medium mb-4">Resources</p>
              <ul className="space-y-2 text-stone-400">
                <li><Link href="/2/homeowner-portal" className="hover:text-emerald-600 transition-colors">Homeowner Portal</Link></li>
                <li><Link href="/2/lender-services" className="hover:text-emerald-600 transition-colors">Lender Services</Link></li>
                <li><Link href="/2/violations" className="hover:text-emerald-600 transition-colors">Violations</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-stone-900 font-medium mb-4">Contact</p>
              <ul className="space-y-2 text-stone-400">
                <li><a href={`tel:${siteConfig.phone}`} className="hover:text-emerald-600 transition-colors">{siteConfig.phone}</a></li>
                <li><a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-600 transition-colors break-all">{siteConfig.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-100">
          <p className="text-stone-400 text-xs text-center">
            © {new Date().getFullYear()} Pristine Management, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
