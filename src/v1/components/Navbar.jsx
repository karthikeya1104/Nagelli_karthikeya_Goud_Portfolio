import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiUser, FiFolder, FiCpu, FiMail, FiMenu, FiX, FiCode
} from 'react-icons/fi';

const navLinks = [
  { name: 'Home', icon: <FiHome />, href: '#home' },
  { name: 'About', icon: <FiUser />, href: '#about' },
  { name: 'Projects', icon: <FiFolder />, href: '#projects' },
  { name: 'Skills', icon: <FiCpu />, href: '#skills' },
  { name: 'Coding', icon: <FiCode />, href: '#coding' },
  { name: 'Contact', icon: <FiMail />, href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar with Entry Animation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-v1BgDark border-b border-gray-800 px-6 py-4 hidden md:flex justify-end"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ul className="flex space-x-8 text-gray-300 font-medium items-center">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className="flex items-center gap-2 transition-colors duration-200"
              >
                {link.icon}
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-v1BgDark border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 left-0 h-full w-64 bg-v1BgDark border-r border-gray-800 p-6 pt-20 z-40"
          >
            <ul className="flex flex-col space-y-6 text-gray-300 font-medium">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-3 transition duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
