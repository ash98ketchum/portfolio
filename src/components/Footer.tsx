import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B0D] border-t border-[#B00020]/30 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(176,0,32,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.div
            className="text-2xl font-bold tracking-widest text-[#F2E9E4]"
            animate={{
              textShadow: [
                '0 0 10px #E50914',
                '0 0 20px #E50914',
                '0 0 10px #E50914',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            DEV
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-[#5A5A5A]">
            <span>Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ['#5A5A5A', '#E50914', '#5A5A5A'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>in the Upside Down</span>
          </div>

          <div className="text-[#5A5A5A] text-sm">
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              © {new Date().getFullYear()} All rights reserved in all dimensions
            </motion.p>
          </div>

          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-[#E50914] to-transparent mx-auto"
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
