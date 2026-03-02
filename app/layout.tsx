import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import V1Nav from "./1/components/Nav";
import V1Footer from "./1/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pristine Management - HOA & Metro District Management",
  description:
    "Professional HOA and Metro District management services across Colorado. Specializing in the unique requirements of Metropolitan Districts.",
  icons: {
    icon: [{ url: "/logo-no-text.svg", type: "image/svg+xml" }],
    shortcut: ["/logo-no-text.svg"],
    apple: ["/logo-no-text.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-white text-[#084870]">
        <V1Nav />
        <main className="flex-1 pt-16 sm:pt-[72px]">{children}</main>
        <V1Footer />
      </body>
    </html>
  );
}
