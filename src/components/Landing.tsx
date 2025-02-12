import React from "react";
import Image from "next/image";
import Socials from "./Socials";

function Landing() {
  return (
    <div className="w-full justify-center h-[85vh] flex flex-col md:flex-row items-center gap-5">
      <Image
        height={120}
        width={120}
        src="/dp.png"
        alt="dp"
        className="rounded-full border-2 border-solid border-black/50"
      />{" "}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="font-medium text-base md:text-xl">Hi! I&apos;m Mano</h1>
        <p className="text-sm text-black/50 md:w-auto w-[70vw]">
          I am a software developer who loves building stuff on the web
        </p>
        <Socials color={undefined} />
      </div>
    </div>
  );
}

export default Landing;
