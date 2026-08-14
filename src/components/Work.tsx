import React from "react";
import { Fade } from "react-awesome-reveal";

const experiences = [
  {
    title: "Software Engineer",
    org: "Broadridge",
    duration: "August 2025 - Present",
    desc: [
      "Built fault-tolerant Kafka microservices & DR systems on AWS, saved $4.3M in potential losses and cut document turnaround time by 99% (8hrs → 1min).",
    ],
    img: {
      src: "/broadridge.jpeg",
      alt: "Software Engineer at Broadridge",
    },
  },
  {
    title: "Software Engineer Intern",
    duration: "January 2025 - July 2025",
    org: "Broadridge",
    desc: [
      "Re-architected a Go-based CI/CD validation pipeline, slashing validation time by 73% and saving 400+ engineering hours/year.",
    ],

    img: {
      src: "/broadridge.jpeg",
      alt: "Software Engineer at Broadridge",
    },
  },
  {
    title: "Software Development Engineer Intern",
    duration: "March 2023 - August 2023",
    org: "TaskLabs.Inc",
    desc: [
      "Built a Git-like diff-only version-control engine for a notes app with reverse-patch rollback, and shipped WebAssembly-powered image processing that cut conversion time by 42%.",
    ],
    img: { src: "/tasklabs.jpeg", alt: "TaskLabs Inc." },
  },
];

// //www.pexels.com/photo/retro-television-in-a-living-room-17552445/
// https: //www.pexels.com/photo/laptop-with-white-screen-4884119/
// https: //www.pexels.com/photo/black-iphone-7-on-brown-table-699122/

function Work() {
  return (
    <section className="md:px-7 px-4">
      <Fade
        cascade={true}
        damping={0.2}
        duration={900}
        fraction={0.5}
        triggerOnce
      >
        <p className="text-sm md:text-lg font-medium">
          Professional Experience
        </p>
      </Fade>

      {/* <p className={`text-sm md:text-[30px] font-medium ${fornier.className}`}>
        Professional Experience
      </p> */}

      <div className="flex flex-col my-1 md:my-3 border-t border-dotted border-neutral-300">
        <Fade
          cascade={true}
          damping={0.2}
          duration={900}
          fraction={0.5}
          triggerOnce
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between border-b border-dotted border-neutral-300 py-3"
            >
              <div className="flex flex-row items-center justify-between w-full ">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-sm text-black md:text-base font-medium">
                    {experience.title}
                  </h1>
                </div>
                <p className="text-sm text-black/50">{experience.duration}</p>
              </div>
              <div className="text-xs md:text-sm text-left w-full mb-2">
                {experience.org}
              </div>
              <div className="text-black/50 text-xs md:text-sm md:px-7 px-4 w-full">
                <ul className="text-xs md:text-sm">
                  {experience.desc.map((desc) => {
                    return (
                      <li key={desc} className="">
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}

export default Work;
