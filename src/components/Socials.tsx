import React from "react";
import Link from "next/link";
import { Github, Linkedin, Send, Twitter } from "lucide-react";

function Socials({ className }: { className: string }) {
  return (
    <div className={className}>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://x.com/mano__08"
      >
        <Twitter className="h-4 w-4" />
      </Link>

      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://github.com/Mano-08"
      >
        <Github className="h-4 w-4" />
      </Link>

      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://www.linkedin.com/in/wmano/"
      >
        <Linkedin className="h-4 w-4" />
      </Link>
      <Link
        className="hover:bg-neutral-200 p-1.5 rounded transition-all duration-200"
        href="https://t.me/mano_47"
      >
        <Send className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default Socials;
