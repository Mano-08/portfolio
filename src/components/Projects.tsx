import React from "react";
import { ExternalLink, Github } from "lucide-react";
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
    desc: "Chrome extension to save products across a multitude of websites",
    github: "https://github.com/Mano-08/idealCart",
    img: { src: "/projects/idealcart.png", alt: "ideal cart" },
    live: "https://chromewebstore.google.com/detail/idealcart-your-shopping-p/ofbkfkeekmaiigkhoinhlknpniijddba",
  },
];

function Projects() {
  return (
    <>
      <section>
        <p className="text-sm md:text-base font-medium">Projects</p>

        <div className="grid md:grid-cols-2 grid-cols-1 my-3 md:my-5 gap-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300"
            >
              <Link
                href={project.live}
                className="overflow-hidden rounded mb-2"
              >
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  height={500}
                  width={500}
                  priority
                  className="h-[200px] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-medium md:text-base text-sm">
                  {project.title}
                </h1>

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
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <p className="opacity-50 text-xs md:text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="text-sm md:text-base">Freelance</p>
        <div className="grid md:grid-cols-2 grid-cols-1 my-1 md:my-3 gap-3">
          {FreelanceProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300"
            >
              <Link
                href={project.live}
                className="overflow-hidden rounded mb-2"
              >
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  height={500}
                  width={500}
                  priority
                  className="h-[200px] group-hover:scale-105 transition-all duration-500 w-auto object-cover"
                />
              </Link>
              <div className="flex flex-row items-start justify-between">
                <h1 className="font-medium text-sm md:text-base">
                  {project.title}
                </h1>

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
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-row my-1 items-center gap-1 text-xs md:text-sm ">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="cursor-pointer rounded-full px-4 py-0.5 border border-solid hover:text-black/80 hover:border-black/80 text-black/50 border-black/50 transition-all duration-300"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-black/50 text-xs md:text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
