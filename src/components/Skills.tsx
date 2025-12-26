import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      title: "LANGUAGES & CORE CS",
      skills: [
        { name: "C++", level: 95 },
        { name: "Python", level: 88 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 82 },
        { name: "Data Structures & Algorithms", level: 97 },
        { name: "Operating Systems", level: 85 },
        { name: "Distributed Systems", level: 92 },
        { name: "OOP", level: 90 },
        { name: "Databases", level: 85 },
      ],
    },
    {
      title: "BACKEND & CLOUD",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "Spring Boot", level: 70 },
        { name: "REST APIs", level: 93 },
        { name: "Microservices", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 83 },
        { name: "Linux", level: 80 },
      ],
    },
    {
      title: "ML, ANALYTICS & TOOLS",
      skills: [
        { name: "Machine Learning", level: 82 },
        { name: "Reinforcement Learning", level: 75 },
        { name: "TensorFlow", level: 78 },
        { name: "NLP", level: 70 },
        { name: "Quantitative Analysis", level: 88 },
        { name: "Probability & Statistics", level: 90 },
        { name: "Git", level: 92 },
        { name: "CI/CD", level: 75 },
        { name: "Testing", level: 70 },
        { name: "React", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen py-32 bg-[#0B0B0D] overflow-hidden"
    >
      {/* Soft red fog */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E50914] rounded-full opacity-10 blur-[200px]"
        animate={{ scale: [1, 1.15, 1], x: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0H0V40" fill="none" stroke="#E50914" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl md:text-7xl font-bold tracking-[0.2em] text-[#F2E9E4] mb-20"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px #E50914",
                "0 0 20px #B00020",
                "0 0 10px #E50914",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ARSENAL
          </motion.span>
        </motion.h2>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="bg-[#111113] border border-[#B00020]/40 p-8 rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
            >
              {/* Glow border */}
              <motion.div
                className="absolute inset-0 border border-[#E50914] opacity-0 rounded-xl"
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  boxShadow: [
                    "0 0 0px rgba(229, 9, 20, 0)",
                    "0 0 20px rgba(229, 9, 20, 0.6)",
                    "0 0 0px rgba(229, 9, 20, 0)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Category title */}
              <h3 className="text-[#F2E9E4] text-xl font-bold tracking-widest mb-8">
                {cat.title}
              </h3>

              {/* Individual skills */}
              <div className="space-y-6">
                {cat.skills.map((s, i) => (
                  <motion.div key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#F2E9E4]">{s.name}</span>
                      <span className="text-[#E50914]">{s.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-[#0B0B0D] border border-[#B00020]/40 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${s.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + i * 0.05,
                          ease: "easeOut",
                        }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#E50914] to-[#B00020] shadow-[0_0_15px_#E50914]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
