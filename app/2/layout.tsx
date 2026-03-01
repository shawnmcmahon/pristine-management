import type { Metadata } from "next";
import V2Nav from "./components/Nav";
import V2Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pristine Management — Modern Minimal",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-800">
      <V2Nav />
      <main className="flex-1">{children}</main>
      <V2Footer />
    </div>
  );
}
