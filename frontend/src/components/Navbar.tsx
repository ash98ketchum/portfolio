import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050509]/95 backdrop-blur-xl border-b border-[#FF1631]/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#050509]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative text-xl md:text-2xl font-semibold tracking-[0.35em] text-[#FDF2F5] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="relative z-10">ANIRUDH</span>
          <motion.span
            className="absolute inset-0 blur-sm text-[#FF1631]/70"
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ANIRUDH
          </motion.span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index }}
              className="relative text-[#E7D7DD] tracking-[0.16em] uppercase hover:text-[#FF1631] transition-colors"
            >
              {item}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-transparent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-[#FDF2F5]"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#050509]/98 border-t border-[#FF1631]/25 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-[#FDF2F5] tracking-[0.18em] uppercase text-sm py-1 border-b border-white/5 last:border-none hover:text-[#FF1631] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
