import type { Metadata } from "next";
import V3Nav from "./components/Nav";
import V3Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pristine Management — Bold Metro",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#111418] text-white">
      <V3Nav />
      <main className="flex-1">{children}</main>
      <V3Footer />
    </div>
  );
}
