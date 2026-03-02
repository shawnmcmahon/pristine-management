import type { Metadata } from "next";
import V1Nav from "./components/Nav";
import V1Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pristine Management — Executive Edition",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#084870]">
      <V1Nav />
      <main className="flex-1 pt-16 sm:pt-[72px]">{children}</main>
      <V1Footer />
    </div>
  );
}
