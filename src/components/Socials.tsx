import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

function Socials({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded "
        href="https://github.com/Mano-08"
      >
        <Github className="h-4 w-4" />
      </Link>

      <Link
        className="hover:bg-neutral-200 p-1.5 rounded "
        href="https://www.linkedin.com/in/wmano/"
      >
        <Linkedin className="h-4 w-4" />
      </Link>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded "
        href="https://x.com/mano__08"
      >
        <Twitter className="h-4 w-4" />
      </Link>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded "
        href="mailto:mano.26q@gmail.com"
      >
        <Mail className="h-4 w-4" />
      </Link>
      <Link
        href="mailto:mano.26q@gmail.com"
        className="px-1 text-xs text-green-500/80 py-0.5 rounded-full border border-solid border-green-500 flex flex-row items-center gap-1"
      >
        <div className="animate-pulse">&bull;</div>open to work
      </Link>
    </div>
  );
}

export default Socials;
