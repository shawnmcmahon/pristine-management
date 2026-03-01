"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/2", label: "Home" },
  { href: "/2/about", label: "About" },
  { href: "/2/services", label: "Services" },
  { href: "/2/faq", label: "FAQ" },
  { href: "/2/homeowner-portal", label: "Portal" },
  { href: "/2/lender-services", label: "Lenders" },
  { href: "/2/violations", label: "Violations" },
  { href: "/2/contact", label: "Contact" },
];

export default function V2Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/2" className="group">
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            Pristine<span className="text-emerald-600 font-light"> Management</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200 relative",
                  pathname === link.href
                    ? "text-emerald-600 font-medium"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/2/contact"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Get in Touch
        </Link>

        <button
          className="md:hidden text-stone-700 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-8 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm",
                    pathname === link.href ? "text-emerald-600 font-medium" : "text-stone-600"
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
