import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#8B5CF6' },
  { icon: FiGithub, href: 'https://github.com/Anjali-singh-v-2776', label: 'GitHub', color: '#22D3EE' },
  { icon: FiMail, href: 'mailto:anjalisinghv2776@gmail.com', label: 'Email', color: '#A78BFA' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #8B5CF6 30%, #22D3EE 70%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      {/* Subtle background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-start mb-12">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display font-bold text-2xl tracking-tight mb-3">
              <span className="gradient-text">Anjali</span>
              <span className="text-white/30 font-mono text-sm ml-1">.dev</span>
            </div>
          </motion.div>

          {/* Col 2 — Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:justify-self-center"
          >
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-white/40 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:justify-self-end"
          >
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group cursor-pointer w-fit"
                  aria-label={label}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon style={{ color }} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-white/35 group-hover:text-white/70 transition-colors duration-200">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-white/25 font-mono text-center sm:text-left"
          >
            © 2025 Anjali Singh V. All rights reserved.
          </motion.p>


          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center glass cursor-pointer transition-all duration-300 hover:border-purple-500/40"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            aria-label="Back to top"
          >
            <FiArrowUp className="w-4 h-4 text-white/40 hover:text-purple-400 transition-colors duration-200" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
