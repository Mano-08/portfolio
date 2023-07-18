import dynamic from "next/dynamic";
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
          <div
            id="home"
            className="h-screen w-screen px-5 md:px-60 flex flex-col justify-center"
          >
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
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default HomePage;
