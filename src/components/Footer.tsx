// import { ArrowRight, Bell, Mail, User } from "lucide-react";
import type { CategoryKey } from "./categoryData";

const quickLinks: Array<{
  label: string;
  href: string;
  category?: CategoryKey;
}> = [
  { label: "STEM", href: "#training-course", category: "STEM" },
  { label: "Coding", href: "#training-course", category: "coding" },
  { label: "Training", href: "#training-course", category: "training" },
  { label: "Student Scholarship", href: "#training-course", category: "scholarship" },
  // { label: "Workshops", href: "#training-course", category: "workshop" },
  { label: "workshop and seminar", href: "#training-course", category: "workshop_and_seminar" },
];

// const socials = [
//   { icon: Bell, href: "#", label: "Twitter" },
//   { icon: Mail, href: "#", label: "LinkedIn" },
//   { icon: User, href: "#", label: "YouTube" },
//   { icon: ArrowRight, href: "#", label: "Instagram" },
// ];

export function Footer({ onCategoryClick, onNavigate}: { onCategoryClick: (category: CategoryKey) => void, onNavigate: (page: 'home' | 'privacy' | 'terms') => void }) {
  return (
    <footer className="relative py-16 px-6 border-t border-neutral-800">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              EdTech
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Boutique tech education for the next generation of builders. We don't just teach — we mentor, guide, and create alongside you.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span>Mentor-led Academy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      if (link.category) {
                        event.preventDefault();
                        onCategoryClick(link.category);
                      }
                    }}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2026 EdTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <button 
              onClick={() => {
                onNavigate('privacy');
                window.scrollTo(0, 0); // Scroll to top when page changes
              }} 
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => {
                onNavigate('terms');
                window.scrollTo(0, 0);
              }} 
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}