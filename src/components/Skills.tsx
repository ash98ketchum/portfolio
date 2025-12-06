import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD', 'Testing'],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 bg-[#0B0B0D] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(176,0,32,0.15)_0%,_transparent_50%)]" />

      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E50914] rounded-full blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#E50914"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '4rem' } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#E50914] mx-auto mb-6"
          />

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-[#F2E9E4] mb-6 relative inline-block"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px #E50914, 0 0 20px #B00020',
                  '0 0 20px #E50914, 0 0 40px #B00020',
                  '0 0 10px #E50914, 0 0 20px #B00020',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ARSENAL
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#5A5A5A] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Tools and technologies from the shadows
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              className="relative group"
            >
              <div className="bg-[#1A1A1D] border border-[#B00020]/30 p-8 h-full">
                <motion.div
                  className="absolute inset-0 border border-[#E50914] opacity-0 group-hover:opacity-100 pointer-events-none"
                  whileHover={{
                    boxShadow: '0 0 40px rgba(229, 9, 20, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.2 }}
                  className="text-2xl font-bold text-[#E50914] tracking-widest mb-8 relative"
                >
                  {category.category}
                  <motion.div
                    className="absolute -bottom-3 left-0 h-0.5 bg-[#E50914]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + categoryIndex * 0.2 }}
                  />
                </motion.h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                      }}
                      className="relative group/skill cursor-pointer"
                    >
                      <div className="bg-[#0B0B0D] border border-[#B00020]/50 p-4 text-center relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-[#E50914] opacity-0 group-hover/skill:opacity-10"
                          whileHover={{ opacity: 0.1 }}
                        />
                        <motion.div
                          className="absolute inset-0 border border-[#E50914] opacity-0 group-hover/skill:opacity-100"
                          animate={{
                            boxShadow: [
                              '0 0 0px rgba(229, 9, 20, 0)',
                              '0 0 20px rgba(229, 9, 20, 0.5)',
                              '0 0 0px rgba(229, 9, 20, 0)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="relative z-10 text-[#F2E9E4] font-medium tracking-wide text-sm">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-[#1A1A1D] border-2 border-[#B00020] px-12 py-6 relative group">
            <motion.div
              className="absolute inset-0 bg-[#E50914] opacity-0 group-hover:opacity-5"
              whileHover={{ opacity: 0.05 }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-[#E50914] opacity-0 group-hover:opacity-100"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(229, 9, 20, 0)',
                  '0 0 40px rgba(229, 9, 20, 0.6)',
                  '0 0 0px rgba(229, 9, 20, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-[#F2E9E4] text-lg tracking-wider relative z-10">
              Always learning, always evolving in the{' '}
              <motion.span
                className="text-[#E50914] font-bold"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                darkness
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
