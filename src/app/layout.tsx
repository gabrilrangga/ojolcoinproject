import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OJOL - The Future of Transportation | AI-Powered Ride-Hailing",
  description: "OJOL is a revolutionary AI-powered ride-hailing platform with only 7% operational fee. Join the future of transportation with fair earnings for drivers and seamless experiences for riders.",
  keywords: ["OJOL", "ride-hailing", "AI transportation", "blockchain", "token", "ojek online", "taxi app", "smart mobility"],
  authors: [{ name: "OJOL Team" }],
  icons: {
    icon: "/ojol-logo.png",
  },
  openGraph: {
    title: "OJOL - The Future of Transportation",
    description: "AI-powered ride-hailing platform with only 7% operational fee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OJOL - The Future of Transportation",
    description: "AI-powered ride-hailing platform with only 7% operational fee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e27] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
