import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Shadow Commerce',
      description:
        'A dark-themed e-commerce platform with real-time inventory tracking and atmospheric UI',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    },
    {
      title: 'Neural Interface',
      description:
        'AI-powered dashboard with predictive analytics and immersive data visualization',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    },
    {
      title: 'Void Chat',
      description:
        'Encrypted real-time messaging app with end-to-end security and dark mode',
      tech: ['React', 'WebSocket', 'Express', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg',
    },
    {
      title: 'Crimson Analytics',
      description:
        'Business intelligence platform with advanced data processing and reporting',
      tech: ['Vue.js', 'GraphQL', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
    },
    {
      title: 'Dark Portfolio',
      description:
        'Interactive portfolio generator with cinematic animations and custom themes',
      tech: ['React', 'Framer Motion', 'Tailwind', 'Supabase'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    },
    {
      title: 'Eclipse API',
      description:
        'High-performance REST API with advanced caching and rate limiting',
      tech: ['Node.js', 'Express', 'Redis', 'MongoDB'],
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-32 bg-[#0B0B0D] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(176,0,32,0.1)_0%,_transparent_60%)]" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B00020] rounded-full blur-[200px] opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-1 w-16 bg-[#E50914] mx-auto mb-6"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-[#F2E9E4] mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 15px #E50914, 0 0 30px #B00020',
                  '0 0 25px #E50914, 0 0 50px #B00020',
                  '0 0 15px #E50914, 0 0 30px #B00020',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PROJECTS
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#5A5A5A] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Creations forged in the depths of innovation
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-[#1A1A1D] border border-[#B00020]/30 overflow-hidden h-full flex flex-col">
                <motion.div
                  className="absolute inset-0 border border-[#E50914] opacity-0 group-hover:opacity-100 pointer-events-none z-20"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(229, 9, 20, 0)',
                      '0 0 40px rgba(229, 9, 20, 0.4)',
                      '0 0 0px rgba(229, 9, 20, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.8 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#E50914] mix-blend-multiply"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3
                    className="text-xl font-bold text-[#F2E9E4] tracking-wider mb-3 group-hover:text-[#E50914] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-[#0B0B0D] border border-[#B00020]/50 text-[#E50914] text-xs tracking-wider"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-[#B00020]/30">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 3 }}
                      className="flex items-center gap-2 text-[#F2E9E4] text-sm hover:text-[#E50914] transition-colors group/link"
                    >
                      <ExternalLink size={16} />
                      <span className="relative">
                        Live Demo
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-px bg-[#E50914] group-hover/link:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.a>

                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, x: 3 }}
                      className="flex items-center gap-2 text-[#F2E9E4] text-sm hover:text-[#E50914] transition-colors group/link"
                    >
                      <Github size={16} />
                      <span className="relative">
                        Code
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-px bg-[#E50914] group-hover/link:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-transparent border-2 border-[#E50914] text-[#F2E9E4] tracking-widest uppercase text-sm font-bold overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-[#E50914]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(229, 9, 20, 0.4)',
                  '0 0 40px rgba(229, 9, 20, 0.7)',
                  '0 0 20px rgba(229, 9, 20, 0.4)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
