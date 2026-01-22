import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlobalSparkles from "@/components/GlobalSparkles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Douglas Hartzler | Strategist, Organizer, Creator",
  description:
    "Andrew Douglas Hartzler is a strategist, organizer, creator, and MPA graduate student at UMKC based in Kansas City.",
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
    title: "Andrew Douglas Hartzler | Strategist, Organizer, Creator",
    description:
      "Strategist, organizer, creator, and MPA graduate student at UMKC based in Kansas City.",
    url: "https://andrewhartzler.com",
    siteName: "Andrew Douglas Hartzler",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Douglas Hartzler | Strategist, Organizer, Creator",
    description:
      "Strategist, organizer, creator, and MPA graduate student at UMKC based in Kansas City.",
    creator: "@andyhartzler",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <GlobalSparkles />
        <div className="relative z-10">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
