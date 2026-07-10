export function PrivacyPolicy() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Privacy</span> Policy
        </h1>
        <p className="text-neutral-500 text-sm mb-10">Last updated: June 25, 2026</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              At EdTech, we collect information that you provide directly to us, such as when you register for a training course, apply for a scholarship, subscribe to our newsletter, or fill out a contact form. This may include your name, email address, phone number, and educational background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li>Provide, maintain, and improve our STEM and coding courses.</li>
              <li>Process scholarship applications and enrollments.</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests for customer service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Data Security</h2>
            <p>
              We implement reasonable security measures to protect the security of your personal information both online and offline. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Media and Project Showcases</h2>
            <p>
              As part of our hands-on training, we may capture photos or videos of student projects (such as Robotics, IoT, and 3D printing builds) for our Project Gallery. We ensure no sensitive personal identifying information is published alongside these showcases without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:office.edtech@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">office.edtech@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}