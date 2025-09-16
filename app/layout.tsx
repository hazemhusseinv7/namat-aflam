import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "نمط أفلام",
  description: "أعمال تناسب منتجك وحملات تُحدث الأثر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${rubik.variable} antialiased font-rubik`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
