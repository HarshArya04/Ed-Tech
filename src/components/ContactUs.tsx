import { useState } from "react";
import { Phone, Mail, Loader } from "lucide-react";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // REPLACE THIS WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS
          access_key: "df0c55bb-daa8-4ffa-9696-cc7a40254fdf", 
          subject: `New Contact Form Submission from ${name}`,
          from_name: "FutureLabs Website",
          name: name,
          email: email,
          phone: phone || "Not provided",
          message: message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        
        // Clear the form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
                <button type="submit" disabled={isLoading} className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg transition ${isLoading ? 'bg-neutral-600 text-neutral-300 cursor-not-allowed' : submitted ? 'bg-green-500 text-white' : 'bg-violet-500 hover:bg-violet-600 text-white'}`}>
                  {isLoading && <Loader className="w-4 h-4 animate-spin" />}
                  {submitted ? 'Submitted Successfully!' : isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
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
              <a href="mailto:office.FutureLabs@gmail.com" className="flex items-center gap-3 text-lg md:text-xl text-neutral-300 hover:text-violet-400">
                <Mail className="w-5 h-5 text-violet-400" />
                offiice.edtech@gmail.com
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