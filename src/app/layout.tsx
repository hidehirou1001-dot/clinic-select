import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ClinicSelect",
    default: "ClinicSelect | 愛媛県松山市の病院比較サイト",
  },
  description: "愛媛県松山市を対象とした、高齢者にも分かりやすい病院・クリニック比較サイトです。ご希望の条件でぴったりの病院を見つけましょう。",
  keywords: ["愛媛県", "松山市", "病院", "クリニック", "比較", "内科", "眼科"],
  openGraph: {
    title: "ClinicSelect | 愛媛県松山市の病院比較サイト",
    description: "愛媛県松山市を対象とした、高齢者にも分かりやすい病院・クリニック比較サイトです。",
    siteName: "ClinicSelect",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinicSelect | 愛媛県松山市の病院比較サイト",
    description: "愛媛県松山市を対象とした、高齢者にも分かりやすい病院・クリニック比較サイトです。",
  },
  authors: [{ name: "ClinicSelect Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground text-lg">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
