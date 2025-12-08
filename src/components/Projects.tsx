import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FreelanceProjects = [
  {
    title: "Mint for the Children",
    desc: "",
    tags: ["zora", "blockchain"],
    img: {
      src: "https://res.cloudinary.com/djwhxlpk5/image/upload/v1765157639/mint_dyce4q.png",
      alt: "For the children",
    },
    github: "https://github.com/Nith567/mintForchildren",
    live: "https://mint-forchildren.vercel.app/",
  },
  {
    title: "50MM Collections",
    desc: "",
    tags: ["full-stack", "dApp"],
    img: {
      src: "https://res.cloudinary.com/djwhxlpk5/image/upload/v1765157641/smart_refybx.png",
      alt: "50MM Collections",
    },
    github: "https://github.com/Mano-08/theSmartWallet",
    live: "https://the-smart-wallet.vercel.app/",
  },
];

type Project = {
  title: string;
  desc: string;
  github: string | null;
  live: string;
  img: { src: string; alt: string };
};

const projects: Project[] = [
  {
    title: "Play Battleship",
    desc: "A real-time online strategy game built with Next.js, Node.js, Firebase, and Socket.io, featuring live multiplayer gameplay and a custom AI powered by Manhattan heuristics and orientation inference.",
    github: "https://github.com/Mano-08/battleship",
    live: "https://playbattleship.vercel.app/",
    img: {
      src: "/projects/battleship.jpeg",
      alt: "Battleship Game",
    },
  },
  {
    title: "Zelix - Secure Bookmarks",
    desc: "A privacy-focused bookmark manager chrome extension that encrypts and protects saved links behind a password-secured interface.",
    github: null,
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
];

function Projects() {
  // const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  // const handleMouseMove = (e: React.MouseEvent) => {
  //   setTargetPos({
  //     x: e.clientX,
  //     y: e.clientY,
  //   });
  // };
  // useEffect(() => {
  //   let animationFrameId: number;

  //   const animate = () => {
  //     setMousePos((prev) => ({
  //       x: prev.x + (targetPos.x - prev.x) * 0.1,
  //       y: prev.y + (targetPos.y - prev.y) * 0.1,
  //     }));
  //     animationFrameId = requestAnimationFrame(animate);
  //   };

  //   animate();

  //   return () => cancelAnimationFrame(animationFrameId);
  // }, [targetPos]);
  return (
    <>
      <section className="md:px-7 px-4">
        <p className="text-sm md:text-lg font-semibold">Projects</p>

        <div className="grid grid-cols-1 my-3 md:my-5 gap-3">
          {projects.map((project: Project) => (
            <div
              key={project.title}
              // onMouseEnter={() => setHoveredProject(project)}
              // onMouseLeave={() => setHoveredProject(null)}
              // onMouseMove={handleMouseMove}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300"
            >
              {/* {hoveredProject?.title === project.title && (
                <div
                  className="fixed pointer-events-none z-50 px-8 py-16 bg-cyan-300 transition-opacity duration-500"
                  style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: "translate(-100%, -100%)",
                  }}
                >
                  <img
                    src={project.img.src}
                    alt={project.img.alt}
                    className="w-[350px] h-[200px] rounded object-cover shadow-2xl"
                  />
                </div>
              )} */}
              {/* <Link
                href={project.live}
                className="overflow-hidden rounded mb-2"
              >
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  height={500}
                  width={500}
                  priority
                  className="h-[200px] w-full group-hover:scale-105 transition-all duration-500 object-cover"
                />
              </Link> */}
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
              <p className="text-xs md:text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative border-b border-gray-800 pb-8"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={handleMouseMove}
            >
              {hoveredProject?.title === project.title && (
                <div
                  className="fixed pointer-events-none rounded z-50 p-10 bg-cyan-300 transition-opacity duration-500"
                  style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={project.img.src}
                    alt={project.img.alt}
                    className="w-[350px] h-[250px] rounded object-cover shadow-2xl"
                  />
                </div>
              )}

              <h1 className="text-3xl font-semibold hover:text-blue-400 transition-colors cursor-pointer">
                {project.title}
              </h1>
            </div>
          ))}
        </div> */}
      </section>

      <section className="md:px-7 px-4">
        <p className="text-sm md:text-lg font-semibold">Freelance</p>
        <div className="grid md:grid-cols-2 grid-cols-1 my-1 md:my-3 gap-3">
          {FreelanceProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-2.5 group border rounded-md border-solid border-neutral-300"
            >
              <Link
                href={project.live}
                className="overflow-hidden rounded mb-2"
              >
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  height={500}
                  width={500}
                  priority
                  className="h-[200px] w-full group-hover:scale-105 transition-all duration-500 object-cover"
                />
              </Link>
              <div className="flex flex-row items-start justify-between">
                <h1 className="font-medium text-black text-sm md:text-base">
                  {project.title}
                </h1>

                <div className="flex flex-row items-center">
                  <Link
                    className="hover:scale-110 transition-all duration-500 text-black p-1.5 rounded "
                    href={project.github}
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link
                    className="hover:scale-110 transition-all duration-500 text-black p-1.5 rounded "
                    href={project.live}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-row my-1 items-center gap-1 text-xs md:text-sm ">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="cursor-pointer rounded-full px-4 py-0.5 border border-solid hover:text-black/80 hover:border-black/80 text-black/50 border-black/50 transition-all duration-500"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="text-black/50 text-xs md:text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
