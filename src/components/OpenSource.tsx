import { ArrowUpRight, GitMerge } from "lucide-react";
import Link from "next/link";
import React from "react";

function OpenSource() {
  return (
    <section>
      <p className="text-sm md:text-lg font-semibold">Bounties / Open Source</p>
      <div className="flex flex-col my-1 md:my-3 border-t border-dotted border-neutral-300">
        <Link
          href="https://github.com/NeurProjects/neur-app/pull/130"
          className="flex flex-row items-start p-3 justify-between group border-b border-dotted border-neutral-300 py-5"
        >
          <div className="flex flex-row items-start gap-2">
            <GitMerge className="h-6 w-6 md:h-8 md:w-8 my-1" />
            <div>
              <h1 className="group-hover:underline whitespace-nowrap duration-300 transition-all font-medium text-black/90  inline-flex md:text-base text-sm">
                Neur App | Intelligent Solana Copilot
                <ArrowUpRight className="mx-1 h-5 w-5 md:h-auto md:w-auto" />
              </h1>
              <p className="text-black/50 text-xs md:text-sm">
                Built prompt management feature to save and reuse prompts
              </p>
            </div>
          </div>
          <p className="text-sm text-black/50 whitespace-nowrap">Jan 2025</p>
        </Link>
      </div>
    </section>
  );
}

export default OpenSource;
