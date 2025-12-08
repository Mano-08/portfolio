import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between pt-10 mt-32 px-4 md:px-0 border-t border-solid border-black/30 pb-10">
      <p className="md:text-sm text-xs text-black/50">
        &copy; {new Date().getFullYear()} Mano
      </p>
      <Socials className="flex flex-row items-center text-black/50" />
    </footer>
  );
}

export default Footer;
