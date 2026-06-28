/// <reference types="vite/client" />
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slideModules = import.meta.glob("../assets/Photos/*.{jpeg,jpg,png}", { eager: true });
const slides = Object.values(slideModules).map((mod) => (mod as { default: string }).default);

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

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

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 top-8">
      <div className="absolute inset-0 m-4 rounded-[32px] overflow-hidden shadow-2xl shadow-black/40">
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />

        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute left-0 right-0 bottom-6 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug md:leading-tight">
          <span className="text-white">Empowering </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">young</span>
          <span className="text-white"> minds</span>
          <br />
          <span className="text-white">for a </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400">smarter</span>
          <span className="text-white"> future</span>
        </h1>

        {/* Sub-headline removed as requested */}

        {/* Stats Row */}
      </div>
    </section>
  );
}