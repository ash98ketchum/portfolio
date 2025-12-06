import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const skillCategories = [
    {
      category: 'Languages & Core CS',
      skills: [
        'C++',
        'Python',
        'Java',
        'JavaScript',
        'SQL',
        'Data Structures & Algorithms',
        'Operating Systems',
        'Distributed Systems',
        'OOP',
        'Databases',
      ],
    },
    {
      category: 'Backend & Cloud',
      skills: [
        'Node.js',
        'Express',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'MongoDB',
        'PostgreSQL',
        'AWS',
        'Docker',
        'Linux',
      ],
    },
    {
      category: 'ML, Analytics & Tools',
      skills: [
        'Machine Learning',
        'Reinforcement Learning',
        'TensorFlow',
        'NLP',
        'Quantitative Analysis',
        'Probability & Statistics',
        'Git',
        'CI/CD',
        'Testing',
        'React',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center py-28 bg-[#050509] overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,22,49,0.16)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF1631" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-18"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '4rem' } : {}}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-transparent mx-auto mb-5"
          />
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-[#FDF2F5]"
          >
            ARSENAL
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 text-[#C0AEB9] text-base md:text-lg max-w-2xl mx-auto"
          >
            A stack tuned for high-throughput systems, analytics pipelines and real-time decisions.
          </motion.p>
        </motion.div>

        {/* categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + 0.15 * categoryIndex }}
              className="relative group"
            >
              <div className="h-full rounded-2xl border border-[#FF1631]/30 bg-[#050509]/90 backdrop-blur-xl p-7">
                <motion.h3
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + 0.15 * categoryIndex }}
                  className="text-lg font-semibold text-[#FF9AAF] tracking-[0.2em] uppercase mb-6"
                >
                  {category.category}
                </motion.h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: 0.45 + 0.15 * categoryIndex + 0.04 * skillIndex,
                      }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="relative group/skill"
                    >
                      <div className="flex items-center justify-between gap-3 rounded-xl border border-[#FF1631]/35 bg-[#050509] px-4 py-2.5 overflow-hidden">
                        <span className="relative z-10 text-sm text-[#F5E6EF]">{skill}</span>
                        <span className="h-[2px] w-10 bg-gradient-to-r from-transparent via-[#FF1631] to-transparent opacity-50" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* tagline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#FF1631]/40 bg-[#050509]/80 px-6 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#FF1631] shadow-[0_0_10px_rgba(255,22,49,0.8)]" />
            <p className="text-xs md:text-sm text-[#EBD6E2] tracking-[0.25em] uppercase">
              Always learning, always evolving in the dark corners of the stack
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
