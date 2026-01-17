import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import ParticleField from './ParticleField';
import FogLayer from './FogLayer';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // ⭐ FIXED SOCIALS
  const socials = [
    { icon: Github, href: 'https://github.com/ash98ketchum', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anirudh-chauhan-7852a8276', label: 'LinkedIn' },
    { icon: SiCodeforces, href: 'https://codeforces.com/profile/anirudhc69', label: 'Codeforces' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/ash98ketchum_', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:anirudhchauhan8074@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050509]"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,22,49,0.35)_0%,transparent_55%),radial-gradient(circle_at_90%_0%,rgba(176,13,49,0.3)_0%,transparent_60%)]" />

      {/* FOG + PARTICLES (FIXED pointer-events) */}
      <div className="pointer-events-none">
        <FogLayer />
        <ParticleField />
      </div>

      {/* GRID */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FF16311f 1px, transparent 1px), linear-gradient(90deg, #FF16311f 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* CONTENT */}
      <div className="relative z-50 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="space-y-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          {/* TOP PILL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FF1631]/40 bg-[#050509]/80 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1631] shadow-[0_0_10px_rgba(255,22,49,0.8)]" />
            <span className="text-[0.68rem] tracking-[0.35em] uppercase text-[#F9DFE7]/80">
              ICPC Asia West Regionalist • Codeforces Master 2105
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xs md:text-sm tracking-[0.45em] uppercase text-[#FF879A]">
              Developer from the shadows
            </p>

            <h1 className="font-bold tracking-tight leading-tight">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-[#FDF2F5]">
                Anirudh Chauhan
              </span>

              {/* ⭐ FIXED VISIBILITY ROLE */}
              <motion.span
                className="mt-2 block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r 
                from-[#FF1631] via-[#FF4B6E] to-[#FFE6F0] 
                bg-clip-text text-transparent tracking-[0.12em] uppercase"
                style={{
                  textShadow:
                    "0 0 12px rgba(255,46,76,0.8), 0 0 28px rgba(255,46,76,0.5)",
                }}
                animate={{
                  opacity: [0.95, 1, 0.95],
                  textShadow: [
                    "0 0 20px #FF1631, 0 0 55px #FF1631",
                    "0 0 30px #FF4B6E, 0 0 80px #FF4B6E",
                    "0 0 20px #FF1631, 0 0 55px #FF1631",
                  ],
                }}
                transition={{ duration: 3.2, repeat: Infinity }}
              >
                Systems & ML Engineer
              </motion.span>
            </h1>
          </motion.div>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-3xl mx-auto text-base md:text-lg text-[#C0AEB9] leading-relaxed"
          >
            I architect scalable platforms, real-time threat detection systems, and distributed
            health applications. Competitive programming is my playground, where over 2000+ problems
            and global top-50 finishes sharpen how I design production-grade systems.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full text-xs tracking-[0.26em] uppercase font-semibold text-[#050509]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-[#FFE6F0]" />
              <motion.span
                className="absolute -inset-[1px] rounded-full border border-transparent"
                animate={{
                  boxShadow: [
                    "0 0 25px rgba(255,22,49,0.5)",
                    "0 0 40px rgba(255,75,110,0.7)",
                    "0 0 25px rgba(255,22,49,0.5)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full border border-[#FF1631]/40 bg-[#050509]/80 text-xs tracking-[0.26em] uppercase text-[#FDEAF1] font-semibold hover:border-[#FF4B6E]/80 hover:bg-[#15020B] transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Problems Solved', value: '2000+' },
              { label: 'Global Contest Top Ranks', value: '4×' },
              { label: 'ICPC Regional Runs', value: 'Asia West' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#FF1631]/20 bg-[#050509]/80 px-5 py-4 backdrop-blur-md"
              >
                <p className="text-sm text-[#D7C2CD]/80">{stat.label}</p>
                <p className="text-2xl font-semibold text-[#FFE3ED] mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* SOCIALS — FIXED CLICKABILITY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="relative z-50 flex justify-center gap-4 pt-10"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative p-3 rounded-full border border-[#FF1631]/30 bg-[#050509]/70 text-[#FDF2F5] hover:border-[#FF4B6E]/80 transition-colors"
              >
                <social.icon size={22} />
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255,22,49,0)",
                      "0 0 20px rgba(255,22,49,0.6)",
                      "0 0 0px rgba(255,22,49,0)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
