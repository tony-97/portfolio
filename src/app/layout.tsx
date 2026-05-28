import Navigation from "@/components/navigation";
import { LandingPageProvider } from "@/context/landing_page_context";
import { sections } from "@/lib/constants";
import "./globals.css";

import { baseURL } from "@/resources/config";
import { person } from "@/resources/content";
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
  metadataBase: new URL(baseURL),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s | ${person.name}`,
  },
  authors: [{ name: person.name, url: baseURL }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
