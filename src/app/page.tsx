"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Landing from "@/components/Landing";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      gestureOrientation: "vertical",
      orientation: "vertical",
      autoResize: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="flex flex-col gap-10">
      <Landing />
      <Work />
      <OpenSource />
      <Projects />
    </main>
  );
}
