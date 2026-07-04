import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import Auri from "../assets/Auri.png";
import portfolio from "../assets/portfolio.png";
import codesocial from "../assets/codesocial.png";

const projects = [
  {
  
    name: 'Auri',
    image: Auri,
    tagline: 'Personal brand & Business website',
    description:
      'A personal brand and digital tools website. Designed to help students work smarter and grow faster.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Anjali-singh-v-278/portfolio',
    live: 'https://anjali-singh-v-278.github.io/portfolio/',
    emoji: '○',
    accent: '#8B5CF6',
    gradient: 'from-purple-500/10 to-transparent',
  },
  {
    name: 'Portfolio Website',
    image: portfolio,
    tagline: 'Developer portfolio — this site',
    description:
      'A professional developer portfolio. Showcases projects, skills, and experience with premium animations.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/Anjali-singh-v-278',
    live: 'https://anjali-singh-v-278.github.io/portfolio/',
    accent: '#22D3EE',
    emoji: '○',
    gradient: 'from-cyan-500/10 to-transparent',
  },
  {
    name: 'Code Social',
    image: codesocial,
    tagline: 'Developer community platform concept',
    description:
      'An open-source developer community platform. Contributed code and unit tests to multiple repositories.',
    tech: ['React', 'HTML', 'Css', 'JavaScript'],
    github: 'https://github.com/Anjali-singh-v-278/College_daddy',
    live: 'https://collegedaddy.vercel.app/roadmap_assets/html/web-dev-roadmap.html',
    accent: '#F59E0B',
    emoji: '○',
    gradient: 'from-amber-500/10 to-transparent',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-3xl overflow-hidden transition-all duration-500"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ boxShadow: `0 0 60px ${project.accent}15, inset 0 0 60px ${project.accent}05` }}
      />

      {/* Top accent bar */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
      />

      {/* Project number & emoji */}
      <div className="p-6 pb-0 flex items-start justify-between">
        <span className="font-mono text-xs text-white/20 tracking-widest">{project.id}</span>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          className="text-2xl"
        >
          {project.emoji}
        </motion.div>
      </div>

      {/* Image placeholder / preview */}
<div
  className="mx-6 mt-4 h-44 overflow-hidden rounded-xl"
  style={{ border: `1px solid ${project.accent}20` }}
>
  <img
    src={project.image}
    alt={project.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>


      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-display text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accent}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {project.name}
          </h3>
          <p className="text-xs font-mono text-white/35 mt-0.5">{project.tagline}</p>
        </div><br />


        <p className="text-white/50 text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono rounded-lg text-white/60"
              style={{
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 ml-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <FiGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            style={{ color: project.accent }}
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            className="ml-auto"
          >
            <FiArrowUpRight
              className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors duration-300"
            />
          </motion.div><br /><br />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-6">
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        style={{ background: 'rgba(139,92,246,0.05)' }}
      />

      <br /><div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
          <span className="font-mono text-md text-purple-400 tracking-widest uppercase">Work</span>
        </motion.div><br />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Things <span className="gradient-text"> I've built</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/45 text-base md:text-lg max-w-xl mb-14"
        >
          Real projects, real code, real impact. Each one solves a specific problem.
        </motion.p><br />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div><br />

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Anjali-singh-v-278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer"
          >
            <FiGithub className="w-4 h-4" />
            See more on GitHub
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div><br />
      </div>
    </section>
  );
}