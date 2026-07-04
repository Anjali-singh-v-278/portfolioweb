import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

const EMAIL = 'anjalisinghv228@gmail.com';

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    accent: '#8B5CF6',
    desc: 'Best way to reach me',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Anjali Singh V',
    href: 'https://linkedin.com/in/anjali-singh-v',
    accent: '#22D3EE',
    desc: 'Connect professionally',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'Anjali-singh-v-278',
    href: 'https://github.com/Anjali-singh-v-278',
    accent: '#A78BFA',
    desc: 'See my code',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
   <section id="contact" className="section-padding relative overflow-hidden scroll-mt-8">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #8B5CF6)' }} />
          <span className="font-mono text-xl text-purple-400 tracking-widest uppercase">Contact</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          
          <span className="gradient-text">Let's build something amazing</span>
        </motion.h2><br/>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-12"
        >
          I'm open to freelance projects, internships, and full-time opportunities.
          If you have something in mind — reach out.
        </motion.p><br/>

        {/* Main email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
              boxShadow: '0 0 40px rgba(139,92,246,0.4)',
            }}
          >
            <FiMail className="w-5 h-5" />
            Send me an email
            <FiArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-mono text-white/60 hover:text-white glass cursor-pointer transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {copied ? (
              <>
                <FiCheck className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4" />
                {EMAIL}
              </>
            )}
          </motion.button>
        </motion.div><br/>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.25 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-left group cursor-pointer transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${c.accent}15`,
                    border: `1px solid ${c.accent}30`,
                  }}
                >
                  <Icon style={{ color: c.accent }} className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs text-white/30 mb-1 uppercase tracking-wider">{c.label}</div>
                <div className="font-display font-semibold text-white text-sm mb-1 group-hover:text-transparent transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${c.accent}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'inherit',
                  }}
                >
                  {c.value}
                </div>
                <div className="text-xs text-white/30">{c.desc}</div>
              </motion.a>
            );
          })}
        </motion.div><br/>
      </div>
    </section>
  );
}