import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

function Socials({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        className="p-1.5 rounded hover:text-black hover:scale-105 duration-500 transition-all"
        href="https://github.com/Mano-08"
      >
        <Github className="h-5 w-5" />
      </Link>

      <Link
        className="p-1.5 rounded hover:text-black hover:scale-105 duration-500 transition-all"
        href="https://www.linkedin.com/in/wmano/"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        className="p-1.5 rounded hover:text-black hover:scale-105 duration-500 transition-all"
        href="https://x.com/manodotdev"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      <Link
        className="p-1.5 rounded hover:text-black hover:scale-105 duration-500 transition-all"
        href="mailto:mano.26q@gmail.com"
      >
        <Mail className="h-5 w-5" />
      </Link>
      {/* <Link
        href="mailto:mano.26q@gmail.com"
        className="px-1 text-xs text-green-500/80 py-0.5 rounded-full border border-solid border-green-500 flex flex-row items-center gap-1"
      >
        <div className="animate-pulse">&bull;</div>open to work
      </Link> */}
    </div>
  );
}

export default Socials;
