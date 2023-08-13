import Image from "next/image";
import cat from "../public/images/cat.svg";
import { customAnimation } from "@/utils/animation";
import Reveal from "react-awesome-reveal";

function HomePage() {
  return (
    <div
      id="home"
      className="h-screen w-screen px-5 lg:px-0 flex items-center justify-center"
    >
      <div className="flex gap-20 lg:flex-row flex-col-reverse items-center">
        <div className=" flex flex-col justify-center">
          <span className="reveal-custom text-[2.85rem] sm:text-[3rem] leading-none text-zinc-500 md:text-[4rem] font-medium">
            Hello,
          </span>
          <span className="reveal-custom text-[4.1rem] sm:text-[4.5rem] font-medium leading-none md:text-[6rem]">
            I&#8217;m Mano
          </span>
          <div className="w-[90vw] my-3 md:w-[25rem] opacity-90 text-[0.88rem] sm:text-base">
            <div className="reveal-custom-info">
              I am a hobbyist coder based in India. I seek to
            </div>{" "}
            <div className="reveal-custom-info">
              expand my expertise in various domains of
            </div>{" "}
            <div className="reveal-custom-info">
              tech and product innovation.
            </div>
          </div>
        </div>
        <Image
          src={cat}
          alt="cat"
          className="lg:w-[20vw] w-[60vw] h-auto hover:opacity-[0.06] transition-opacity duration-300 opacity-[0.03]"
        />
      </div>
    </div>
  );
}

export default HomePage;
