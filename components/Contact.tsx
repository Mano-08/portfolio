import Link from "next/link";
import Image from "next/image";
import React from "react";
import arrow from "../public/images/arrow.svg";

function Contact() {
  return (
    <footer
      id="contact"
      className="w-screen bg-[#f5f4f1] xl:px-64 md:px-44 px-3 py-7 flex flex-col justify-between items-center md:items-start"
    >
      <div className="text-4xl text-neutral-400 font-thin pb-4 md:pb-7">
        Get in touch
      </div>
      <div className="w-full flex flex-row items-center text-[0.945rem] md:text-[2rem] justify-between pb-12 md:pb-16">
        <Link
          href="mailto:mano.26q@gmail.com"
          className="py-1 pr-2 hover:underline"
        >
          mano.26q@gmail.com
        </Link>
        &#8226;
        <Link
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/mano__08"
          className="py-1 px-2 hover:underline"
        >
          twitter
        </Link>
        &#8226;
        <Link
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/wmano/"
          className="py-1 pl-2 hover:underline"
        >
          linkedin
        </Link>
      </div>
      <Link
        href="https://github.com/Mano-08/portfolio"
        rel="noreferrer"
        target="_blank"
        className="custom-border-top flex flex-row justify-between items-end px-1 py-2 text-sm w-full text-zinc-500"
      >
        <span>&#169; Mano 2023</span>
        <span className="flex flex-row items-center gap-1.5">
          <span>visit</span>{" "}
          <Image src={arrow} alt="arrow" className="h-2.5 w-2.5" />
        </span>
      </Link>
    </footer>
  );
}

export default Contact;
