import { Cedarville_Cursive, Inter } from "next/font/google";
import localFont from "next/font/local";

export const fornier = localFont({
  src: "./Fornire-Light.otf",
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const cursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
});
