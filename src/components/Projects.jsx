import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectModal from './ProjectModal';

import skilltrackerImg from '../assets/projects-images/skilltracker.png';
import didImg from '../assets/projects-images/blockchain.png';
import socialappImg from '../assets/projects-images/socialapp.png';

const projects = [
  {
    title: 'Decentralized Identity System',
    desc: 'A blockchain-based system for secure document issuance and verification.',
    longDesc:
      'Developed a decentralized identity verification system where authorized institutions can issue documents and users can store or present them securely. Uses IPFS and Ethereum for tamper-proof validation.',
    image: didImg,
    tech: ['React.js', 'Django', 'Ganache', 'IPFS'],
    github: [
      { label: 'Frontend', url: 'https://github.com/karthikeya1104/decentralized-id-verification-frontend/' },
      { label: 'Backend', url: 'https://github.com/karthikeya1104/decentralized-id-verification-backend/' },
    ],
    features: [
      'Blockchain-backed verification',
      'Decentralized file storage using IPFS',
      'Role-based access',
      'Instant validation to prevent forgery',
    ],
  },
  {
    title: 'SkillTracker',
    desc: 'A Django-based leaderboard system for competitive programming profiles.',
    longDesc:
      'Web application scraping data from Codeforces, LeetCode, and CodeChef to generate real-time leaderboards, with automated email reports.',
    image: skilltrackerImg,
    tech: ['Django', 'Requests', 'BeautifulSoup', 'PostgreSQL'],
    github: [{ label: 'GitHub', url: 'https://github.com/karthikeya1104/SkillTracker/' }],
    demo: 'http://skilltracker-1yk8.onrender.com/',
    features: [
      'Leaderboard generation',
      'Automated email reporting',
      'Admin panel for user management',
    ],
  },
  {
    title: 'Social Media App',
    desc: 'Full-stack social networking application with real-time features.',
    longDesc:
      'Built a full social media platform with registration, profile management, post creation, commenting, and real-time messaging.',
    image: socialappImg,
    tech: ['Django', 'React.js', 'Redis', 'WebSockets', 'JWT'],
    github: [
      { label: 'Frontend', url: 'https://github.com/karthikeya1104/social-media-app-frontend/' },
      { label: 'Backend', url: 'https://github.com/karthikeya1104/social-media-app-backend/' },
    ],
    features: [
      'Real-time chat using WebSockets',
      'JWT authentication',
      'Post creation, editing, commenting, and likes',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen scroll-mt-24 px-6 py-20 flex flex-col items-center bg-[var(--bg)] text-[var(--text)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
          Projects
        </h2>
        <motion.div
          className="h-[2px] w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Swiper */}
      <motion.div
        className="w-full max-w-2xl mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination-custom', // custom container
          }}
          className="pb-0" // remove extra padding
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer rounded-xl border border-gray-400 bg-white/80 dark:bg-gray-900 dark:border-gray-700 p-6 shadow-lg flex flex-col hover:scale-[1.03] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {project.desc}
                </p>

                <span className="inline-block mt-auto text-gray-600 dark:text-gray-400 text-sm italic">
                  Click to view more →
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

{/* Pagination container outside the card box */}
<div className="swiper-pagination-custom flex justify-center mt-6"></div>

      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
}
