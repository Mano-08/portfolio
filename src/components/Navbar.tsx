import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between py-5">
      <Link href="/" className={cursive.className + " font-bold"}>
        MANO
      </Link>
      <Link
        href="/about"
        className="flex hover:underline flex-row items-center text-sm md:text-base justify-between gap-2"
      >
        about
      </Link>
    </nav>
  );
}

export default Navbar;
