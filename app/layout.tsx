import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "NAMAT AFLAM",
  description: "أعمال تناسب منتجك وحملات تُحدث الأثر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body className={`${almarai.variable} antialiased font-almarai`}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
