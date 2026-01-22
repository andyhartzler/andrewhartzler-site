import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
  title: "Andrew Douglas Hartzler | Activist & Advocate",
  description:
    "Andrew Douglas Hartzler is an activist, advocate, and MPA graduate student at UMKC based in Kansas City.",
  keywords: [
    "activist",
    "advocate",
    "public administration",
    "UMKC",
    "political organizing",
    "Missouri Young Democrats",
    "public speaker",
  ],
  authors: [{ name: "Andrew Douglas Hartzler" }],
  openGraph: {
    title: "Andrew Douglas Hartzler | Activist & Advocate",
    description:
      "Activist, advocate, and MPA graduate student at UMKC based in Kansas City.",
    url: "https://andrewhartzler.com",
    siteName: "Andrew Douglas Hartzler",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Douglas Hartzler | Activist & Advocate",
    description:
      "Activist, advocate, and MPA graduate student at UMKC based in Kansas City.",
    creator: "@andyhartzler",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
