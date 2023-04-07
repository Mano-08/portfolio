import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    console.log(nav);
    nav
      ? document.body.classList.add("overflow-hidden", "h-screen", "w-screen")
      : document.body.classList.remove(
          "overflow-hidden",
          "h-screen",
          "w-screen"
        );
  }, [nav]);
  return (
    <nav className="fixed w-screen">
      <div
        onClick={() => {
          setNav((prev) => !prev);
        }}
        className={`relative z-20 float-right flex flex-col justify-evenly h-6 md:h-[30px] w-10 items-center mx-3 md:mx-8 my-4`}
      >
        <div
          className={`h-[0.05rem] md:h-[0.1rem] w-6 ease-in-out transition duration-500 origin-right ${
            nav
              ? "bg-white rotate-[-45deg] md:translate-y-[-3.36px] translate-y-[-4.4px]"
              : "bg-black"
          }`}
        />
        <div
          className={`h-[0.05rem] md:h-[0.1rem] w-6 ease-in-out transition duration-500 origin-right ${
            nav
              ? "bg-white rotate-45 md:translate-y-[3.36px] translate-y-[4.4px]"
              : "bg-black"
          }`}
        />
      </div>
      <div
        className={`absolute w-[100vw] md:w-[40vw] right-[-100vw] md:right-[-40vw] gap-24 transition ease-in-out duration-[800ms] h-screen z-[15] px-[12vw] md:px-[8vw] flex flex-col justify-evenly md:justify-center bg-slate-800 text-slate-300 ${
          nav ? "translate-x-[-100vw]  md:translate-x-[-40vw]" : "translate-x-0"
        }`}
      >
        <div />
        <div className="flex flex-col text-6xl gap-3">
          <Link href="/">Home</Link>
          <Link href="#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="flex flex-row justify-between px-1 pt-4 border-slate-600 border-t-[0.025rem]">
          <Link href="" target="_blank">
            Twitter
          </Link>
          <Link href="" target="_blank">
            GitHub
          </Link>
          <Link href="" target="_blank">
            LinkedIn
          </Link>
          <Link href="" target="_blank">
            Devpost
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
