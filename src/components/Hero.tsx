import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ParticleField from './ParticleField';
import FogLayer from './FogLayer';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(176,0,32,0.15)_0%,_transparent_70%)]" />

      <FogLayer />
      <ParticleField />

      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F2E9E4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <span className="text-[#E50914] text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to the Upside Down
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl md:text-8xl font-bold tracking-widest text-[#F2E9E4] relative"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px #E50914, 0 0 40px #E50914, 0 0 60px #B00020, 0 0 80px #B00020',
                  '0 0 40px #E50914, 0 0 60px #E50914, 0 0 80px #B00020, 0 0 100px #B00020',
                  '0 0 20px #E50914, 0 0 40px #E50914, 0 0 60px #B00020, 0 0 80px #B00020',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block"
            >
              DEVELOPER
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="block mt-4 text-5xl md:text-7xl text-[#E50914]"
            >
              FROM THE SHADOWS
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            Crafting immersive digital experiences from the depths of code.
            <br />
            Where darkness meets innovation, and mysteries become reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-[#E50914] text-[#F2E9E4] rounded-none tracking-widest uppercase text-sm font-bold overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-[#E50914]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </span>
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(229, 9, 20, 0.5)',
                    '0 0 40px rgba(229, 9, 20, 0.8)',
                    '0 0 20px rgba(229, 9, 20, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#1A1A1D] border-2 border-[#B00020] text-[#F2E9E4] rounded-none tracking-widest uppercase text-sm font-bold hover:bg-[#B00020]/20 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex gap-6 justify-center pt-12"
          >
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 border border-[#B00020] text-[#F2E9E4] hover:bg-[#B00020]/20 hover:border-[#E50914] transition-all group relative"
              >
                <social.icon size={24} />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(229, 9, 20, 0)',
                      '0 0 20px rgba(229, 9, 20, 0.6)',
                      '0 0 0px rgba(229, 9, 20, 0)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#E50914] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[#E50914] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
