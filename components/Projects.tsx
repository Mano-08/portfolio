import idealCart from "../public/images/idealcart.png";
import github from "../public/images/githubProjects.svg";
import arrow from "../public/images/arrow.svg";
import data from "../content/projects.json";
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
        {data.projects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between py-6 px-3 md:py-14 md:px-14 border-t-[0.01rem] hover:cursor-default hover-project border-slate-700"
            >
              {/* <Image
                src={idealCart}
                alt="idealCart"
                className="w-full md:w-1/2 h-auto"
              /> */}
              <div className="w-full md:w-1/2 h-[40vh] bg-violet-100" />
              <aside className="flex flex-col justify-between w-full md:w-1/2 md:px-5">
                <div className="flex flex-col">
                  <p className="text-3xl">idealCart</p>
                  <ul className="py-2 list-outside text-zinc-800">
                    {project.context.map((contextElement, index) => (
                      <li key={index}>{contextElement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row justify-between">
                  <span>{project.date}</span>
                  <span className="flex flex-row gap-2">
                    <Link
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
                    </Link>
                    <Link
                      href={project.visit}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center"
                    >
                      <Image
                        priority
                        src={arrow}
                        alt="visit"
                        className="h-5 w-5 rotate-0 project-arrow transition duration-500"
                      />
                    </Link>
                  </span>
                </div>
              </aside>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
