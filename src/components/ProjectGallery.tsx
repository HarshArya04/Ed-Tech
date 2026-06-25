import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const imageModules = import.meta.glob("../assets/Photos/Projects/*.{jpeg,jpg,png}", { eager: true });
const projectImages = Object.entries(imageModules)
  .map(([path, mod]) => {
    const src = (mod as { default: string }).default;
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const name = filename.replace(/\.(jpe?g|png)$/i, "").replace(/[-_]/g, " ");
    return { src, name };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const videoModules = import.meta.glob("../assets/Videos/*.{mp4,webm}", { eager: true });
const videos = Object.values(videoModules)
  .map((mod) => (mod as { default: string }).default)
  .sort();

const projects = [
  {
    title: "Smart Street Light",
    description: projectImages[0]?.name ?? "A fully functional prosthetic designed and printed by our students.",
    size: "large",
    featured: true,
    image: projectImages[0]?.src,
  },
  {
    title: "RC Car",
    description: projectImages[1]?.name ?? "FPV racing drone with custom flight controller.",
    size: "medium",
    featured: false,
    image: projectImages[1]?.src,
  },
  {
    title: "Radar System",
    description: projectImages[2]?.name ?? "Central automation system for home control.",
    size: "medium",
    featured: false,
    image: projectImages[2]?.src,
  },
  {
    title: "Sleep Detection System",
    description: projectImages[3]?.name ?? "6-axis robotic arm with computer vision.",
    size: "small",
    featured: false,
    image: projectImages[3]?.src,
  },
  {
    title: "Smart City",
    description: projectImages[4]?.name ?? "Solar-powered environmental monitoring system.",
    size: "small",
    featured: false,
    image: projectImages[4]?.src,
  },
  {
    title: "Sun tracking Solar Panel",
    description: projectImages[5]?.name ?? "Swarm coordination demonstration project.",
    size: "medium",
    featured: false,
    image: projectImages[5]?.src,
  },
];

export function ProjectGallery() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prevVideoIndex, setPrevVideoIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const filteredProjects = projects;

  return (
    <section className="relative py-24 px-6 bg-neutral-900/30">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Student Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Technology in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Action
            </span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Real projects built by real students. No mockups, no simulations—just
            tangible innovation.
          </p>
        </div>

        {/* Filter Tabs removed */}

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden
                bg-neutral-800/40 backdrop-blur-sm
                border border-neutral-700/50
                rounded-xl cursor-pointer
                transition-all duration-500
                hover:border-violet-500/30
                hover:bg-neutral-800/60
                ${project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "medium"
                    ? "md:col-span-1 md:row-span-1"
                    : ""
                }
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Placeholder */}
              <div
                className={`
                  relative bg-neutral-700/30
                  ${project.size === "large" ? "h-80" : "h-48"}
                `}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-neutral-600/50 flex items-center justify-center mx-auto mb-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-500/50" />
                      </div>
                      <span className="text-neutral-500 text-sm">
                        Project Image
                      </span>
                    </div>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm">
                    <span className="text-xs text-violet-300 font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent
                    transition-opacity duration-300
                    ${hoveredProject === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div> */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Carousel Section */}
        <div className="mt-12">
          <div className="relative overflow-hidden bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-2xl">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              {/*
                Fixed aspect container prevents layout jumps while videos load.
                We render the previous and current videos overlapping and crossfade their opacity.
              */}

              {prevVideoIndex !== null && (
                <video
                  src={videos[prevVideoIndex]}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                />
              )}

              <video
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => {
                  // start crossfade to next video
                  const next = (currentVideoIndex + 1) % videos.length;
                  setPrevVideoIndex(currentVideoIndex);
                  setCurrentVideoIndex(next);
                  // trigger transition on next animation frame so previous renders visible first
                  requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
                  // cleanup after transition
                  setTimeout(() => {
                    setPrevVideoIndex(null);
                    setIsTransitioning(false);
                  }, 1200);
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${prevVideoIndex !== null ? (isTransitioning ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}
              />

              <button
                type="button"
                onClick={() =>
                  setCurrentVideoIndex(
                    (prev) => (prev - 1 + videos.length) % videos.length
                  )
                }
                aria-label="Previous video"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
                }
                aria-label="Next video"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-3">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show video ${index + 1}`}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${index === currentVideoIndex ? "bg-white" : "bg-white/40"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}