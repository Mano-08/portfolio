import React from "react";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FreelanceProjects = [
  {
    title: "Mint for the Children",
    desc: "",
    tags: ["front-end", "blockchain"],
    img: {
      src: "/projects/mint.png",
      alt: "For the children",
    },
    github: "https://github.com/Nith567/mintForchildren",
    live: "https://mint-forchildren.vercel.app/",
  },
  {
    title: "50MM Collections",
    desc: "",
    tags: ["full-stack", "dApp"],
    img: {
      src: "/projects/smart.png",
      alt: "50MM Collections",
    },
    github: "https://github.com/Mano-08/theSmartWallet",
    live: "https://the-smart-wallet.vercel.app/",
  },
];

const projects = [
  {
    title: "Battleship",
    desc: "Two player online battleship game, conquer the seas",
    github: "https://github.com/Mano-08/battleship",
    img: { src: "/projects/battleship.png", alt: "Battleship" },
    live: "https://playbattleship.vercel.app/",
  },
  {
    title: "Ideal Cart",
    desc: "Chrome extension to shop across a multitude of websites",
    github: "https://github.com/Mano-08/idealCart",
    img: { src: "/projects/idealcart.png", alt: "ideal cart" },
    live: "https://chromewebstore.google.com/detail/idealcart-your-shopping-p/ofbkfkeekmaiigkhoinhlknpniijddba",
  },
];

function Projects() {
  return (
    <>
      <section>
        <p className="text-sm md:text-base">projects</p>

        <div className="grid md:grid-cols-2 grid-cols-1 my-3 md:my-5 gap-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col gap-2 p-2.5 hover:p-3 transition-all duration-500 hover:border rounded-md border-solid hover:border-neutral-700"
            >
              <Image
                src={project.img.src}
                alt={project.img.alt}
                height={500}
                width={500}
                priority
                className="rounded h-[200px] w-auto object-cover"
              />
              <div className="flex flex-row items-start justify-between">
                <div>
                  <h1 className="font-medium md:text-base text-sm">
                    {project.title}{" "}
                  </h1>
                  <p className="opacity-50 text-xs md:text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-row items-center">
                    <Link
                      className="hover:bg-neutral-200 p-2 rounded "
                      href={project.github}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link
                      className="hover:bg-neutral-200 p-2 rounded "
                      href={project.live}
                    >
                      <Globe className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-sm md:text-base">0{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="text-sm md:text-base">freelance</p>
        <div className="grid md:grid-cols-2 grid-cols-1 my-3 md:my-5 gap-3">
          {FreelanceProjects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col gap-2 p-2.5 hover:p-3 transition-all duration-500 hover:border rounded-md border-solid hover:border-neutral-700"
            >
              <Image
                src={project.img.src}
                alt={project.img.alt}
                height={500}
                width={500}
                priority
                className="rounded h-[200px] w-auto object-cover"
              />
              <div className="flex flex-row items-start justify-between">
                <div>
                  <h1 className="font-medium text-sm md:text-base">
                    {project.title}
                  </h1>
                  <p className="text-black/50 text-xs md:text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-row my-1 items-center gap-1 text-xs md:text-sm ">
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="rounded-full px-4 py-0.5 border border-solid hover:text-black/80 hover:border-black/80 text-black/50 border-black/50 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center">
                    <Link
                      className="hover:bg-neutral-200 p-2 rounded "
                      href={project.github}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    <Link
                      className="hover:bg-neutral-200 p-2 rounded "
                      href={project.live}
                    >
                      <Globe className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-sm md:text-base">0{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
