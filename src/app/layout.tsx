import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riku - Backend Engineer",
  description:
    "Portfolio of Riku, a passionate backend engineer and full-stack developer specializing in TypeScript, PostgreSQL, Next.js, and Rust.",
  keywords: [
    "portfolio",
    "backend engineer",
    "full-stack developer",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "Rust",
  ],
  authors: [{ name: "Riku" }],
  openGraph: {
    title: "Riku - Backend Engineer & Full-Stack Developer",
    description:
      "Portfolio of Riku, a passionate backend engineer and full-stack developer specializing in TypeScript, PostgreSQL, Next.js, and Rust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

