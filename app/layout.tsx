import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Developer — Junior Software Engineer",
  description:
    "Portfolio of Alex Developer, a junior software engineer passionate about building clean, thoughtful web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <div className="min-h-screen flex flex-col">
          {children}
          <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-auto">
            <p>Designed & built with care.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
