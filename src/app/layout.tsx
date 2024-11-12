import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Agriswara | Home",
  description: "This is a blog website for Agriculture and technology",
};

export default function RootLayou({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={inter.className}>
      {children}
      <Footer />
    </body>
  </html>
  );
}
