import useClickOutside from "@/pages/hooks/useClickOutside";
import classNames from "classnames";
import data from "../content/data.json";
import useHitEscape from "@/pages/hooks/useHitEscape";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [hoverElement, setHoverElement] = useState<string>("");
  const [xCoordinate, setXCoordinate] = useState<number>(0);
  const myRef = useRef(null);
  useClickOutside(myRef, () => {
    setNav(false);
  });
  useHitEscape(nav, () => {
    setNav((prev) => false);
  });
  useEffect(() => {
    const ele = document.documentElement;
    nav
      ? ele.classList.add("h-[100%]", "overflow-hidden")
      : ele.classList.remove("h-[100%]", "overflow-hidden");
  }, [nav]);

  const handleClick = () => {
    setNav(false);
  };

  const handleTouchStart = (e: any) => {
    setXCoordinate(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: any) => {
    if (e.changedTouches[0].clientX - xCoordinate > 0) {
      setNav(false);
    }
  };

  return (
    <nav className="fixed w-screen z-[150]">
      <div
        onClick={() => {
          setNav((prev) => !prev);
        }}
        className="hamburger h-6 md:h-[30px] w-10 relative z-20 float-right flex flex-col justify-evenly items-center mx-5 md:mx-12 md:my-8 my-6 cursor-pointer"
      >
        <div
          className={classNames(
            "hamburger h-[0.05rem] md:h-[0.1rem] w-6 ease-in-out transition duration-500 origin-right",
            nav
              ? "bg-white rotate-[-45deg] md:translate-y-[-3.36px] translate-y-[-4.4px]"
              : "bg-black"
          )}
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={myRef}
        className={classNames(
          "text-neutral-300 bg-neutral-900 absolute w-[100vw] md:w-[30vw] right-[-100vw] md:right-[-30vw] gap-24 transition-all duration-[800ms] h-screen z-[15] px-[10vw] md:px-[4vw] flex flex-col justify-evenly md:justify-center",
          nav ? "translate-x-[-100vw]  md:translate-x-[-30vw]" : "translate-x-0"
        )}
      >
        <div />
        <div className="flex flex-col text-5xl gap-3 text-center md:text-left">
          {data.navlinks.map((element) => (
            <div key={element.title}>
              <Link
                scroll={false}
                onClick={handleClick}
                href={element.href}
                onMouseEnter={() => setHoverElement(element.title)}
                onMouseLeave={() => setHoverElement("")}
                className={classNames(
                  "transition duration-300 ease-in-out",
                  hoverElement !== "" &&
                    hoverElement !== element.title &&
                    "text-neutral-600"
                )}
              >
                {element.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between px-3 text-sm pt-4 opacity-70 custom-border-top">
          {data.socials.map((element) => (
            <Link key={element.title} href={element.href} target="_blank">
              {element.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
