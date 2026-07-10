import type { ComponentType } from "react";
import type { CategoryKey } from "./categoryData";
import { X } from "lucide-react";

interface CourseModalProps {
  course: {
    title: string;
    description: string;
    icon: ComponentType<any>;
    gradient: string;
    stats: string;
    details: {
      duration: string;
      students: string;
      projects: string;
      description: string;
      highlights: string[];
      image: string;
    };
  } | null;
  onClose: () => void;
  onCategoryClick: (category: CategoryKey) => void;
}

export function CourseModal({ course, onClose, onCategoryClick }: CourseModalProps) {
  if (!course) return null;

  const Icon = course.icon;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* FIX APPLIED HERE: 
        Changed overflow-y-auto to overflow-hidden and added flex flex-col 
        so the main container doesn't scroll, keeping the close button pinned.
        Reduced max-h from 90vh to 70vh for a smaller modal height.
      */}
      <div className="relative w-full max-w-4xl max-h-[70vh] flex flex-col overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
        
        {/* Close Button - Now floats above the scrolling content with a high z-index */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500/50 hover:bg-neutral-800 transition-all duration-300 shadow-xl"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container - Only this part scrolls now */}
        <div className="overflow-y-auto w-full flex-1">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20`} />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

            {/* Course Icon Badge */}
            <div className="absolute top-6 left-6 z-10 flex items-center justify-center w-16 h-16 rounded-3xl bg-neutral-900/80 border border-white/10 text-white">
              <Icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Course Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${course.gradient} opacity-30 blur-3xl absolute`} />
                <div className="relative w-48 h-48 rounded-3xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-6xl">{course.details.image}</span>
                </div>
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h2>
              <p className="text-neutral-300">{course.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">About This Course</h3>
              <p className="text-neutral-300 leading-relaxed">{course.details.description}</p>
              {course.title === "Workshops and Seminars" && (
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      const target = document.getElementById("contact-us");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-white font-semibold hover:shadow-xl transition"
                  >
                    More Query? Contact us
                  </button>
                </div>
              )}
            </div>

            {/* Action Boxes */}
            {course.title !== "Hands-on Practice" && course.title !== "Student Scholarship" && course.title !== "Workshops and Seminars" && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Choose a Track</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => { onCategoryClick("STEM"); onClose(); }}
                    className="w-full h-40 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-200"
                    aria-label="Select STEM"
                  >
                    <div className="text-4xl">🔬</div>
                    <div className="text-lg font-semibold text-white">STEM</div>
                    <div className="text-sm text-neutral-400">Explore science & engineering paths</div>
                  </button>

                  <button
                    onClick={() => { onCategoryClick("coding"); onClose(); }}
                    className="w-full h-40 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-200"
                    aria-label="Select Coding"
                  >
                    <div className="text-4xl">💻</div>
                    <div className="text-lg font-semibold text-white">Coding</div>
                    <div className="text-sm text-neutral-400">Hands-on software & programming</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}