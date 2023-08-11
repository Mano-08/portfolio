import dynamic from "next/dynamic";
import Image from "next/image";
import cat from "../public/images/cat.svg";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

function HomePage() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer className="h-screen">
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className="h-screen w-screen px-5 lg:px-0 flex items-center justify-center">
            <div className="flex gap-20 lg:flex-row flex-col-reverse items-center">
              <div id="home" className=" flex flex-col justify-center">
                <span className="text-[3rem] leading-none opacity-70 md:text-[4rem] font-medium">
                  Hello,
                </span>
                <span className="text-[5rem] font-medium leading-none md:text-[6rem]">
                  I&#8217;m Mano
                </span>
                <p className="w-[90vw] my-3 md:w-[25rem] opacity-90">
                  I am a hobbyist coder based in India. I seek to expand my
                  expertise in various domains of tech and product innovation.
                </p>
              </div>
              <Image
                src={cat}
                alt="cat"
                className="lg:w-[20vw] w-[60vw] h-auto hover:opacity-[0.04] transition-opacity duration-300 opacity-[0.02]"
              />
            </div>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default HomePage;
