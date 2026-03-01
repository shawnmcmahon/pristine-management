import type { Metadata } from "next";
import V4Nav from "./components/Nav";
import V4Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pristine Management — Community Warmth",
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8] text-[#2c2417]">
      <V4Nav />
      <main className="flex-1 pt-[80px]">{children}</main>
      <V4Footer />
    </div>
  );
}
