import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import data from "../content/data.json";
import arrow from "../public/images/arrowLight.svg";
import { socialIcons, socialIconsType } from "@/utils/socialIcons";
import Image from "next/image";

function Contact() {
  return (
    <div className="text-zinc-300 min-h-screen w-screen flex flex-col justify-between md:px-44 px-3 py-[4vh] md:py-[7vh] bg-dark">
      <section>
        <span className="flex p-3 md:px-14 text-xs md:text-sm text-slate-500 border-b-[0.2px] border-slate-700">
          CONTACT
        </span>

        <div className="flex flex-col md:px-14 px-3 py-2">
          <p className="text-[5rem] md:text-[6rem] font-thin leading-none">
            Get in touch
          </p>

          {/* <p className="pt-12 leading-snug w-full md:w-1/2">
            I would be happy to further discuss my experiences with you simply
            shoot me an email or message me on LinkedIn!
          </p> */}
          <Link
            href="mailto:mano.26q@gmail.com"
            className="text-[2.5rem] text-teal-200 font-thin py-10"
          >
            mano.26q&#64;gmail.com
          </Link>
          <div className="flex flex-col md:flex-row justify-between py-16">
            {data.socials.map((social: { title: string; href: string }) => (
              <Link
                key={social.title}
                href={social.href}
                rel="noreferrer"
                target="_blank"
                className="flex flex-row w-full md:w-1/6 border-b-[0.1px] py-2 hover:bg-[#120419] hover:px-2 transition-all duration-500 border-cyan-950 items-center justify-between text-teal-100"
              >
                <span>{social.title}</span>
                <Image
                  src={socialIcons[social.title as keyof socialIconsType]}
                  alt={social.title}
                  className="h-7 w-7"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-between px-3 md:px-14 font-thin text-sm">
          <span>&copy; Mano 2023</span>
          <Link
            href="https://www.github.com/Mano-08/my-portfolio"
            className="flex flex-row gap-2 items-center hover-project"
          >
            <span>Designed and developed by Mano </span>
            <Image
              src={arrow}
              alt="portfolio github repo"
              className="h-3 w-3 rotate-0 project-arrow transition duration-500"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;
