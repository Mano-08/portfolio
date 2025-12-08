import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { inter } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Mano ",
  description:
    "Find my projects, open source contributions, freelance projects and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`noise antialiased text ${inter.className} text-black/50 max-w-[2000px] w-screen md:w-[700px] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
