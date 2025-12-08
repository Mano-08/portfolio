import React from "react";
import Link from "next/link";
import Socials from "./Socials";
import { fornier } from "@/app/fonts/fonts";
import Image from "next/image";

function Landing() {
  return (
    <div className="w-full overflow-hidden text-justify text-sm md:text-base">
      {/* <div className="w-full h-[250px] bg-red-800"></div> */}
      <Image
        src="https://res.cloudinary.com/djwhxlpk5/image/upload/v1765157668/header_qgnmco.jpg"
        alt={"Header image"}
        width={750}
        height={250}
        className="w-full h-[250px] object-cover relative"
      />
      {/* <div className="rounded-2xl h-28 w-28 relative -top-14 left-7 bg-yellow-500"></div> */}
      <Image
        src="https://res.cloudinary.com/djwhxlpk5/image/upload/v1765157615/er2_p9poqp.jpg"
        alt={"Me"}
        width={112}
        height={112}
        className="rounded-2xl hover:scale-105 rotate-1 hover:rotate-3 transition-transform duration-500 h-32 w-28 relative object-cover -top-14 left-4 md:left-7"
      />
      <div className="flex flex-row items-start justify-between md:px-7 px-4 relative -top-10 mb-4">
        <div>
          <h1
            className={`font-bold text-[45px] text-black my-2 ${fornier.className}`}
          >
            Mano
          </h1>
          <p className="text-sm">21 &bull; engineer &bull; developer</p>
        </div>
        <Socials className="flex flex-row items-center text-black/90" />
      </div>
      <div className="md:px-7 px-4">
        Hi! I am Mano, a Computer Science and Engineering undergraduate from
        National Institute of Technology, Andhra Pradesh. Cryptography,
        Blockchain, NLP/ML, and Web are my areas of interest.
        <br /> <br />I like building{" "}
        <Link
          href="https://playbattleship.vercel.app/"
          className="underline decoration-dotted "
        >
          games
        </Link>{" "}
        and contributing to{" "}
        <Link
          href="https://github.com/Mano-08"
          className="underline decoration-dotted "
        >
          open source
        </Link>{" "}
        when free. I also enjoy meeting new people and learning new things. You
        can drop me a{" "}
        <Link
          className="underline decoration-dotted "
          href="mailto:mano.26q@gmail.com"
        >
          mail
        </Link>{" "}
        to discuss anything or just to say Hi!
      </div>
    </div>
  );
}

export default Landing;
