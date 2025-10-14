import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      setStatus('SUCCESS');
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-[40px] bg-v1BgDark text-white px-6 py-20 flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate only once
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} // Animate only once
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white/10 text-white px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/10 text-white px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full bg-white/10 text-white px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-white/90 transition"
        >
          Send Message
        </button>

        {status === 'SUCCESS' && (
          <p className="text-green-400 text-sm text-center">Thanks! Your message has been sent.</p>
        )}
        {status === 'ERROR' && (
          <p className="text-red-400 text-sm text-center">Oops! Something went wrong. Please try again.</p>
        )}
      </motion.form>

      <motion.div
        className="flex items-center justify-center mt-8 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }} // Animate only once
      >
        <motion.a
          href="https://github.com/karthikeya1104"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          aria-label="Visit my GitHub profile"
          title="GitHub"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub className="text-2xl" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/nagellikarthikeya"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          aria-label="Visit my LinkedIn profile"
          title="LinkedIn"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </motion.a>

        <motion.a
          href="mailto:nagellikarthikeya@gmail.com"
          whileHover={{ scale: 1.2 }}
          aria-label="Send me an email"
          title="Email"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FiMail className="text-2xl" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
