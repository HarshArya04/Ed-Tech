import { Cpu, Code, Brain, Users, Lightbulb } from "lucide-react";

export const COURSE_CATEGORIES = {
  STEM: {
    title: "Science Technology Engineering & Math",
    description: "Explore the world of STEM with hands-on projects and expert guidance.",
    icon: Cpu,
    gradient: "from-cyan-500 to-teal-500",
    details: `Our training programs are designed to provide students with practical, hands-on learning experiences that go beyond traditional classroom education. Through interactive sessions, real-world projects, and innovative activities, students gain valuable technical skills while developing creativity, critical thinking, and problem-solving abilities.

We offer training in Robotics, Arduino, Electronics, 3D Printing, STEM Education, and Innovation Projects. Our structured curriculum helps students understand technology through experimentation, design, and project-based learning.

The training is tailored for school students and focuses on building confidence, teamwork, and future-ready skills that prepare them for higher education, competitions, and emerging career opportunities in technology and engineering.`,
    highlights: [
      "Robotics and Automation Fundamentals",
      "Arduino Programming and Microcontrollers",
      "Electronics and Circuit Design",
      "3D Printing and Product Design",
      "Sensor and IoT Applications",
    ],
  },
  coding: {
    title: "Coding & Programming",
    description: "Build software solutions from scratch.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    details: `Our Coding & Programming course introduces students to the fundamentals of computer programming and logical thinking. Students learn Basic Programming concepts, Python, Java, and Automation while developing problem-solving and computational thinking skills.

The course covers programming fundamentals, variables, data types, loops, conditions, functions, object-oriented programming concepts, and real-world applications. Students work on practical projects and coding exercises that help them understand how software, applications, and automated systems are developed.

By the end of the course, students gain a strong foundation in programming and the confidence to create their own projects, applications, and automation solutions.`,
    highlights: [
      "Basic Programming Concepts",
      "Computational Thinking & Logic Building",
      "Java Programming Fundamentals",
      "Automation Concepts and Applications",
      "Project Development and Problem Solving",
      "Real-World Coding Applications",
    ],
  },
  training: {
    title: "Professional Training",
    description: "Industry-ready skill development.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    details: `Our training programs are designed to provide students with practical, hands-on learning experiences that go beyond traditional classroom education. Through interactive sessions, real-world projects, and innovative activities, students gain valuable technical skills while developing creativity, critical thinking, and problem-solving abilities.

We offer training in Robotics, Arduino, Electronics, 3D Printing, STEM Education, and Innovation Projects. Our structured curriculum helps students understand technology through experimentation, design, and project-based learning.

The training is tailored for school students and focuses on building confidence, teamwork, and future-ready skills that prepare them for higher education, competitions, and emerging career opportunities in technology and engineering.`,
    highlights: [
      "Expert mentors",
      "Structured Curriculum",
      "Hands-on Learning Through Practical Experiments",
      "Regular Assessments",
    ],
  },
  scholarship: {
    title: "Student Scholarship",
    description: "Support for talented students.",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    details: `At FutureLabs, we believe that talented and dedicated students should be recognized and encouraged. To support young innovators, we conduct periodic assessments during our training programs to evaluate students' understanding, creativity, problem-solving abilities, and practical skills.

Based on their performance, the Top 5 students may be awarded special scholarships, certificates, or advanced learning opportunities. This initiative motivates students to excel, promotes healthy competition, and encourages continuous learning and innovation.

Our scholarship program is designed to identify and nurture future leaders in science, technology, engineering, and innovation.`,
    highlights: [
      "Partial or full tuition support",
      "Monthly mentorship sessions",
      "Networking with industry leaders",
      "Access to learning materials",
      "Career planning assistance",
      "Community support",
    ],
  },
  workshop_and_seminar: {
    title: "Seminars & Talks",
    description: "Learn from industry leaders.",
    icon: Lightbulb,
    gradient: "from-indigo-500 to-purple-500",
    details: `We conduct engaging workshops and seminars for schools, colleges, and educational institutions to introduce students to emerging technologies and future career opportunities. Our sessions are designed to inspire curiosity, innovation, and practical learning through interactive demonstrations and hands-on activities.

Our workshops cover topics such as Robotics, Artificial Intelligence, Coding, Arduino, Electronics, 3D Printing, STEM Education and Innovation. These sessions help students explore new technologies, develop problem-solving skills, and gain exposure to real-world applications of science and engineering.

Schools can invite our experts to conduct one-day workshops, technology awareness programs, career guidance sessions, innovation camps, and special STEM events tailored to their student's needs.`,
    highlights: [
      "Expert guest speakers",
      "Latest industry trends",
      "Live Q&A sessions",
      "Networking opportunities",
      "Recorded sessions available",
      "Career inspiration",
    ],
  },
};

export type CategoryKey = keyof typeof COURSE_CATEGORIES;