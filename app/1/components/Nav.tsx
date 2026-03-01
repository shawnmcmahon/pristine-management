"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/1", label: "Home" },
  { href: "/1/about", label: "About" },
  { href: "/1/services", label: "Services" },
  { href: "/1/faq", label: "FAQ" },
  { href: "/1/homeowner-portal", label: "Homeowner Portal" },
  { href: "/1/lender-services", label: "Lender Services" },
  { href: "/1/violations", label: "Violations" },
  { href: "/1/contact", label: "Contact" },
];

export default function V1Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/1" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-bold text-white tracking-wide">
            Pristine Management
          </span>
          <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-medium">
            HOA & Metro District
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium transition-colors duration-200 relative group",
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] transform transition-transform duration-200 origin-left",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1e36] border-t border-[#1a3050] px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm font-medium rounded transition-colors",
                    pathname === link.href
                      ? "bg-[#c9a84c]/10 text-[#c9a84c]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
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
