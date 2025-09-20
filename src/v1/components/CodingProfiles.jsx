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
  codechef: <SiCodechef className="text-white text-4xl" />,
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
        .catch((err) => {
          console.error("Failed to fetch stats:", err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <section
      id="coding"
      className="min-h-screen scroll-mt-[35px] bg-v1BgDark text-white px-6 py-20"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Coding Profiles
      </motion.h2>

      {loading && (
        <p className="text-white text-center pb-6">Fetching latest stats...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(stats).map(([key, value], idx) => (
          <motion.a
            href={urlMap[key]}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.05, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/5 blur-lg opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none"
              animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {iconMap[key]}
              </motion.div>
              <h3 className="text-xl font-semibold capitalize">{key}</h3>
            </div>

            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <FaCode className="text-white" /> Problems Solved:{" "}
                {value.problems_solved}
              </div>
              <div className="flex items-center gap-2">
                <FaChartLine className="text-white" /> Rating: {value.rating}
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
