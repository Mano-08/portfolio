import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { Fade } from "react-awesome-reveal";

type Project = {
  title: string;
  desc: string;
  github: string | null;
  live: string;
  video?: string;
  img: { src: string; alt: string };
};

const projects: Project[] = [
  {
    title: "Play Battleship",
    desc: "A real-time online strategy game. Custom AI heuristic using Manhattan distance and orientation inference. 500+ users globally.",
    github: "https://github.com/Mano-08/battleship",
    live: "https://playbattleship.vercel.app/",
    video:
      "https://res.cloudinary.com/djwhxlpk5/video/upload/v1786731353/playbattleship_lpkwpf.mp4",
    img: {
      src: "/projects/battleship.jpeg",
      alt: "Battleship Game",
    },
  },
  {
    title: "Zelix - Secure Bookmarks",
    desc: "A privacy-focused bookmark manager chrome extension. Features E2EE (End to End Encryption). 2000+ Daily Active Users. 4.8 star rating.",
    github: null,
    video:
      "https://res.cloudinary.com/djwhxlpk5/video/upload/v1786733021/zelix_demo_j_r5xblt.mp4",
    live: "https://chromewebstore.google.com/detail/eikknpnckalfaafkjkkjbikfbkbkdnfc?utm_source=portfolio",
    img: {
      src: "/projects/zelix.png",
      alt: "Zelix - Secure Bookmarks",
    },
  },

  {
    title: "MySol",
    desc: "A Solana utility tool that scans wallets for empty token accounts and helps users reclaim rent funds through an automated recovery flow.",
    github: null,
    live: "https://mysol-phi.vercel.app/",
    img: {
      src: "/projects/battleship.jpeg",
      alt: "Battleship Game",
    },
  },
  {
    title: "ImonTrack",
    desc: "HackNYU 2022; Built a cross-platform running habit tracker (Flutter, Laravel, MySQL) with streak tracking, social feed, and an IoT LED reminder using NodeMCU.",
    github: null,
    live: "https://devpost.com/software/imontrack",
    img: {
      src: "/projects/battleship.jpeg",
      alt: "Battleship Game",
    },
  },
  {
    title: "Mint for the Children",
    desc: "'For The Children' is an NFT charity platform where minting digital art from featured artists raises funds for children in the Dominican Republic.",
    github: "https://github.com/Nith567/mintForchildren",
    live: "https://mint-forchildren.vercel.app/",
    img: {
      src: "/projects/mint.png",
      alt: "For the children",
    },
  },
];

function Projects() {
  return (
    <section className="md:px-7 px-4">
      <Fade
        cascade={true}
        damping={0.2}
        duration={900}
        fraction={0.5}
        triggerOnce
      >
        <p className="text-sm md:text-lg font-semibold">Projects</p>
      </Fade>

      <div className="grid grid-cols-2 my-3 md:my-5 gap-3">
        <Fade
          cascade={true}
          damping={0.2}
          duration={900}
          fraction={0.5}
          triggerOnce
        >
          {projects.map((project: Project) => (
            <div
              key={project.title}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300 gap-5"
            >
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-medium md:text-base text-sm text-black/90">
                  {project.title}
                </h1>

                <div className="flex flex-row items-center">
                  {project.github && (
                    <Link
                      className="hover:scale-110 text-black p-1.5 rounded "
                      href={project.github}
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                  <Link
                    className="hover:scale-110 text-black p-1.5 rounded "
                    href={project.live}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {project.video && (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  style={{
                    width: "100%",
                    display: "block",
                    height: "auto",
                  }}
                  className="rounded-md"
                />
              )}
              <p className="text-xs md:text-sm">{project.desc}</p>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
