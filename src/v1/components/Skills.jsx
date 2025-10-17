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
    { name: 'Python', icon: <FaPython className="text-blue-300" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'C++' },
    { name: 'Java', icon: <FaJava className="text-red-400" /> },
  ],
  'Web Development': [
    { name: 'Django', icon: <SiDjango className="text-white" /> },
    { name: 'Flask', icon: <SiFlask className="text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'React.js', icon: <FaReact className="text-sky-400" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'SQLite' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
  ],
  Concepts: [
    { name: 'Data Structures & Algorithms' },
    { name: 'Object-Oriented Programming (OOP)' },
    { name: 'Computer Networks' },
    { name: 'Operating Systems' },
  ],
};

const backSkills = {
  Frontend: [
    { name: 'React.js', icon: <FaReact className="text-sky-400" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  ],
  Backend: [
    { name: 'Django', icon: <SiDjango className="text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-400" /> },
    { name: 'Flask', icon: <SiFlask className="text-white" /> },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
    { name: 'SQLite' },
  ],
  Technologies: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
  ],
};

const bgIcons = {
  front: [
    { icon: <FaPython />, className: 'top-28 left-4' }, // moved below title
    { icon: <SiJavascript />, className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { icon: <FaJava />, className: 'bottom-10 right-6' },
  ],
  back: [
    { icon: <FaReact />, className: 'top-28 left-4' },
    { icon: <SiDjango />, className: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { icon: <FaGithub />, className: 'bottom-10 right-6' },
  ],
};

const SkillItem = ({ skill }) => (
  <div className="group flex items-center gap-2 px-3 py-2 bg-white/10 rounded-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
    {skill.icon && (
      <motion.span
        className="text-xl"
        whileHover={{ rotate: 10, scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {skill.icon}
      </motion.span>
    )}
    <span className="text-sm">{skill.name}</span>
  </div>
);

export default function Skills() {
  const [flipped, setFlipped] = useState(false);
  const activeSkills = flipped ? backSkills : frontSkills;
  const floatingIcons = flipped ? bgIcons.back : bgIcons.front;

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-v1BgDark text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.className} text-[6rem] opacity-10 pointer-events-none z-0 animate-pulse`}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8 + i * 2, ease: 'easeInOut' }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="flex justify-center mb-10 z-10 relative">
        <button
          onClick={() => setFlipped(!flipped)}
          className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          {flipped ? 'Show Full List' : 'Show Categories'}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto z-10 relative">
        {Object.entries(activeSkills).map(([title, items], idx) => (
          <motion.div
            key={title}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
            viewport={{ once: true }}
          >
            <div className="text-xl font-semibold mb-4">{title}</div>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
