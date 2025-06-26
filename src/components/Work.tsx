import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Broadridge",
    duration: "Jan - Jul 2025",
    desc: "SWE Intern | Go, Kubernetes, React",
    shortDesc: "SWE Intern",
    img: {
      src: "/broadridge.jpeg",
      alt: "Broadridge Financial Solutions",
    },
  },
  {
    title: "TaskLabs",
    duration: "Mar - Aug 2023",
    desc: "SDE Intern | AWS, Next.js, Python",
    shortDesc: "SDE Intern",
    img: { src: "/tasklabs.jpeg", alt: "TaskLabs Inc." },
  },
];

// //www.pexels.com/photo/retro-television-in-a-living-room-17552445/
// https: //www.pexels.com/photo/laptop-with-white-screen-4884119/
// https: //www.pexels.com/photo/black-iphone-7-on-brown-table-699122/

function Work() {
  return (
    <section>
      <p className="text-sm md:text-lg font-semibold">Work</p>
      <div className="flex flex-col my-1 md:my-3 border-t border-dotted border-neutral-300">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between border-b border-dotted border-neutral-300 py-3"
          >
            <div className="flex flex-row items-center gap-2">
              <Image
                height={35}
                width={35}
                src={experience.img.src}
                alt={experience.img.alt}
                className="rounded-md"
                priority
              />
              <h1 className="text-sm text-black/90 md:text-base font-medium">
                {experience.title}
              </h1>
              <p className="text-black/50 text-xs md:text-sm">
                <span className="hidden md:block">{experience.desc}</span>{" "}
                <span className="md:hidden block">{experience.shortDesc}</span>
              </p>
            </div>
            <p className="text-sm text-black/50">{experience.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
