import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideModules = import.meta.glob("../assets/Photos/*.{jpeg,jpg,png}", { eager: true });
const slides = Object.entries(slideModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .slice(0, 10)
  .map(([, mod]) => (mod as { default: string }).default);

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
      if (event.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    };

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearInterval(interval);
    };
  }, []);

  if (!slides.length) {
    return null;
  }

  return (
    <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/30">
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] bg-black">
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Photo ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute left-0 right-0 bottom-4 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
