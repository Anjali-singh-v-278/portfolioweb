import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '2025', label: 'Started Coding' },
  { value: '100%', label: 'Passion Driven' },
];

const cards = [
  {
    icon: '->',
    title: 'Builder Mindset',
    desc: "I build products. Every project starts with a real problem and ends with a working solution.",
  },
  {
    icon: '->',
    title: 'MERN Stack',
    desc: 'I work across the full stack to ship complete, production-ready applications.',
  },
  {
    icon: '->',
    title: 'Startup Focused',
    desc: "Deeply interested in the intersection of code and business. I care about what I build and why it matters.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section
  id="about"
  className="section-padding relative overflow-hidden scroll-mt-8"
>
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.04)' }}
      />

      <div className="max-w-7xl mx-auto mt-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
          <span className="font-mono text-medium text-purple-400 tracking-widest uppercase">About Me</span>
        </motion.div><br/>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              How{' '}
              <span className="gradient-text">I solve real problems</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4 text-white/55 leading-relaxed text-base md:text-lg"
            >
              <br/><p>
                I'm a Full Stack Web Developer- focused on creating
                websites that are fast and clean.
              </p>
              <p>
                My approach is product-first.
                That means thinking about UX, performance, and real-world outcomes.
              </p>
              <p>
                Currently building personal projects, contributing to open source, and working
                toward opportunities where I can help early-stage startups ship their vision.
              </p><br/>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-8 mt-10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-white/40 font-mono mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ x: 4, scale: 1.01 }}
                className="glass rounded-2xl p-6 flex gap-4 items-start cursor-default group transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.2)' }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1.5 group-hover:text-purple-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}