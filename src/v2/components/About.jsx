import { motion } from "framer-motion";
import { FaUser, FaCode, FaLightbulb, FaBug } from "react-icons/fa";

const aboutCards = [
  {
    icon: <FaUser className="text-4xl mb-4 text-gray-700 dark:text-gray-200" />,
    title: "Who I Am",
    description:
      "I'm a full stack developer driven by a passion for clean, scalable code and solving meaningful real-world problems through technology.",
  },
  {
    icon: <FaCode className="text-4xl mb-4 text-gray-700 dark:text-gray-200" />,
    title: "What I Do",
    description:
      "I design and develop modern web applications using React, Django, PostgreSQL, Redis, and WebSockets — building responsive, efficient, and user-friendly systems.",
  },
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-gray-700 dark:text-gray-200" />,
    title: "Interests",
    description:
      "I enjoy real-time systems, developer tooling, open source contributions, and exploring cutting-edge technologies in the web ecosystem.",
  },
  {
    icon: <FaBug className="text-4xl mb-4 text-gray-700 dark:text-gray-200" />,
    title: "Fun Fact",
    description:
      "Debugging isn’t just a task — it’s a challenge I enjoy. Tracking down bugs sharpens my skills and keeps development exciting.",
  },
];

// Container controls staggered children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, rotate: -2 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen scroll-mt-24 px-6 py-24 flex flex-col items-center bg-[var(--bg)] text-[var(--text)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when section is partially visible
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center relative inline-block">
          About Me
        </h2>
        <motion.div
          className="h-[2px] w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {aboutCards.map((card) => (
          <motion.div
            key={card.title}
            className="relative group bg-white/80 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md flex flex-col items-center text-center overflow-hidden"
            variants={cardVariants} // children controlled by container
            whileHover={{ scale: 1.03 }}
          >
            {/* Animated full border */}
            <span className="absolute inset-0 rounded-xl pointer-events-none">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 w-0.5 h-0 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute left-0 bottom-0 w-0.5 h-0 bg-gradient-to-t from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center">
              {card.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
