"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home, Info, Briefcase, HelpCircle, User, FileText, AlertTriangle, Mail, Menu, X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const navItems = [
  { href: "/5", label: "Home", Icon: Home },
  { href: "/5/about", label: "About", Icon: Info },
  { href: "/5/services", label: "Services", Icon: Briefcase },
  { href: "/5/faq", label: "FAQ", Icon: HelpCircle },
  { href: "/5/homeowner-portal", label: "Homeowner Portal", Icon: User },
  { href: "/5/lender-services", label: "Lender Services", Icon: FileText },
  { href: "/5/violations", label: "Violations", Icon: AlertTriangle },
  { href: "/5/contact", label: "Contact", Icon: Mail },
];

export default function V5Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-[#e2e8f0]">
        <Link href="/5" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1e3a5f] flex items-center justify-center rounded-lg">
              <span className="text-[#e8640c] font-bold text-sm">PM</span>
            </div>
            <div>
              <p className="font-bold text-[#1a2332] text-sm leading-none">Pristine</p>
              <p className="text-[#e8640c] text-xs font-medium tracking-wider leading-none mt-0.5">
                Management
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="text-[#94a3b8] text-[10px] uppercase tracking-[0.15em] font-semibold px-3 mb-3">
          Navigation
        </p>
        <ul className="space-y-1">
          {navItems.map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === href
                    ? "bg-[#1e3a5f] text-white shadow-sm"
                    : "text-[#4a5568] hover:bg-[#e2e8f0] hover:text-[#1a2332]"
                )}
              >
                <Icon size={16} className={pathname === href ? "text-[#e8640c]" : "text-[#94a3b8]"} />
                {label}
                {pathname === href && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#e8640c]" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom info */}
      <div className="px-4 py-6 border-t border-[#e2e8f0]">
        <div className="bg-[#1e3a5f] rounded-lg p-4 text-white">
          <p className="text-xs font-semibold mb-1">Need Help?</p>
          <a href={`tel:${siteConfig.phone}`} className="text-[#e8640c] text-xs hover:underline block">
            {siteConfig.phone}
          </a>
          <p className="text-white/40 text-[10px] mt-1">Mon–Fri 8am–5pm MT</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-72 bg-white border-r border-[#e2e8f0] flex-col z-40">
        <SidebarContent />
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e2e8f0] px-4 h-16 flex items-center justify-between">
        <Link href="/5" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1e3a5f] rounded-md flex items-center justify-center">
            <span className="text-[#e8640c] font-bold text-xs">PM</span>
          </div>
          <span className="font-bold text-[#1a2332] text-sm">Pristine Management</span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#4a5568]">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-72 h-full bg-white border-r border-[#e2e8f0] flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
