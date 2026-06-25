import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { CourseGrid } from "./components/CourseGrid";
import { ProjectGallery } from "./components/ProjectGallery";
import { Mentors } from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CategoryModal } from "./components/CategoryModal";
import { COURSE_CATEGORIES, type CategoryKey } from "./components/categoryData";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      <Navbar onCategoryClick={setSelectedCategory} />
      <AnimatedBackground />
      <main className="relative z-10 pt-16">
        <Hero />
        <CourseGrid onCategoryClick={setSelectedCategory} />
        <ProjectGallery />
        <Mentors />
        <ContactUs />
        <Footer onCategoryClick={setSelectedCategory} />
      </main>
      <CategoryModal category={selectedCategory ? COURSE_CATEGORIES[selectedCategory] : null} onClose={() => setSelectedCategory(null)} />
    </div>
  );
}