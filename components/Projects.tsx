import idealCart from "../public/images/idealcart.png";
import github from "../public/images/githubProjects.svg";
import arrow from "../public/images/arrow.svg";
import data from "../content/projects.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/animation";
import { images } from "@/utils/images";

function Projects() {
  return (
    <div
      id="projects"
      className="relative z-[100] xl:px-64 md:px-44 px-3 min-h-screen w-screen bg-slate-50 py-[4vh] md:py-[7vh]"
    >
      <span className="flex px-3 md:px-14 text-xs md:text-sm text-slate-500">
        PROJECTS
      </span>
      <div className="flex flex-col w-full relative py-4 pb-[10vh]">
        {data.projects.map((project, index) => {
          return (
            <Link
              href={project.visit}
              target="_blank"
              rel="noreferrer"
              key={project.key}
              className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between py-6 px-3 md:py-14 md:px-14 cursor-pointer custom-border-top hover:cursor-default hover-project"
            >
              <Image
                src={images[project.key]}
                alt={project.title}
                className="w-full md:w-1/2 h-auto cursor-pointer custom-border"
              />
              <div className="flex flex-col justify-between w-full md:w-1/2 md:px-5 cursor-pointer">
                <div className="flex flex-col">
                  <Reveal
                    triggerOnce
                    keyframes={customAnimation}
                    cascade
                    damping={0.1}
                  >
                    <p className="text-3xl">{project.title}</p>
                    <ul className="py-2 list-outside text-zinc-800">
                      {project.context.map((contextElement, index) => (
                        <li key={index}>{contextElement}</li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
                <div className="flex flex-row justify-between items-end">
                  <span>{project.date}</span>
                  <span className="flex flex-row gap-2">
                    {/* <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        priority
                        src={github}
                        alt="github"
                        className="h-9 w-9"
                      />
                    </Link> */}
                    <div className="flex justify-center items-center">
                      <Image
                        priority
                        src={arrow}
                        alt="visit"
                        className="h-5 w-5 rotate-0 project-arrow transition duration-500"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
