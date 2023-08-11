import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function Contact() {
  return (
    <footer className="w-screen h-[50vh] bg-[#edebe6] xl:px-64 md:px-44 px-3 py-7 flex flex-col justify-between items-center md:items-start">
      <div className="text-6xl text-neutral-500 font-thin">Get in touch</div>
      <div className="w-full px-4 md:px-0 flex flex-row items-end text-base md:text-[2rem] gap-10">
        <Link href="mailto:mano.26q@gmail.com">mano.26q@gmail.com</Link>&#8226;
        <Link
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/mano__08"
        >
          twitter
        </Link>
        &#8226;
        <Link
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/wmano/"
        >
          linkedin
        </Link>
      </div>
      <Link
        href="https://github.com/Mano-08"
        rel="noreferrer"
        target="_blank"
        className="custom-border-top flex flex-row justify-between items-end py-2 px-1 text-sm w-full text-zinc-400"
      >
        <span>&#169; Mano 2023</span> <span>visit &#8599;</span>
      </Link>
    </footer>
  );
}

export default Contact;
