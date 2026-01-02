import React from "react";
import { fornier } from "@/app/fonts/fonts";

function Navbar() {
  return (
    <>
      <div className="h-5 w-full transparent"></div>
      <nav className="flex md:px-7 flex-row items-center justify-between py-4 px-4 sticky top-0 left-0 right-0 bg-[--base] z-[500]">
        {/* <div className="flex flex-row"> */}
        {/* <Link
          href="/about"
          className="flex hover:underline flex-row items-center text-sm md:text-base justify-between gap-2"
        >
          about
        </Link> */}
        {/* <Socials className="flex flex-row items-center text-black/90" /> */}
        {/* </div> */}
        {/* <Link
          href="https://github.com/Mano-08"
          target="_blank"
          className="text-sm underline underline-offset-2"
        >
          GitHub
        </Link>
        <Link href="/" className={fornier.className + " text-2xl"}>
          Mano
        </Link> */}
      </nav>
    </>
  );
}

export default Navbar;
