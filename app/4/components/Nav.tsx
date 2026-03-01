"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const leftLinks = [
  { href: "/4", label: "Home" },
  { href: "/4/about", label: "About" },
  { href: "/4/services", label: "Services" },
  { href: "/4/faq", label: "FAQ" },
];

const rightLinks = [
  { href: "/4/homeowner-portal", label: "Portal" },
  { href: "/4/lender-services", label: "Lenders" },
  { href: "/4/violations", label: "Violations" },
  { href: "/4/contact", label: "Contact" },
];

export default function V4Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) => cn(
    "text-sm font-medium transition-colors duration-200 relative pb-0.5",
    pathname === href
      ? "text-[#c4622d]"
      : "text-[#5a4a38] hover:text-[#2c2417]"
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#e8dfd0]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left links */}
        <ul className="hidden lg:flex items-center gap-8">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <Link href="/4" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <span className="font-serif text-xl font-bold text-[#2c2417] tracking-wide leading-none">
            Pristine
          </span>
          <span className="text-[#c4622d] text-[11px] font-medium tracking-[0.2em] uppercase leading-none mt-0.5">
            Management
          </span>
        </Link>

        {/* Right links */}
        <ul className="hidden lg:flex items-center gap-8">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#2c2417] p-2 ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#f5f0e8] border-t border-[#e8dfd0] px-6 py-5">
          <ul className="flex flex-col gap-3">
            {[...leftLinks, ...rightLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium",
                    pathname === link.href ? "text-[#c4622d]" : "text-[#5a4a38]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
