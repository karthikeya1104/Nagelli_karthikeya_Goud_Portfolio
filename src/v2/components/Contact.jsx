import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const formFields = [
  { name: "name", type: "text", label: "Name", required: true },
  { name: "email", type: "email", label: "Email", required: true },
  { name: "message", type: "textarea", label: "Message", required: true, rows: 5 },
];

const socials = [
  { icon: <FaGithub className="text-3xl" />, url: "https://github.com/karthikeya1104", name: "GitHub" },
  { icon: <FaLinkedin className="text-3xl" />, url: "https://linkedin.com/in/nagellikarthikeya", name: "LinkedIn" },
];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen scroll-mt-24 bg-[var(--bg)] text-[var(--text)] px-4 sm:px-6 py-24 flex flex-col items-center max-w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading + underline container */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center relative inline-block">
            Get in Touch
          </h2>
          <motion.div
            className="h-[2px] w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 overflow-hidden">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative group bg-white/20 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-md overflow-hidden flex flex-col gap-6 w-full max-w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute inset-0 rounded-xl pointer-events-none">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 w-0.5 h-0 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute left-0 bottom-0 w-0.5 h-0 bg-gradient-to-t from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            <div className="relative z-10 flex flex-col gap-4">
              {formFields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name}>
                    <label className="block text-sm mb-1 text-[var(--text)]">{field.label}</label>
                    <textarea
                      name={field.name}
                      rows={field.rows || 4}
                      required={field.required}
                      className="w-full bg-white/10 dark:bg-gray-800 text-[var(--text)] px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--accent-hover)] transition resize-none"
                    />
                  </div>
                ) : (
                  <div key={field.name}>
                    <label className="block text-sm mb-1 text-[var(--text)]">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      className="w-full bg-white/10 dark:bg-gray-800 text-[var(--text)] px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--accent-hover)] transition"
                    />
                  </div>
                )
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition flex justify-center items-center"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "SUCCESS" && (
                <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
              )}
              {status === "ERROR" && (
                <p className="text-red-400 text-center mt-2">Oops! Something went wrong.</p>
              )}
            </div>
          </motion.form>

          {/* Contact Info & Socials */}
          <motion.div
            className="relative group flex flex-col justify-center gap-8 bg-white/20 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-10 shadow-lg backdrop-blur-md w-full max-w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Heading */}
            <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
              Let’s Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I’d love to hear from you! Whether it’s a project, collaboration,
              or just to say hello — feel free to reach out.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[var(--accent-hover)] transition w-full max-w-full overflow-hidden">
              <FiMail className="text-2xl text-[var(--accent-hover)] shrink-0" />
              <a
  href="mailto:nagellikarthikeya@gmail.com"
  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[var(--text)] hover:text-[var(--accent-hover)] transition break-words"
>
  nagellikarthikeya@gmail.com
</a>

            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Find me on</p>
              <div className="flex gap-6 flex-wrap">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[var(--accent-hover)] transition-colors duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                    <span className="hidden sm:inline text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Optional: Location / availability */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
              📍 Based in Hyderabad, India · Open to remote work
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[var(--bg)] text-[var(--text)] flex flex-col items-center text-center py-8 px-4 border-t border-[var(--text-muted)] w-full max-w-full overflow-hidden">
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          © {new Date().getFullYear()} Nagelli Karthikeya Goud.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          Built with React, TailwindCSS, and Framer Motion.
        </p>
      </footer>
    </>
  );
}
