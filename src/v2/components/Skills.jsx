import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript, SiDjango, SiPostman, SiMysql, SiPostgresql,
  SiFastapi, SiFlask, SiNextdotjs,
} from 'react-icons/si';

const frontSkills = {
  'Programming Languages': [
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'C++' },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
  ],
  'Web Development': [
    { name: 'Django', icon: <SiDjango className="text-gray-800 dark:text-white" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-800 dark:text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
    { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
    { name: 'SQLite' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  ],
  Concepts: [
    { name: 'Data Structures & Algorithms' },
    { name: 'OOP' },
    { name: 'Computer Networks' },
    { name: 'Operating Systems' },
  ],
};

const backSkills = {
  Frontend: [
    { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  ],
  Backend: [
    { name: 'Django', icon: <SiDjango className="text-gray-800 dark:text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-500" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-800 dark:text-white" /> },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'SQLite' },
  ],
  Technologies: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  ],
};

const SkillItem = ({ skill }) => (
  <motion.div
    className="flex items-center gap-2 px-4 py-3 rounded-md border border-gray-400 bg-white/80 dark:bg-gray-800 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
    whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transition: { duration: 0.1 } }}
  >
    {skill.icon && (
      <motion.span
        className="text-2xl"
        whileHover={{ scale: 1.3, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {skill.icon}
      </motion.span>
    )}
    <span className="text-gray-800 dark:text-gray-100 text-sm">{skill.name}</span>
  </motion.div>
);

export default function Skills() {
  const [flipped, setFlipped] = useState(false);
  const activeSkills = flipped ? backSkills : frontSkills;

  return (
    <motion.section
      id="skills"
      className="relative scroll-mt-24 px-6 py-24 flex flex-col items-center bg-[var(--bg)] text-[var(--text)] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center relative inline-block">
          Skills
        </h2>
        <motion.div
          className="h-[2px] w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      <div className="flex justify-center mb-10 z-10 relative">
        <button
          onClick={() => setFlipped(!flipped)}
          className="px-6 py-2 border border-gray-800 dark:border-gray-100 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:text-black transition"
        >
          {flipped ? 'Show Full List' : 'Show Categories'}
        </button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(activeSkills).map(([title, items], index) => (
          <motion.div
            key={title}
            className="relative group bg-white/80 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-xl p-6 shadow-lg overflow-hidden"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
          >
            <span className="absolute inset-0 rounded-xl pointer-events-none">
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 w-0.5 h-0 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-100"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:w-full delay-200"></span>
              <span className="absolute left-0 bottom-0 w-0.5 h-0 bg-gradient-to-t from-purple-500 via-pink-500 to-indigo-500 transition-all duration-500 group-hover:h-full delay-300"></span>
            </span>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
