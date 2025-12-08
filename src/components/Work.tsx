import React from "react";

const experiences = [
  {
    title: "Broadridge Financial Solutions",
    duration: "January 2025 - Present",
    // role: "Member Technical",
    desc: [
      `SWE intern; Winter 2025; Automated audit report generation with distributed pipelines.`,
      `SWE; August 2025 to present; Optimizing Message Queue validation pipelines.`,
    ],
    // shortRole: "Member Technical",
    img: {
      src: "/broadridge.jpeg",
      alt: "Broadridge Financial Solutions",
    },
  },
  {
    title: "TaskLabs Inc.",
    duration: "March 2023 - August 2023",
    // role: "SoftwaIntern",
    desc: [
      `SDE intern; March to August 2023; Migrated backend service to WASM.`,
    ],
    // shortRole: "Member Technical",?
    img: { src: "/tasklabs.jpeg", alt: "TaskLabs Inc." },
  },
];

// //www.pexels.com/photo/retro-television-in-a-living-room-17552445/
// https: //www.pexels.com/photo/laptop-with-white-screen-4884119/
// https: //www.pexels.com/photo/black-iphone-7-on-brown-table-699122/

function Work() {
  return (
    <section className="md:px-7 px-4">
      <p className="text-sm md:text-lg font-medium">Professional Experience</p>

      {/* <p className={`text-sm md:text-[30px] font-medium ${fornier.className}`}>
        Professional Experience
      </p> */}

      <div className="flex flex-col my-1 md:my-3 border-t border-dotted border-neutral-300">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between border-b border-dotted border-neutral-300 py-3"
          >
            <div className="flex flex-row items-center justify-between w-full mb-2">
              <div className="flex flex-row items-center gap-2">
                {/* <Image
                  height={45}
                  width={45}
                  src={experience.img.src}
                  alt={experience.img.alt}
                  className="rounded-sm"
                  priority
                /> */}
                <h1 className="text-sm text-black md:text-base font-medium">
                  {experience.title}
                </h1>
              </div>
              <p className="text-sm text-black/50">{experience.duration}</p>
            </div>
            <div className="text-black/50 text-xs md:text-sm md:px-7 px-4 w-full">
              <ul className="text-xs md:text-sm">
                {experience.desc.map((desc) => {
                  return (
                    <li key={desc} className="list-disc">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              {/* <span className="md:hidden block">{experience.shortRole}</span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
