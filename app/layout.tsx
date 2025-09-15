import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

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
    <html lang="ar" dir="rtl">
      <body className={`${rubik.variable} antialiased font-rubik`}>
        {children}
      </body>
    </html>
  );
}
