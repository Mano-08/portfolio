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
    const experience = document.getElementById("experience");
    nav
      ? (ele.classList.add("h-[100%]", "overflow-hidden"),
        wrapper ? wrapper.classList.add("bg-slate-400") : "",
        experience ? experience.classList.add("bg-slate-400") : "")
      : (ele.classList.remove("h-[100%]", "overflow-hidden"),
        wrapper ? wrapper.classList.remove("bg-slate-400") : "",
        experience ? experience.classList.remove("bg-slate-400") : "");
  }, [nav]);
  const handleClick = () => {
    console.log(2);
    setNav(false);
  };

  return (
    <nav className="fixed w-screen z-[150]">
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
        className={`absolute w-[100vw] md:w-[30vw] right-[-100vw] md:right-[-30vw] gap-24 transition ease-in-out duration-[800ms] h-screen z-[15] px-[10vw] md:px-[4vw] flex flex-col justify-evenly md:justify-center bg-slate-800 text-slate-300 ${
          nav ? "translate-x-[-100vw]  md:translate-x-[-30vw]" : "translate-x-0"
        }`}
      >
        <div />
        <div className="flex flex-col text-5xl gap-3">
          <Link href="/" onClick={handleClick}>
            Home
          </Link>{" "}
          <Link href="/about" onClick={handleClick}>
            About
          </Link>
          <Link href="#work" onClick={handleClick}>
            Work
          </Link>
          <Link href="#projects" onClick={handleClick}>
            Projects
          </Link>
          <Link href="#contact" onClick={handleClick}>
            Contact
          </Link>
        </div>
        <div className="flex flex-row justify-between px-3 text-sm pt-4 opacity-70 border-t-[0.01rem] border-slate-500">
          <Link href="https://twitter.com/mano__08" target="_blank">
            Twitter
          </Link>
          <Link href="https://github.com/Mano-08" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/wmano/" target="_blank">
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
