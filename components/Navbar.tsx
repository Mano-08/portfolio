import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/pages/hooks/useClickOutside";
import useHitEscape from "@/pages/hooks/useHitEscape";

function Navbar() {
  const [nav, setNav] = useState(false);
  const myRef = useRef(null);
  useClickOutside(myRef, () => {
    setNav(false);
  });
  useHitEscape(nav, () => {
    setNav((prev) => (prev ? !prev : prev));
  });
  useEffect(() => {
    const ele = document.documentElement;
    const wrapper = document.getElementById("container");
    nav
      ? (ele.classList.add("h-[100%]", "overflow-hidden"),
        wrapper ? wrapper.classList.add("bg-slate-300") : "")
      : (ele.classList.remove("h-[100%]", "overflow-hidden"),
        wrapper ? wrapper.classList.remove("bg-slate-300") : "");
  }, [nav]);

  return (
    <nav className="fixed w-screen">
      <div
        onClick={() => {
          setNav((prev) => !prev);
        }}
        className={`hamburger h-6 md:h-[30px] w-10 relative z-20 float-right flex flex-col justify-evenly items-center mx-3 md:mx-8 my-4 cursor-pointer`}
      >
        <div
          className={`hamburger h-[0.05rem] md:h-[0.1rem] w-6 ease-in-out transition duration-500 origin-right ${
            nav
              ? "bg-white rotate-[-45deg] md:translate-y-[-3.36px] translate-y-[-4.4px]"
              : "bg-black"
          }`}
        />
        <div
          className={`hamburger h-[0.05rem] md:h-[0.1rem] w-6 ease-in-out transition duration-500 origin-right ${
            nav
              ? "bg-white rotate-45 md:translate-y-[3.36px] translate-y-[4.4px]"
              : "bg-black"
          }`}
        />
      </div>
      <div
        ref={myRef}
        className={`absolute w-[100vw] md:w-[35vw] right-[-100vw] md:right-[-35vw] gap-24 transition ease-in-out duration-[800ms] h-screen z-[15] px-[12vw] md:px-[8vw] flex flex-col justify-evenly md:justify-center bg-slate-800 text-slate-300 ${
          nav ? "translate-x-[-100vw]  md:translate-x-[-35vw]" : "translate-x-0"
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
