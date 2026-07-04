import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2025',
    period: 'Oct 2025 – Present',
    role: 'Digital Tool Lead',
    project: 'Auri - Self Development Brand',
    description:
      'Leading the design and development of digital tools focused on self-development and productivity. Building tools to help students and professionals work smarter.',
    highlights: [
      'Built and shipped the Auri business website',
      'Designed digital tools for task management and habit formation',
      'Goal: help people work smarter through practical, simple tools',
    ],
    accent: '#8B5CF6',
    status: 'active',
  },
  {
    year: '2025',
    period: 'Nov 2025 – Feb 2026',
    role: 'Open Source Contributor',
    project: 'Code Social — Developer Community',
    description:
      'Contributed code and unit tests to multiple open-source repositories as part of the Code Social developer community platform.',
    highlights: [
      'Wrote and reviewed unit tests for community features',
      'Collaborated with developers across multiple repos',
      'Strengthened skills in Git workflow and team collaboration',
    ],
    accent: '#22D3EE',
    status: 'completed',
  },
  {
    year: '2025+',
    period: '2025 – Present',
    role: 'Self-Taught Full Stack Developer',
    project: 'Independent Learning Journey',
    description:
      'Building real projects to master the MERN stack from the ground up — driven by curiosity, consistency, and a clear goal: ship things that matter.',
    highlights: [
      'Mastering React, Node.js, Express, and MongoDB',
      'Studying system design and scalable architecture',
      'Targeting internships and freelance projects in 2026',
    ],
    accent: '#F59E0B',
    status: 'ongoing',
  },
];

function TimelineItem({ item, index }) {
  const isLast = index === timeline.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 rounded-full flex-shrink-0 relative z-10 mt-1"
          style={{
            background: item.accent,
            boxShadow: `0 0 16px ${item.accent}60`,
          }}
        >
          {item.status === 'active' && (
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: item.accent, opacity: 0.4 }}
            />
          )}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: `linear-gradient(180deg, ${item.accent}40, transparent)` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-14">
        {/* Year badge */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-lg"
            style={{
              color: item.accent,
              background: `${item.accent}15`,
              border: `1px solid ${item.accent}30`,
            }}
          >
            {item.period}
          </span>
          {item.status === 'active' && (
            <span className="font-mono text-xs text-green-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Active
            </span>
          )}
        </div>

        {/* Role & project */}
        <h3 className="font-display text-xl font-bold text-white mb-0.5">
          {item.role}
        </h3>
        <p className="font-mono text-sm mb-3" style={{ color: item.accent }}>
          {item.project}
        </p>

        <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xl">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: item.accent }}
              />
              {h}
            </li>
          ))}
        </ul><br />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden scroll-mt-8">
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.04)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="font-mono text-md text-cyan-400 tracking-widest uppercase">Journey</span>
        </motion.div><br />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
        >
          My <span className="gradient-text">experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/45 text-base md:text-lg max-w-xl mb-14"
        >
          Every project is a step forward. Here's where I've been and what I've built.
        </motion.p><br/>

        {/* Timeline */}
        <div className="relative ml-2">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}