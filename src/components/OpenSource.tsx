import { ArrowUpRight, GitMerge } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

function OpenSource() {
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
          Open Source Contributions
        </p>
      </Fade>
      {/* <p className={`text-sm md:text-[30px] font-medium ${fornier.className}`}>
        Open Source Contributions
      </p> */}
      <div className="flex flex-col my-1 md:my-3 border-t border-dotted border-neutral-300">
        <Fade
          cascade={true}
          damping={0.2}
          duration={900}
          fraction={0.5}
          triggerOnce
        >
          <Link
            target="_blank"
            href="https://github.com/NeurProjects/neur-app/pull/130"
            className="flex flex-row items-start p-3 justify-between group border-b border-dotted border-neutral-300 py-5"
          >
            <div className="flex flex-row items-start gap-2">
              <GitMerge className="text-black h-6 w-6 md:h-8 md:w-8 my-1" />
              <div>
                <h1 className="group-hover:underline whitespace-nowrap duration-500 transition-all font-medium text-black/90  inline-flex md:text-base text-sm">
                  feat: save and manage prompts for reuse
                  <ArrowUpRight className="mx-1 h-5 w-5 md:h-auto md:w-auto" />
                </h1>
                <p className="text-black/50 text-xs md:text-sm">
                  Contributed to Neur Agent | The Intelligent Copilot for Solana
                </p>
              </div>
            </div>
            <p className="text-sm text-black/50 whitespace-nowrap md:block hidden">
              January 2025
            </p>
          </Link>

          <Link
            target="_blank"
            href="https://github.com/NeurProjects/neur-app/pull/241"
            className="flex flex-row items-start p-3 justify-between group border-b border-dotted border-neutral-300 py-5"
          >
            <div className="flex flex-row items-start gap-2">
              <GitMerge className="text-black h-6 w-6 md:h-8 md:w-8 my-1" />
              <div>
                <h1 className="group-hover:underline whitespace-nowrap duration-500 transition-all font-medium text-black/90  inline-flex md:text-base text-sm">
                  feat: add filters to prompts on homepage
                  <ArrowUpRight className="mx-1 h-5 w-5 md:h-auto md:w-auto" />
                </h1>
                <p className="text-black/50 text-xs md:text-sm">
                  Contributed to Neur Agent | The Intelligent Copilot for Solana
                </p>
              </div>
            </div>
            <p className="text-sm text-black/50 whitespace-nowrap md:block hidden">
              April 2025
            </p>
          </Link>
        </Fade>
      </div>
    </section>
  );
}

export default OpenSource;
