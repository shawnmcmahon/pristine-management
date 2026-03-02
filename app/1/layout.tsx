import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pristine Management — Executive Edition",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
