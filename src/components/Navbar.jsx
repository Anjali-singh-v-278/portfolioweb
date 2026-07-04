
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
  setScrolled(window.scrollY > 20);

  // If user reached bottom of page — set contact as active
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    setActive('contact');
    return;
  }

  const sections = navItems.map(item => item.href.replace('#', ''));
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 300) {
      setActive(id);
      break;
    }
  }
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: '#070B14', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNav('#home')}
          className="font-display font-bold text-xl tracking-tight cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <span className="gradient-text">Anjali</span>
          <span className="text-white/40 font-mono text-sm ml-1">.WebDev</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={`relative px-8 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer
                    ${isActive ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute rounded-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1))',
                        border: '1px solid rgba(139,92,246,0.3)',
                        top: 0,
                        bottom: 0,
                        left: '-10px',
                        right: '-10px',
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <motion.button
          onClick={() => handleNav('#contact')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block px-5 py-2 text-sm font-semibold rounded-lg cursor-pointer"
          style={{
            background: 'transparent',
            border: '2px solid #8B5CF6',
            color: '#8B5CF6',
          }}
        >
          Hire Me
        </motion.button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="block w-6 h-0.5 bg-white origin-center transition-all"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="block w-6 h-0.5 bg-white origin-center transition-all"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/5 overflow-hidden mx-4 rounded-2xl"
            style={{ background: '#070B14' }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(item.href)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium rounded-lg transition-all cursor-pointer
                      ${active === item.href.replace('#', '')
                        ? 'text-white bg-purple-500/10 border border-purple-500/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full mt-2 py-3 text-sm font-semibold rounded-lg cursor-pointer"
                  style={{ border: '2px solid #8B5CF6', color: '#8B5CF6', background: 'transparent' }}
                >
                  Hire Me
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}