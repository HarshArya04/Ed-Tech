export function Mentors() {
  return (
    <section id="about-us" className="py-20 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-neutral-900/70 border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">About</span> Us
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-8 md:leading-9 max-w-3xl mx-auto">
              EdTech is dedicated to empowering students with the skills and knowledge needed to succeed in the modern technological world. We believe education should go beyond textbooks and provide hands-on learning experiences that prepare students for future challenges.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-8 md:leading-9">
              <p>
                Through Robotics, Coding, Arduino, Electronics, 3D Printing, and STEM-based projects, we help students develop creativity, innovation, problem-solving, and technical skills. Our programs are designed to complement academic education while introducing students to emerging technologies and real-world applications.
              </p>
              <p>
                Our goal is to make quality technical education accessible to every school, enabling students to learn future-ready skills alongside their regular studies. By nurturing young innovators and creators, we aim to contribute to India&apos;s growth as a global leader in technology and innovation.
              </p>
              <p>
                At EdTech, we are committed to building a generation of confident learners, skilled problem-solvers, and future technology leaders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/80 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Hands-on Practical learning</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Real projects, real tools, and real problem solving that make every lesson feel relevant.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/80 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Future-ready skills</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Students gain the confidence and technical ability to thrive in emerging STEM fields.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950/80 p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Accessible for schools</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Programs designed to fit alongside regular studies and support classrooms across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}