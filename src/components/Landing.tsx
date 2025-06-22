import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <div className="w-full mt-10 overflow-hidden text-black/50 text-justify text-sm md:text-base">
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
  );
}

export default Landing;
