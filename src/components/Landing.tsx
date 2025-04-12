import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <div className="w-full mt-10 overflow-hidden text-black/50">
      Hi! I am Mano, a final year Computer Science undergrad at NIT Andhra.
      NLP/ML, Web, Cryptography and Blockchain are my areas of interest.
      <br />
      I am currently interning at Broadridge as a Site Reliability Engineer. I
      am open to new opportunities that introduce me to challenging problems.
      <br /> <br />
      <span className="text-black/90">Leisure time;</span> I like building{" "}
      <Link
        href="https://playbattleship.vercel.app/"
        className="underline decoration-dotted"
      >
        games
      </Link>{" "}
      and contributing to{" "}
      <Link
        href="https://github.com/Mano-08"
        className="underline decoration-dotted"
      >
        open source
      </Link>{" "}
      when free. I also enjoy meeting new people and learning new things.
      <br />
      You can drop me a{" "}
      <Link
        className="underline decoration-dotted"
        href="mailto:mano.26q@gmail.com"
      >
        mail
      </Link>{" "}
      to discuss anything or just to say Hi!
    </div>
  );
}

export default Landing;
