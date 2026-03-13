// src/app/layout.tsx
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "วิปัสสนาภาวนา - พิจารณาขันธ์ 5 อินทรีย์ 6",
  description: "ปฏิบัติธรรมถุูกธรรมดับทุกข์ได้ทันที",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-prompt antialiased bg-white text-slate-900`}>
        <Header />
        <main className="min-h-screen pt-[70px]"> {/* เผื่อที่ให้ Header fixed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}