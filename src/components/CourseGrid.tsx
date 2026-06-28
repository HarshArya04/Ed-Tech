import { useState } from "react";
import { ArrowRight, BookOpen, Wrench, Award, Mic } from "lucide-react";
import { CourseModal } from "./CourseModal";
import type { CategoryKey } from "./categoryData";

const courses = [
  {
    title: "Training Programs",
    description: "Structured programs designed to build essential tech skills.",
    icon: BookOpen,
    gradient: "from-violet-500 to-purple-600",
    stats: "5+ Programs",
    details: {
      duration: "12 Weeks",
      students: "150+",
      projects: "50+",
      description: "Access carefully designed training programs that guide learners from fundamentals to advanced projects. Every program is built to deliver practical knowledge and confidence.",
      highlights: [
        "Structured learning paths",
        "Progress tracking",
        "Mentorship guidance",
        "Real-world projects",
        "Certification support",
        "Skill assessment"
      ],
      image: "📚"
    }
  },
  {
    title: "Hands-on Practice",
    description: "Practical labs and real project builds for rapid learning.",
    icon: Wrench,
    gradient: "from-blue-500 to-cyan-500",
    stats: "80+ Sessions",
    details: {
      duration: "10 Weeks",
      students: "180+",
      projects: "75+",
      description: "Sharpen your skills through hands-on practice with hardware and software challenges. Every session is designed around doing, not just watching.",
      highlights: [
        "Lab-based exercises",
        "Hardware integration",
        "Software development practice",
        "Iterative prototyping",
        "Team collaboration",
        "Live feedback"
      ],
      image: "🛠️"
    }
  },
  {
    title: "Student Scholarship",
    description: "Financial support and access for motivated learners.",
    icon: Award,
    gradient: "from-green-500 to-emerald-500",
    stats: "Scholarships Open",
    details: {
      duration: "Ongoing",
      students: "100+",
      projects: "25+",
      description: "Our scholarship support helps promising students access premium learning resources and mentorship. We aim to empower learners who need financial assistance to succeed.",
      highlights: [
        "Tuition assistance",
        "Mentorship support",
        "Application guidance",
        "Community access",
        "Career development",
        "Project funding"
      ],
      image: "🎓"
    }
  },
  {
    title: "Workshops and Seminars",
    description: "Focused events led by industry experts and educators.",
    icon: Mic,
    gradient: "from-purple-500 to-pink-500",
    stats: "Weekly Events",
    details: {
      duration: "Variable",
      students: "200+",
      projects: "40+",
      description: "Join interactive workshops and seminars that deliver the latest trends, tools, and techniques. These sessions are crafted to inspire and accelerate learning.",
      highlights: [
        "Expert-led sessions",
        "Live Q&A",
        "Mini-projects",
        "Industry insights",
        "Networking opportunities",
        "Certificate-backed events"
      ],
      image: "🎤"
    }
  }
];

export function CourseGrid({ onCategoryClick }: { onCategoryClick: (category: CategoryKey) => void }) {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <>
      <section id="training-course" className="py-20 px-6">
        <div id="we-provide" />
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What do we <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Provide</span> you?
            </h2>
          </div>
          <div className="w-full px-4 sm:px-6 lg:px-8 mb-10">
            <div className="max-w-screen-xl mx-auto text-center">
              <p className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-4 w-full max-w-screen-2xl mx-auto">
                EdTech transforms education with technology-driven learning experiences. We offer practical, project-based training across Robotics, Arduino, Electronics, 3D Printing, Coding, and STEM — helping learners develop both hands-on skills and strong conceptual foundations.
              </p>

              <p className="text-base md:text-lg text-neutral-300 leading-relaxed w-full max-w-screen-2xl mx-auto">
                Our hands-on approach emphasizes creativity, critical thinking, teamwork, and real-world problem solving, preparing students for careers in science and technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 40px 10px rgba(139, 92, 246, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 0 rgba(139, 92, 246, 0)";
                  }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{course.description}</p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient}`} />
                    <span className="text-xs text-neutral-300">{course.stats}</span>
                  </div>

                  {/* Arrow Button */}
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="absolute bottom-8 right-8 w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 group/btn"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} onCategoryClick={(c) => { onCategoryClick(c); setSelectedCourse(null); }} />
    </>
  );
}