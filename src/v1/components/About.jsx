import { motion } from "framer-motion";
import { FaUser, FaCode, FaLightbulb, FaBug } from "react-icons/fa";

const aboutCards = [
  {
    icon: <FaUser className="text-white text-3xl mb-4" />,
    title: "Who I Am",
    description:
      "I'm a full stack developer driven by a passion for clean, scalable code and solving meaningful real-world problems through technology.",
  },
  {
    icon: <FaCode className="text-white text-3xl mb-4" />,
    title: "What I Do",
    description:
      "I design and develop modern web applications using tools like React, Django, PostgreSQL, Redis, and WebSockets — building responsive, efficient, and user-friendly systems.",
  },
  {
    icon: <FaLightbulb className="text-white text-3xl mb-4" />,
    title: "Interests",
    description:
      "I'm deeply interested in real-time systems, developer tooling, open source contributions, and exploring cutting-edge technologies in the evolving web ecosystem.",
  },
  {
    icon: <FaBug className="text-white text-3xl mb-4" />,
    title: "Fun Fact",
    description:
      "Debugging isn’t just a task — it’s a challenge I enjoy. Tracking down bugs and solving them sharpens my skills and keeps development exciting.",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen scroll-mt-24 bg-v1BgDark text-white px-6 py-20 flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: false }}
    >
      {/* Background Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-3xl opacity-20 top-10 left-[-100px] animate-pulse z-0" />
      <div className="absolute w-[300px] h-[300px] bg-yellow-500 rounded-full blur-2xl opacity-20 bottom-10 right-[-80px] animate-pulse z-0" />

      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Animated Divider */}
      <motion.div
        className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-yellow-500 mb-12 z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full z-10">
        {aboutCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md transition-transform overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl z-0" />

            {/* Card Content */}
            <div className="flex flex-col items-center text-center relative z-10">
              {card.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
