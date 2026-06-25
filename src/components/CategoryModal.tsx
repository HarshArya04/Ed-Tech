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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:border-violet-500/60 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-black via-neutral-950 to-black">
          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`} />
          <div className="relative px-8 py-10 sm:px-12 sm:py-14">
            <div className="flex items-center gap-5 mb-8">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}> 
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
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
