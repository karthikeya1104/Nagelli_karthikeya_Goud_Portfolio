import { useState, useRef, useEffect } from 'react';
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
  const sidebarRef = useRef();

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 w-full z-50 hidden md:flex justify-end px-6 py-4 border-b border-gray-800 bg-[var(--bg)] text-[var(--text)]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ul className="flex space-x-8 font-medium items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05, color: "var(--accent)" }}
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
      <div className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[var(--bg)] text-[var(--text)]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              ref={sidebarRef}
              className="fixed top-0 left-0 h-full w-64 z-40 bg-[var(--bg)] p-6 pt-20 border-r border-gray-800"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4 }}
            >
              <ul className="flex flex-col space-y-6 font-medium">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.05, color: "var(--accent)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-3 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
