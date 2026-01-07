import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import HeaderPage from "@/components/shared/header-page";
import FooterPage from "@/components/shared/footer-page";
import { METADATA } from "@/src/modules/shared/data/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { ...METADATA };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <main className="flex flex-col justify-between gap-4 select-none pt-20">
            <HeaderPage />
            {children}
            <FooterPage />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
