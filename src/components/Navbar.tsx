import React from "react";
import type { CategoryKey } from "./categoryData";
import Logo from "../assets/Logo_refined.png";

interface NavbarProps {
  onCategoryClick: (category: CategoryKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategoryClick }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full bg-black/60 backdrop-blur-md fixed top-0 left-0 z-30">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          <div className="flex-shrink-0">
            <img src={Logo} alt="EdTech logo" className="h-29 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 text-xl font-medium text-white">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-gray-300"
              >
                Home
              </a>

              <div className="relative group inline-block">
                <button className="hover:text-gray-300">Training Course</button>
                <div className="absolute left-0 top-full mt-2 w-40 bg-black/90 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-150">
                  <button onClick={() => onCategoryClick("STEM")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">STEM</button>
                  <button onClick={() => onCategoryClick("coding")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Coding</button>
                </div>
              </div>

              <div className="relative group inline-block">
                <button className="hover:text-gray-300">We Provide</button>
                <div className="absolute left-0 top-full mt-2 w-56 bg-black/90 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-150">
                  <button onClick={() => onCategoryClick("training")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Training</button>
                  <button onClick={() => onCategoryClick("scholarship")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Student Scholarship</button>
                  {/* <button onClick={() => onCategoryClick("workshop")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Workshop</button> */}
                  <button onClick={() => onCategoryClick("workshop_and_seminar")} className="block w-full text-left px-4 py-2 hover:bg-gray-800">Workshop and Seminars</button>
                </div>
              </div>

              <a
                href="#about-us"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about-us");
                }}
                className="hover:text-gray-300"
              >
                About Us
              </a>
              <a
                href="#contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact-us");
                }}
                className="hover:text-gray-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="px-3 py-2 border rounded">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
