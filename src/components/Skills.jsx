import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillGroups = [
  {
    label: 'Frontend',
    color: '#8B5CF6',
    glowColor: 'rgba(139,92,246,0.2)',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    color: '#22D3EE',
    glowColor: 'rgba(34,211,238,0.2)',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    label: 'Tools',
    color: '#A78BFA',
    glowColor: 'rgba(167,139,250,0.2)',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const skillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={skillVariants}
      whileHover={{ y: -6, scale: 1.05 }}
      className="glass rounded-2xl p-4 flex flex-col items-center gap-3 group cursor-default transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
        style={{
          background: `${skill.color}18`,
          boxShadow: `0 0 0 1px ${skill.color}25`,
        }}
      >
        <Icon style={{ color: skill.color, fontSize: '1.4rem' }} />
      </div>
      <span className="text-xs font-mono text-white/60 group-hover:text-white/90 transition-colors duration-300 text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
  id="skills"
  className="section-padding relative overflow-hidden scroll-mt-7"
>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(34,211,238,0.04)' }}
      />

      <div className="max-w-7xl mx-auto"><br/>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #22D3EE, transparent)' }} />
          <span className="font-mono text-md text-cyan-400 tracking-widest uppercase">Tech Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Tools<span className="gradient-text"> I build with</span>
        </motion.h2><br/>

        <div className="flex flex-col gap-11">
          {skillGroups.map((group) => (
            <div key={group.label}>
              {/* Group header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 12px ${group.color}` }}
                />
                <span
                  className="font-display font-semibold text-sm uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
              </motion.div>

              {/* Skills grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
              >
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div><br/>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 glass rounded-2xl p-6 flex items-center gap-4"
          style={{ border: '1px solid rgba(139,92,246,0.2)' }}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0 animate-pulse"
            style={{ background: '#8B5CF6', boxShadow: '0 0 8px #8B5CF6' }}
          />
          <p className="text-white/50 text-sm font-mono">
            <span className="text-purple-400">Currently leveling up:</span>{' '}
            TypeScript · Next.js · System Design
          </p>
        </motion.div>
      </div>
    </section>
  );
}