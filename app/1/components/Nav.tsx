"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/homeowner-portal", label: "Homeowner Portal" },
  { href: "/lender-services", label: "Lender Services" },
  { href: "/violations", label: "Violations" },
  { href: "/contact", label: "Contact" },
];

export default function V1Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#084870] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[72px]">
        <Link href="/" className="flex items-center leading-tight min-w-0">
          <span className="flex flex-col min-w-0">
            <span className="font-serif text-base sm:text-xl font-bold text-white tracking-wide whitespace-nowrap">
              Pristine Management
            </span>
            <span className="hidden sm:block text-[#1880A8] text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">
              HOA & Metro District
            </span>
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
                    ? "text-[#1880A8]"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 bg-[#1880A8] transform transition-transform duration-200 origin-left",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-1.5 sm:p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#084070] border-t border-[#106090] px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm font-medium rounded transition-colors",
                    pathname === link.href
                      ? "bg-[#1880A8]/10 text-[#1880A8]"
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

