import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCpu,
  FiMail,
  FiMenu,
  FiX,
  FiCode,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", icon: <FiHome />, href: "#home" },
  { name: "About", icon: <FiUser />, href: "#about" },
  { name: "Projects", icon: <FiFolder />, href: "#projects" },
  { name: "Skills", icon: <FiCpu />, href: "#skills" },
  { name: "Coding", icon: <FiCode />, href: "#coding" },
  { name: "Contact", icon: <FiMail />, href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 w-full z-50 border-b border-gray-300 dark:border-gray-700 px-6 py-4 hidden md:flex justify-center items-center bg-[var(--bg)]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="flex space-x-8 font-medium items-center justify-center flex-1">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <a
                href={link.href}
                className="relative flex items-center gap-2 px-2 py-1 text-[var(--text)] transition-colors duration-300"
              >
                {link.icon}
                {link.name}

                {/* Bottom underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>

                {/* Optional top underline */}
                <span className="absolute left-0 top-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="ml-auto inline-flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-600 text-[var(--text)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 w-full z-50 border-b border-gray-300 dark:border-gray-700 px-4 py-4 flex items-center justify-between bg-[var(--bg)]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--text)] text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="text-[var(--text)] font-medium text-lg"></div>

        <button
          onClick={toggleTheme}
          className="inline-flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-600 text-[var(--text)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>

      {/* Mobile Sidebar + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black"
            ></motion.div>

            <motion.div
              key="sidebar"
              ref={sidebarRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="md:hidden fixed top-0 left-0 h-full w-64 border-r border-gray-300 dark:border-gray-700 p-6 pt-20 z-40 bg-[var(--bg)]"
            >
              <ul className="flex flex-col space-y-6 font-medium items-start">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <a
                      href={link.href}
                      className="relative flex items-center gap-3 px-2 py-1 text-[var(--text)] transition-colors duration-300"
                    >
                      {link.icon}
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
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
