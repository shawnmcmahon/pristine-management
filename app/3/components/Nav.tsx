"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/3", label: "Home", num: "01" },
  { href: "/3/about", label: "About", num: "02" },
  { href: "/3/services", label: "Services", num: "03" },
  { href: "/3/faq", label: "FAQ", num: "04" },
  { href: "/3/homeowner-portal", label: "Homeowner Portal", num: "05" },
  { href: "/3/lender-services", label: "Lender Services", num: "06" },
  { href: "/3/violations", label: "Violations", num: "07" },
  { href: "/3/contact", label: "Contact", num: "08" },
];

export default function V3Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
        <nav className="flex items-center justify-between px-8 h-20">
          <Link href="/3" className="relative z-50">
            <span className="font-bold text-white text-lg tracking-tight leading-none">
              PRISTINE
              <br />
              <span className="text-[#00e5ff] font-light text-sm tracking-[0.2em]">MANAGEMENT</span>
            </span>
          </Link>

          <button
            className="relative z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={22} className="text-white" />
            ) : (
              <>
                <AlignRight size={22} />
                <span className="text-xs uppercase tracking-widest font-medium hidden sm:block">Menu</span>
              </>
            )}
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0a0d10] flex flex-col justify-center px-12 transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-baseline gap-4 py-3 transition-colors duration-200 border-b border-white/5",
                  pathname === link.href ? "text-[#00e5ff]" : "text-white/60 hover:text-white"
                )}
              >
                <span className="text-[#00e5ff]/40 text-xs font-mono w-6">{link.num}</span>
                <span className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
