import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

import ProjectModal from './ProjectModal';

import skilltrackerImg from '../assets/projects-images/skilltracker.png';
import didImg from '../assets/projects-images/blockchain.png';
import socialappImg from '../assets/projects-images/socialapp.png';
import placementImg from '../assets/projects-images/placement.png';

const projects = [
  {
    title: 'Placement Tracker App',
    desc: 'Mobile app to track placement updates.',
    longDesc:
      'An offline-first mobile application that captures placement updates from WhatsApp or manual entries, categorizes companies as registered or unregistered, and provides a clean dashboard with filters and sorting.',
    image: placementImg,
    tech: ['React Native', 'TypeScript', 'SQLite', 'Gemini API'],
    github: [
      { label: 'GitHub', url: 'https://github.com/karthikeya1104/placement-tracker' },
    ],
    demo: 'https://drive.google.com/file/d/1Fn44eQ8g7njkifsHds1GwQspBYakJ_Tr/view',
    features: [
      'WhatsApp & manual capture',
      'Company categorization',
      'Offline-first storage',
      'Dashboard with filters',
    ],
  },
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
      className="relative scroll-mt-24 px-6 py-24 bg-[var(--bg)] text-[var(--text)] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">Projects</h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-3" />
      </div>

      {/* Marquee */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={32}
        loop
        freeMode
        speed={15000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="projects-marquee"
      >
        {[...projects, ...projects].map((project, i) => (
          <SwiperSlide
            key={i}
            className="
              !w-[85vw]
              sm:!w-[420px]
              md:!w-[520px]
              lg:!w-[600px]
              xl:!w-[680px]
            "
          >
            <motion.div
              onClick={() => setSelectedProject(project)}
              className="
                cursor-pointer
                rounded-2xl
                border border-gray-300
                bg-white/80 dark:bg-gray-900
                dark:border-gray-700
                p-6 md:p-8
                shadow-xl
              "
              whileHover={{ y: -8 }}
            >
              {/* Title FIRST */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                {project.title}
              </h3>

              {/* Image = layout anchor */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] fit-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Description (controlled) */}
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg text-center line-clamp-2">
                {project.desc}
                <br/><br/>click to view more.
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
}
