import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { CategoryKey } from "./categoryData";
import Logo from "../assets/Logo_refined.png";

interface NavbarProps {
  onCategoryClick: (category: CategoryKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategoryClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategorySelect = (category: CategoryKey) => {
    setIsOpen(false);
    onCategoryClick(category);
  };

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isOpen ? "bg-neutral-950 h-screen overflow-y-auto" : "bg-black/80 backdrop-blur-md border-b border-white/5"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="EdTech logo" className="h-16 md:h-29 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-white">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-violet-400 transition-colors"
            >
              Home
            </a>

            {/* Desktop Dropdown 1 */}
            <div className="relative group inline-block py-4">
              <button className="flex items-center gap-1 hover:text-violet-400 transition-colors">
                Training Course <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full mt-0 w-48 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 overflow-hidden">
                <button onClick={() => onCategoryClick("STEM")} className="block w-full text-left px-5 py-3 hover:bg-neutral-900 transition-colors">STEM</button>
                <button onClick={() => onCategoryClick("coding")} className="block w-full text-left px-5 py-3 hover:bg-neutral-900 transition-colors">Coding</button>
              </div>
            </div>

            {/* Desktop Dropdown 2 */}
            <div className="relative group inline-block py-4">
              <button className="flex items-center gap-1 hover:text-violet-400 transition-colors">
                We Provide <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full mt-0 w-60 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 overflow-hidden">
                <button onClick={() => onCategoryClick("training")} className="block w-full text-left px-5 py-3 hover:bg-neutral-900 transition-colors">Training</button>
                <button onClick={() => onCategoryClick("scholarship")} className="block w-full text-left px-5 py-3 hover:bg-neutral-900 transition-colors">Student Scholarship</button>
                <button onClick={() => onCategoryClick("workshop_and_seminar")} className="block w-full text-left px-5 py-3 hover:bg-neutral-900 transition-colors">Workshops & Seminars</button>
              </div>
            </div>

            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about-us");
              }}
              className="hover:text-violet-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact-us");
              }}
              className="hover:text-violet-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Content */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800">
          <div className="flex flex-col px-8 py-8 space-y-6 text-xl font-semibold text-white">
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-violet-400 transition-colors border-b border-neutral-800/50 pb-4"
            >
              Home
            </a>

            {/* Mobile Accordion 1 */}
            <div className="border-b border-neutral-800/50 pb-4">
              <button 
                onClick={() => toggleMobileDropdown('training')}
                className="flex items-center justify-between w-full text-left hover:text-violet-400 transition-colors"
              >
                Training Course
                <ChevronDown className={`w-6 h-6 transition-transform ${activeMobileDropdown === 'training' ? 'rotate-180 text-violet-400' : 'opacity-50'}`} />
              </button>
              {activeMobileDropdown === 'training' && (
                <div className="flex flex-col space-y-4 mt-5 pl-4 border-l-2 border-neutral-800">
                  <button onClick={() => handleCategorySelect("STEM")} className="text-left text-lg text-neutral-400 hover:text-white py-1">STEM</button>
                  <button onClick={() => handleCategorySelect("coding")} className="text-left text-lg text-neutral-400 hover:text-white py-1">Coding</button>
                </div>
              )}
            </div>

            {/* Mobile Accordion 2 */}
            <div className="border-b border-neutral-800/50 pb-4">
              <button 
                onClick={() => toggleMobileDropdown('provide')}
                className="flex items-center justify-between w-full text-left hover:text-violet-400 transition-colors"
              >
                We Provide
                <ChevronDown className={`w-6 h-6 transition-transform ${activeMobileDropdown === 'provide' ? 'rotate-180 text-violet-400' : 'opacity-50'}`} />
              </button>
              {activeMobileDropdown === 'provide' && (
                <div className="flex flex-col space-y-4 mt-5 pl-4 border-l-2 border-neutral-800">
                  <button onClick={() => handleCategorySelect("training")} className="text-left text-lg text-neutral-400 hover:text-white py-1">Training</button>
                  <button onClick={() => handleCategorySelect("scholarship")} className="text-left text-lg text-neutral-400 hover:text-white py-1">Student Scholarship</button>
                  <button onClick={() => handleCategorySelect("workshop_and_seminar")} className="text-left text-lg text-neutral-400 hover:text-white py-1">Workshops & Seminars</button>
                </div>
              )}
            </div>

            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about-us");
              }}
              className="hover:text-violet-400 transition-colors border-b border-neutral-800/50 pb-4"
            >
              About Us
            </a>
            
            <a
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact-us");
              }}
              className="hover:text-violet-400 transition-colors border-b border-neutral-800/50 pb-4"
            >
              Contact Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};