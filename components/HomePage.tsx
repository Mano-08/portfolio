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
            className="h-screen w-screen flex flex-col justify-center items-center"
          >
            <p className="text-[6rem] md:text-[8rem]">Hello.</p>
            <p className="w-[90vw] md:w-[25rem] text-center opacity-80">
              My name is Mano and I seek to expand my expertise in various
              domains of tech and product innovation.
            </p>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default HomePage;
