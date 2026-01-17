import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#050509] border-t border-[#FF1631]/25 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,22,49,0.12)_0%,_transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5"
        >
          <motion.div
            className="text-lg md:text-xl font-semibold tracking-[0.3em] text-[#FDF2F5] uppercase"
            animate={{
              textShadow: [
                '0 0 10px #FF1631',
                '0 0 22px #FF4B6E',
                '0 0 10px #FF1631',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ANIRUDH
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-[#C0AEB9] text-sm">
            <span>Crafted with</span>
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                color: ['#C0AEB9', '#FF1631', '#C0AEB9'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex"
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            <span>between contests & late-night debugging sessions.</span>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xs text-[#9B8795]"
          >
            © {new Date().getFullYear()} Anirudh Chauhan. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
