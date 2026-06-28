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
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";

// Define our valid pages
export type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Helper function to handle category clicks (ensure we go back to home if we are on a policy page)
  const handleCategoryClick = (category: CategoryKey) => {
    setCurrentPage('home');
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden flex flex-col">
      {/* Pass a new prop to Navbar so clicking "Home" resets the view 
        Note: You will need to add onNavigate={() => setCurrentPage('home')} to your Navbar props!
      */}
      <Navbar onCategoryClick={handleCategoryClick}
        onNavigateHome={() => setCurrentPage('home')} />

      <AnimatedBackground />

      <main className="relative z-10 flex-grow pt-16">
        {/* Conditional Rendering based on state */}
        {currentPage === 'home' && (
          <>
            <Hero />
            <CourseGrid onCategoryClick={handleCategoryClick} />
            <ProjectGallery />
            <Mentors />
            <ContactUs />
          </>
        )}

        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
      </main>

      {/* Footer stays at the bottom, passing the routing setter down */}
      <div className="relative z-10">
        <Footer
          onCategoryClick={handleCategoryClick}
          onNavigate={setCurrentPage}
        />
      </div>

      <CategoryModal
        category={selectedCategory ? COURSE_CATEGORIES[selectedCategory] : null}
        onClose={() => setSelectedCategory(null)}
      />
    </div>
  );
}