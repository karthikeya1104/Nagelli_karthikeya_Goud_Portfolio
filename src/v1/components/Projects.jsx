import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectModal from './ProjectModal';

import skilltrackerImg from '../../assets/projects-images/skilltracker.png';
import didImg from '../../assets/projects-images/blockchain.png';
import socialappImg from '../../assets/projects-images/socialapp.png';

const projects = [
  {
    title: 'Decentralized Identity System',
    desc: 'A blockchain-based system for secure document issuance and verification.',
    longDesc:
      'Developed a decentralized identity verification system where authorized institutions can issue documents and users can store or present them securely. The system uses IPFS for decentralized storage and Ethereum (via Ganache) for blockchain-based verification. It eliminates manual verification delays by enabling instant, tamper-proof validation of documents, ensuring authenticity and preventing forgery.',
    image: didImg,
    tech: ['React.js', 'Django', 'Ganache', 'IPFS'],
    github: [
      { label: 'Frontend', url: 'https://github.com/karthikeya1104/decentralized-id-verification-frontend/' },
      { label: 'Backend', url: 'https://github.com/karthikeya1104/decentralized-id-verification-backend/' },
    ],
    features: [
      'Blockchain-backed verification with Ethereum smart contracts (Ganache)',
      'Decentralized file storage using IPFS',
      'Role-based access for authorities and users',
      'Eliminates manual verification delays through instant validation',
      'Prevents document forgery using immutable blockchain records',
      'Modular frontend (React) and backend (Django) architecture',
    ],
  },
  {
    title: 'SkillTracker',
    desc: 'A Django-based leaderboard system for competitive programming profiles.',
    longDesc:
      'Designed and implemented a web application that scrapes data from Codeforces, LeetCode, and CodeChef to generate real-time leaderboards. Used for tracking the coding activity of individuals or groups (e.g., college clubs). Includes automated email reports and responsive UI.',
    image: skilltrackerImg,
    tech: ['Django', 'Requests', 'BeautifulSoup', 'PostgreSQL'],
    github: [{ label: 'GitHub', url: 'https://github.com/karthikeya1104/SkillTracker/' }],
    demo: 'http://skilltracker-1yk8.onrender.com/',
    features: [
      'Web scraping from LeetCode, Codeforces, and CodeChef profiles',
      'Leaderboard generation based on platform metrics',
      'Automated email reporting to registered users',
      'Admin panel for managing users and groups',
      'Responsive design with Bootstrap-based frontend',
    ],
  },
  {
    title: 'Social Media App',
    desc: 'Full-stack social networking application with real-time features.',
    longDesc:
      'Built a fully functional social media platform with features including user registration, profile management, post creation, commenting, and real-time messaging. Implemented secure authentication using JWT, WebSockets for bi-directional communication, and Redis for message brokering.',
    image: socialappImg,
    tech: ['Django', 'React.js', 'Redis', 'WebSockets', 'JWT'],
    github: [
      { label: 'Frontend', url: 'https://github.com/karthikeya1104/social-media-app-frontend/' },
      { label: 'Backend', url: 'https://github.com/karthikeya1104/social-media-app-backend/' },
    ],
    features: [
      'Real-time chat using Django Channels, Redis, and WebSockets',
      'JWT-based user authentication and session management',
      'Post creation, editing, commenting, and likes',
      'Live notifications for user interactions',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="relative scroll-mt-24 bg-v1BgDark text-white px-6 py-20 flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Glowing Background Blobs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full blur-3xl opacity-20 top-20 left-[-100px] animate-pulse z-0" />
      <div className="absolute w-[250px] h-[250px] bg-yellow-500 rounded-full blur-2xl opacity-20 bottom-10 right-[-60px] animate-pulse z-0" />

      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Animated Divider */}
      <motion.div
        className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-yellow-500 mb-12 z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: 'left' }}
      />

      {/* Swiper Container */}
      <motion.div
        className="w-full max-w-xl z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                onClick={() => setSelectedProject(project)}
                className="relative group cursor-pointer bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg min-h-[400px] flex flex-col justify-start hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-10 rounded-xl z-0" />

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title || 'Project Image'}
                  className="rounded-md mb-4 w-full aspect-[16/9] object-fit shadow relative z-10"
                />

                {/* Project Title and Description */}
                <h3 className="text-2xl font-semibold mb-2 relative z-10">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-grow relative z-10">{project.desc}</p>

                {/* Click to view more details" */}
                <p className="text-sm text-gray-400 mt-4 italic tracking-wide relative z-10">
                  Click to view more details →
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
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
