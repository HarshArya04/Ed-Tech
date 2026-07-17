export function TermsOfService() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Terms</span> of Service
        </h1>
        <p className="text-neutral-500 text-sm mb-10">Last updated: June 25, 2026</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the FutureLabs website and enrolling in our training programs, workshops, or seminars, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Course Enrollment and Access</h2>
            <p>
              Our programs, including STEM, Coding, and Hardware training, are designed for educational purposes. We reserve the right to refuse service, terminate accounts, or cancel enrollments at our sole discretion, particularly in cases of disruptive behavior or violation of our community guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p>
              All content provided on this website, including course materials, curriculum designs, graphics, and code snippets, is the property of FutureLabs. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Student Projects</h2>
            <p>
              Hardware and software projects built by students during our programs remain the intellectual property of the student. However, by participating in our courses, you grant FutureLabs a non-exclusive license to display images and descriptions of your projects in our portfolio and promotional materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              FutureLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our educational services or physical hardware during workshops.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}