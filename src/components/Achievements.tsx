import { motion } from "framer-motion";

const achievements = [
  {
    title: "ICPC Asia West Regionalist",
    img: "/images/icpc.jpeg",   // <-- put your image in public/images
    desc: "Qualified and competed in the ICPC Asia West Regionals — one of the toughest competitive programming contests globally.",
  },
  {
    title: "Codeforces Master (2105)",
    img: "/images/codeforces.jpg",
    desc: "Reached Master rank on Codeforces, placing in the top global competitors in algorithmic problem solving.",
  },
  {
    title: "LeetCode Top Performer",
    img: "/images/leetcode.jpg",
    desc: "Solved 2000+ problems with multiple global top-50 contest finishes on LeetCode.",
  },
  {
    title: "SSoC Contributor",
    img: "/images/oss.jpg",
    desc: "Selected for Script Winter/Summer of Code, contributing to open-source systems and ML projects.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-28 bg-[#050509] overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,60,0.25),transparent_65%)] blur-[150px]" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFE8EF] tracking-wide">
          Achievements
        </h2>
        <p className="mt-2 text-[#C5B5BC] max-w-xl mx-auto text-sm md:text-base">
          A glimpse of the milestones earned through competitive programming,
          systems engineering, and academic excellence.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            className="
              group relative bg-[#0A0A0F]/80 rounded-2xl p-5 
              border border-[#FF1631]/30 backdrop-blur-xl
              shadow-[0_0_20px_rgba(255,22,49,0.25)]
              hover:shadow-[0_0_35px_rgba(255,22,49,0.55)]
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={ach.img}
                alt={ach.title}
                className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-[#FFE8EF]">
              {ach.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-[#C8B3BB] leading-relaxed">
              {ach.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating particles (optional aesthetic layer) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5,
            }}
            animate={{
              y: [-10, -180],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
