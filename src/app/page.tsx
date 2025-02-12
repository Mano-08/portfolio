import Landing from "@/components/Landing";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Landing />
      <Work />
      <OpenSource />
      <Projects />
    </main>
  );
}
