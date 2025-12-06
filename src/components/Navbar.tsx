import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md py-4 shadow-2xl border-b border-[#B00020]/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold tracking-widest text-[#F2E9E4]"
        >
          <span className="relative">
            <span className="relative z-10">DEV</span>
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px #E50914, 0 0 20px #E50914, 0 0 30px #B00020',
                  '0 0 20px #E50914, 0 0 30px #E50914, 0 0 40px #B00020',
                  '0 0 10px #E50914, 0 0 20px #E50914, 0 0 30px #B00020',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 z-0 text-[#E50914]"
            >
              DEV
            </motion.span>
          </span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative text-[#F2E9E4] tracking-wider text-sm font-medium group"
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] group-hover:w-full transition-all duration-300"
                whileHover={{ boxShadow: '0 0 8px #E50914' }}
              />
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F2E9E4]"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#1A1A1D]/98 backdrop-blur-lg border-t border-[#B00020]/30"
        >
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-[#F2E9E4] tracking-wider text-lg hover:text-[#E50914] transition-colors"
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
