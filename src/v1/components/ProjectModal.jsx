import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTools, FaListUl } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-v1BgDark text-white p-6 rounded-lg shadow-xl max-w-lg w-full relative backdrop-blur-md border border-white/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.longDesc || project.desc}</p>

          {project.features && (
            <div className="mb-4">
              <h3 className="font-semibold mb-1 flex items-center gap-2"><FaListUl /> Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h3 className="font-semibold mb-1 flex items-center gap-2"><FaTools /> Tech Stack</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
              {project.tech?.map((tech) => (
                <li
                  key={tech}
                  className="bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 flex-wrap mt-4">
            {Array.isArray(project.github) ? (
              project.github.map(({ label, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaGithub /> {label}
                </motion.a>
              ))
            ) : project.github ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaGithub /> GitHub
              </motion.a>
            ) : null}

            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
