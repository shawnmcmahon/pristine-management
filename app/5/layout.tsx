import type { Metadata } from "next";
import V5Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Pristine Management — Precision Blueprint",
};

export default function V5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f0f3f7] text-[#1a2332] flex">
      <V5Sidebar />
      <main className="flex-1 lg:ml-72 min-w-0">{children}</main>
    </div>
  );
}
