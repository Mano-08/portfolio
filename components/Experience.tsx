import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import experiences from "../content/experiences.json";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function Experience() {
  return (
    <div
      id="work"
      className="relative z-[100] xl:px-64 md:px-44 px-3 min-h-screen w-screen bg-slate-50 py-[5.5vh] md:py-[8.5vh] duration-500 ease-in-out"
    >
      <span className="flex p-3 md:px-14 text-xs md:text-sm text-slate-500 custom-border-bottom">
        EXPERIENCE
      </span>
      <section className="my-4 w-full md:px-14 px-3 gap-16 flex flex-col">
        {experiences.experiences.map((experience) => {
          return (
            <section
              key={experience.company}
              className="flex flex-col text-zinc-500"
            >
              <Reveal
                triggerOnce
                keyframes={customAnimation}
                cascade
                damping={0.1}
              >
                <div className="flex flex-row justify-between items-end my-1">
                  <div className="flex flex-row gap-2 items-end">
                    <div className="text-[1.4rem] md:text-2xl font-semibold text-black">
                      {experience.role + " "}
                    </div>
                    <div className="hidden md:block">-</div>
                    <div className="text-base hidden md:block">
                      {experience.location}
                    </div>
                  </div>
                  <div className="text-base hidden md:block">
                    {experience.duration}
                  </div>
                </div>
              </Reveal>

              <Reveal
                triggerOnce
                keyframes={customAnimation}
                cascade
                damping={0.1}
                delay={50}
              >
                <div className="text-xl font-semibold text-zinc-700">
                  {experience.company}
                </div>
              </Reveal>

              <Reveal
                triggerOnce
                keyframes={customAnimation}
                cascade
                damping={0.1}
                delay={100}
              >
                <ul className="px-0.5 md:px-12 md:pr-48 my-2">
                  {experience.description.map((content, index) => {
                    return (
                      <li
                        className="flex flex-row items-start gap-4"
                        key={index}
                      >
                        <div>●</div>
                        {content.desc ? (
                          <div key={index}>{content.desc}</div>
                        ) : (
                          content.technology && (
                            <>
                              <div className="text-zinc-500 items-end">
                                <span className="font-semibold ">Tools: </span>
                                {content.technology.map((tech, index) => {
                                  return (
                                    <span key={tech}>
                                      {tech}
                                      {index !==
                                        content.technology.length - 1 && ", "}
                                    </span>
                                  );
                                })}
                              </div>
                            </>
                          )
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default Experience;
