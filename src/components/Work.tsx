import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Broadridge | Intern",
    duration: "Jan 2025 - present",
    desc: "Site reliability engineering team, Kubernetes, Ansible",
    img: {
      src: "/broadridge.jpeg",
      alt: "Broadridge Financial Solutions",
    },
  },
  {
    title: "TaskLabs Inc. | SDE Intern",
    duration: "May 2023 - Jul 2023",
    desc: "Full stack engineering, Next.js, AWS",
    img: { src: "/tasklabs.jpeg", alt: "TaskLabs Inc." },
  },
];

// //www.pexels.com/photo/retro-television-in-a-living-room-17552445/
// https: //www.pexels.com/photo/laptop-with-white-screen-4884119/
// https: //www.pexels.com/photo/black-iphone-7-on-brown-table-699122/

function Work() {
  return (
    <section>
      <p className="text-sm md:text-base">work</p>
      <div className="flex flex-col my-3 md:my-5 border-t border-solid border-neutral-300">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-row items-start justify-between border-b border-solid border-neutral-300 py-5"
          >
            <div className="flex flex-row items-start gap-2">
              <Image
                height={50}
                width={50}
                src={experience.img.src}
                alt={experience.img.alt}
                className="rounded-md"
                priority
              />
              <div>
                <h1 className="font-medium text-sm md:text-base">
                  {experience.title}
                </h1>
                <p className="text-black/50 text-xs md:text-sm">
                  {experience.duration}
                  <br />
                  {experience.desc}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base">0{index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
