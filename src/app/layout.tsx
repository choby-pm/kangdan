import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "노동법률사무소 강단",
  description: "노동법률사무소 강단 홈페이지",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-dvh flex flex-col">
        <NavBar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
