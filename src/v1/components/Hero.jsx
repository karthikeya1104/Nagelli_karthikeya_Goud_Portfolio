import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEye, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden scroll-mt-24 pt-24 bg-v1BgDark flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Background Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse z-0" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-500 rounded-full blur-2xl opacity-20 bottom-20 right-10 animate-pulse z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg rounded-xl p-10 text-center max-w-2xl w-full"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: false }}
        >
          Hi, I'm Nagelli Karthikeya Goud
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
        >
          Full Stack Developer | Tech Enthusiast | Problem Solver
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
        >
          I’m a full stack developer passionate about building modern, responsive web applications that solve real-world problems. I focus on writing clean, efficient, and scalable code across the stack, using the right tools for the job.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* View Resume */}
          <motion.a
            href="/resume/Resume_Nagelli_Karthikeya_Goud.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-all"
            aria-label="Open my resume in a new tab (PDF)"
            title="Open Resume (PDF)"
          >
            <FaEye className="inline mr-2" /> View Resume
          </motion.a>

          {/* Download Resume */}
          <motion.a
            href="/resume/Resume_Nagelli_Karthikeya_Goud.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all"
            aria-label="Download my resume(PDF)"
            title="Download Resume (PDF)"
          >
            <FaDownload className="inline mr-2" /> Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="https://github.com/karthikeya1104"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Visit my GitHub profile"
            title="GitHub"
          >
            <FaGithub className="text-2xl hover:text-white transition" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/nagellikarthikeya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </motion.a>
          <motion.a
            href="mailto:nagellikarthikeya@gmail.com"
            whileHover={{ scale: 1.2 }}
            aria-label="Send me an email"
            title="Email"
          >
            <FiMail className="text-2xl hover:text-white transition" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
