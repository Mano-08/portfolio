import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import Socials from "./Socials";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

function Navbar() {
  return (
    <>
      <div className="h-8 w-full"></div>
      <nav className="flex flex-row items-center justify-between py-5 sticky top-0 left-0 right-0 bg-[--base] z-[500]">
        <Link href="/" className={cursive.className + " text-2xl"}>
          MANO
        </Link>
        {/* <div className="flex flex-row"> */}
        {/* <Link
          href="/about"
          className="flex hover:underline flex-row items-center text-sm md:text-base justify-between gap-2"
        >
          about
        </Link> */}
        <Socials className="flex flex-row items-center text-black/90" />
        {/* </div> */}
      </nav>
    </>
  );
}

export default Navbar;
