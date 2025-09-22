import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaChartLine } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const usernameParams = new URLSearchParams({
  leetcode: 'karthikeya11',
  codechef: 'karthikeya1104',
  codeforces: 'karthikeya1104',
});

const apiUrl = `${import.meta.env.VITE_API_URL}?${usernameParams.toString()}`;

const iconMap = {
  leetcode: <SiLeetcode className="text-yellow-400 text-4xl" />,
  codeforces: <SiCodeforces className="text-purple-400 text-4xl" />,
  codechef: <SiCodechef className="text-gray-800 dark:text-white text-4xl" />,
};

const urlMap = {
  leetcode: "https://leetcode.com/karthikeya11",
  codeforces: "https://codeforces.com/profile/karthikeya1104",
  codechef: "https://www.codechef.com/users/karthikeya1104",
};

const defaultStats = {
  leetcode: { problems_solved: 600, rating: 1584, contests: 8 },
  codeforces: { problems_solved: 36, rating: 1154, contests: 15 },
  codechef: { problems_solved: 65, rating: 1624, contests: 18 },
};

// Card animation variants
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
    rotate: -10,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2, // slower for scroll
    },
  },
};

export default function CodingProfiles() {
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedStats = sessionStorage.getItem("codingStats");

    if (savedStats) {
      setStats(JSON.parse(savedStats));
      setLoading(false);
    } else {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
          sessionStorage.setItem("codingStats", JSON.stringify(data));
        })
        .catch((err) => console.error("Failed to fetch stats:", err))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <section
      id="coding"
      className="min-h-screen scroll-mt-24 bg-[var(--bg)] text-[var(--text)] px-6 py-24"
    >
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center relative inline-block">
          Coding Profiles
        </h2>
        <motion.div
          className="h-[2px] w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Fetching latest stats...
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(stats).map(([key, value], idx) => (
          <motion.a
            key={key}
            href={urlMap[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group 
                      bg-white/80 dark:bg-gray-900
                      border border-gray-400 dark:border-gray-700
                      rounded-xl p-6 shadow-lg overflow-hidden flex flex-col cursor-pointer"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.3 }} // stagger cards
            whileHover={{
              scale: 1.08,
              y: -8,
              rotate: 2,
              transition: { type: "spring", stiffness: 400, damping: 20 }, // faster hover
            }}
          >
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }} // faster icon hover
              >
                {iconMap[key]}
              </motion.div>
              <h3 className="text-xl font-semibold capitalize text-gray-800 dark:text-white">
                {key}
              </h3>
            </div>

            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <FaCode /> Problems Solved: {value.problems_solved}
              </div>
              <div className="flex items-center gap-2">
                <FaChartLine /> Rating: {value.rating}
              </div>
              <div className="flex items-center gap-2">
                🏁 Contests: {value.contests}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
