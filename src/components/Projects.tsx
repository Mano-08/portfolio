import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FreelanceProjects = [
  {
    title: "Mint for the Children",
    desc: "",
    tags: ["zora", "blockchain"],
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
    desc: "Two player online battleship game",
    github: "https://github.com/Mano-08/battleship",
    live: "https://playbattleship.vercel.app/",
  },
  {
    title: "Zelix - Secure Bookmarks",
    desc: "Keep your bookmarks private with a password",
    github: null,
    live: "https://chromewebstore.google.com/detail/eikknpnckalfaafkjkkjbikfbkbkdnfc?utm_source=portfolio",
  },
  {
    title: "MySol",
    desc: "Reclaim your forgotten solana rents",
    github: null,
    live: "https://mysol-phi.vercel.app/",
  },
];

function Projects() {
  return (
    <>
      <section>
        <p className="text-sm md:text-lg font-semibold">Projects</p>

        <div className="grid md:grid-cols-2 grid-cols-1 my-3 md:my-5 gap-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300"
            >
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-medium md:text-base text-sm text-black/90">
                  {project.title}
                </h1>

                <div className="flex flex-row items-center">
                  {project.github && (
                    <Link
                      className="hover:bg-neutral-200 p-2 rounded "
                      href={project.github}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
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
        <p className="text-sm md:text-lg font-semibold">Freelance</p>
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
                  className="h-[200px] w-full group-hover:scale-105 transition-all duration-500 object-cover"
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
