import type { ComponentType } from "react";
import { X } from "lucide-react";

interface CategoryModalProps {
  category: {
    title: string;
    description: string;
    icon: ComponentType<any>;
    gradient: string;
    details: string;
    highlights: string[];
  } | null;
  onClose: () => void;
}

export function CategoryModal({ category, onClose }: CategoryModalProps) {
  if (!category) return null;

  const Icon = category.icon;
  
  // Check if this is the Coding modal
  const isCoding = category.title.includes("Coding");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      {/* Main Modal Container: 
        overflow-hidden clips the diagonal ribbon so it doesn't spill out,
        and flex-col allows us to pin the close button.
      */}
      <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl">
        
        {/* Close Button - Z-index 50 keeps it above the ribbon */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-violet-500/60 hover:bg-neutral-800 transition-all duration-300 shadow-xl"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Diagonal "Coming Soon" Ribbon */}
        {isCoding && (
          <div className="absolute top-15 -right-13 z-40 w-60 rotate-45 bg-gradient-to-r from-amber-500 to-orange-600 py-1.7 text-center text-sm font-bold uppercase tracking-widest text-white shadow-2xl border-y border-amber-300/30">
            Coming Soon
          </div>
        )}

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto w-full flex-1">
          <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-black via-neutral-950 to-black">
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`} />
            
            <div className="relative px-8 py-10 sm:px-12 sm:py-14">
              <div className="flex items-center gap-5 mb-8 pr-10">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}> 
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{category.title}</h2>
                  <p className="mt-2 text-neutral-300 max-w-2xl">{category.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
                <p className="text-neutral-300 leading-relaxed">{category.details}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {category.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-neutral-300">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}