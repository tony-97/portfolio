import Navigation from "@/components/navigation";
import { LandingPageProvider } from "@/context/landing_page_context";
import { sections } from "@/lib/constants";
import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony Angello Acuña Flores — Ingeniero de Software Junior",
  description:
    "Portafolio de Tony Angello Acuña Flores, un ingeniero de software junior apasionado por construir aplicaciones web limpias y bien pensadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider attribute={"class"}>
          <LandingPageProvider>
            <Navigation
              sections={sections.map(({ component, ...rest }) => rest)}
            ></Navigation>
            {children}
          </LandingPageProvider>
          <footer className="py-6 text-center text-sm text-muted-foreground mt-auto bg-surface border-t border-border">
            <p>Diseñado y construido con dedicación.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
