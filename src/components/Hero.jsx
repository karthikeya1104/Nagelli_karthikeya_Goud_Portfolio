import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEye, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Lottie from 'lottie-react';
import developerAnimation from '../animations/developer.json';

export default function Hero() {
  return (
    <main
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-[var(--bg)]"
    >
      {/* Main Hero Container */}
      <motion.div
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left: Hero Text + Socials + CTA */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4 md:gap-6">
          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-[var(--text)]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              Nagelli Karthikeya Goud
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            className="text-2xl md:text-3xl text-[var(--text-muted)] font-semibold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[var(--text-muted)] max-w-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I design and develop modern web applications that solve real-world problems. I focus on scalable, efficient, and clean code with a seamless user experience.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 md:gap-6 justify-center md:justify-start text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/karthikeya1104"
              target="_blank"
              className="hover:scale-125 hover:text-purple-500 transition transform duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nagellikarthikeya"
              target="_blank"
              className="hover:scale-125 hover:text-blue-500 transition transform duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:nagellikarthikeya@gmail.com"
              className="hover:scale-125 hover:text-pink-500 transition transform duration-300"
            >
              <FiMail size={24} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="/resume/Resume_Nagelli_Karthikeya_Goud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--bg)] border-2 border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition transform duration-300 flex items-center gap-2 justify-center"
            >
              <FaEye /> View Resume
            </a>
            <a
              href="/resume/Resume_Nagelli_Karthikeya_Goud.pdf"
              download
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition transform duration-300 flex items-center gap-2 justify-center"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Lottie Animation */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="w-64 h-64 md:w-96 md:h-96"
          />
        </motion.div>
      </motion.div>

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </main>
  );
}
