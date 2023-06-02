import idealCart from "../public/images/idealcart.png";
import github from "../public/images/github.svg";
import arrow from "../public/images/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="min-h-screen w-screen md:px-44 px-3 py-[4vh] md:py-[7vh]">
      <span className="px-3 md:px-14 text-xs md:text-sm text-slate-500">
        PROJECTS
      </span>
      <div className="flex flex-col w-full relative py-4">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between py-6 px-3 md:py-14 md:px-14 border-t-[0.01rem] hover:cursor-default hover-project border-slate-700">
          <Image
            src={idealCart}
            alt="idealCart"
            className="w-full md:w-1/2 h-auto"
          />
          {/* <div className="w-full md:w-1/2 h-[30vh] bg-violet-100" /> */}
          <aside className="flex flex-col justify-between w-full md:w-1/2 md:px-5">
            <div className="flex flex-col">
              <p className="text-3xl">idealCart</p>
              <ul className="py-2 list-outside text-zinc-800">
                <li>
                  Embark on a shopping adventure across a multitude of websites
                  yet effortlessly manage them all in your idealCart
                </li>
                <li></li>
              </ul>
            </div>
            <div className="flex flex-row justify-between">
              <span>July, 2022</span>
              <span className="flex flex-row gap-1">
                <Link href="www.github.com" target="_blank" rel="noreferrer">
                  <Image
                    priority
                    src={github}
                    alt="github"
                    className="h-9 w-9"
                  />
                </Link>
                <Link href="" target="_blank" rel="noreferrer">
                  <Image
                    priority
                    src={arrow}
                    alt="visit"
                    className="h-9 w-9 rotate-45 project-arrow transition duration-500"
                  />
                </Link>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Projects;
