import React from "react";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="flex flex-row items-end justify-between pt-10 mt-32 border-t border-solid border-black/50 pb-10">
      <p className="md:text-sm text-xs text-black/50">
        &copy; {new Date().getFullYear()} Mano
      </p>
      <Socials color={"rgb(0 0 0 / 0.5)"} />
    </footer>
  );
}

export default Footer;
