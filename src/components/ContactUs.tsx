import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just simulate submit — integrate backend later
    console.log({ name, email, phone, message });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact-us" className="py-16 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-8 md:p-12 grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Want us to contact you?</h3>
            <p className="text-neutral-400 mb-6">Leave your details and a short message — we&apos;ll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Full name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg bg-neutral-950/50 border border-white/6 p-3 text-white placeholder-neutral-500" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg bg-neutral-950/50 border border-white/6 p-3 text-white placeholder-neutral-500" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm text-neutral-300 mb-1">Phone (optional)</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg bg-neutral-950/50 border border-white/6 p-3 text-white placeholder-neutral-500" placeholder="+91-XXXXXXXXXX" />
              </div>

              <div>
                <label className="block text-sm text-neutral-300 mb-1">Message</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full rounded-lg bg-neutral-950/50 border border-white/6 p-3 text-white placeholder-neutral-500" placeholder="How can we help?" />
              </div>

              <div>
                <button type="submit" className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-lg">{submitted ? 'Submitted' : 'Send Message'}</button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Contact</span> Us
            </h2>

            <div className="flex flex-col gap-3 mt-15">
              <a href="tel:+918679471401" className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-white hover:text-violet-400">
                <Phone className="w-6 h-6 text-violet-400" />
                +91-8679471401
              </a>

              <a href="tel:+918954058903" className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-white hover:text-violet-400">
                <Phone className="w-6 h-6 text-violet-400" />
                +91-8954058903
              </a>
            </div>

            <div className="mt-10">
              <a href="mailto:EdTech@gmail.com" className="flex items-center gap-3 text-lg md:text-xl text-neutral-300 hover:text-violet-400">
                <Mail className="w-5 h-5 text-violet-400" />
                EdTech@gmail.com
              </a>
            </div>

            <div className="text-sm text-neutral-400 mt-10">
              <strong>Office hours:</strong>
              <p>Mon — Fri, 9:00 AM — 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
