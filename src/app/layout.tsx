import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mano | Portfolio",
  description:
    "Helping brands design and development web solutions, based in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} noise antialiased  max-w-[2000px] w-screen md:p-0 px-4 md:w-[600px] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
