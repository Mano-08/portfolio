import React from "react";
import Link from "next/link";
import { Github, Linkedin, Send, Twitter } from "lucide-react";

function Socials({ color = "black" }: { color: string | undefined }) {
  return (
    <div className="flex flex-row items-center md:mx-0 mx-auto">
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://x.com/mano__08"
      >
        <Twitter color={color} className="h-4 w-4" />
      </Link>

      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://github.com/Mano-08"
      >
        <Github color={color} className="h-4 w-4" />
      </Link>

      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://www.linkedin.com/in/wmano/"
      >
        <Linkedin color={color} className="h-4 w-4" />
      </Link>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://t.me/mano_47"
      >
        <Send color={color} className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default Socials;
