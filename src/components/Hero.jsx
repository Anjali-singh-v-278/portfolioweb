import profile from "../assets/profile.jpeg";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiArrowRight } from 'react-icons/fi';

const roles = ['MERN Stack Developer', 'Startup Builder', 'Problem Solver', 'Full Stack Developer'];

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex(i => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="font-mono text-base md:text-lg font-medium" style={{ color: '#22D3EE' }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{ background: '#22D3EE' }}
      />
    </span>
  );
}

function FloatingOrb({ className, style }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      style={style}
    />
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center dot-grid"
      style={{ overflow: 'hidden' }}
    >
      {/* Background orbs */}
      <FloatingOrb
        className="w-96 h-96 -top-32 -left-32"
        style={{ background: 'rgba(139,92,246,0.12)' }}
      />
      <FloatingOrb
        className="w-80 h-80 bottom-0 right-0"
        style={{ background: 'rgba(34,211,238,0.08)' }}
      />
<div className="max-w-7xl mx-auto w-full relative z-10 px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-28 pb-16">
  <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      

          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="flex flex-col gap-7 lg:pr-8"
>
          
            {/* Badge */}

          <motion.div variants={itemVariants} className="flex items-center gap-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              Available for work
             </span>
            </motion.div> 
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Anjali</span>
                <br />
                <span className="gradient-text">Singh V</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="h-10 flex items-center">
              <TypewriterText words={roles} />
            </motion.div>

            {/* Description */}

            <motion.p
  variants={itemVariants}
  className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg"
>
  I design and build strategic websites for businesses and personal brands
  - focused on clarity and turning visitors into clients.
</motion.p>
  

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                  boxShadow: '0 0 30px rgba(139,92,246,0.35)',
                }}
              >
                  ‎ ‎ View Projects <FiArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white/80 gradient-border cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-1 ml-4 mr-4">
              {[
                { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FiGithub, href: 'https://github.com/Anjali-singh-v-2776', label: 'GitHub' },
                { icon: FiMail, href: 'mailto:anjalisinghv2776@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
              <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.4), transparent)' }} />
            </motion.div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center items-center"
          >
            {/* 
              NEW APPROACH: 
              All rings are CSS 
            */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: '280px', height: '280px' }}
            >

              {/* Outer spinning ring — CSS border, not SVG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1.5px dashed rgba(139,92,246,0.5)',
                  borderTopColor: '#8B5CF6',
                }}
              />


              {/* Ambient purple glow behind image */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                  filter: 'blur(16px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Profile image — 160x160 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-full overflow-hidden z-10"
                style={{
                  width: '200px',
                  height: '200px',
                  boxShadow: '0 0 0 2px rgba(139,92,246,0.6), 0 12px 30px rgba(139,92,246,0.4)',
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(145deg, #1a0d3b 0%, #0c1629 100%)' }}
                >
                  <img
                    src={profile}
                    alt="Anjali Singh V"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    style={{ display: 'none', background: 'linear-gradient(145deg, #1a0d3b 0%, #0c1629 100%)' }}
                    className="w-full h-full items-center justify-center text-4xl"
                  >
                    👩‍💻
                  </div>
                </div>
              </motion.div>

              {/* MERN Stack badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute glass rounded-xl px-3 py-1.5 text-xs font-mono z-20 whitespace-nowrap"
                style={{
                  top: '10px',
                  right: '-10px',
                  border: '1px solid rgba(139,92,246,0.4)',
                  boxShadow: '0 4px 20px rgba(139,92,246,0.2)',
                }}
              >
                <span className="text-purple-400">MERN</span>
                <span className="text-white/40"> Stack</span>
              </motion.div>

              {/* Full Stack Dev badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute glass rounded-xl px-3 py-1.5 text-xs font-mono z-20 whitespace-nowrap"
                style={{
                  bottom: '10px',
                  left: '-10px',
                  border: '1px solid rgba(34,211,238,0.4)',
                  boxShadow: '0 4px 20px rgba(34,211,238,0.15)',
                }}
              >
                <span className="text-cyan-400">Full Stack</span>
                <span className="text-white/40"> Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}