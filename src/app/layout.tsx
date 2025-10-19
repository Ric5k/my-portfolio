import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
export const metadata: Metadata = {
  title: "Riku - Backend Engineer & Full-Stack Developer",
  description: "Portfolio of Riku, a passionate backend engineer and full-stack developer specializing in TypeScript, PostgreSQL, Next.js, and Rust.",
  keywords: ["portfolio", "backend engineer", "full-stack developer", "TypeScript", "PostgreSQL", "Next.js", "Rust"],
  authors: [{ name: "Riku" }],
  openGraph: {
    title: "Riku - Backend Engineer & Full-Stack Developer",
    description: "Portfolio of Riku, a passionate backend engineer and full-stack developer specializing in TypeScript, PostgreSQL, Next.js, and Rust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        > 
          <div className="absolute top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}





