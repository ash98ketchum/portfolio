import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  images: string[]; // user will replace with actual image URLs/paths
  live?: string;
  code?: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const total = project.images.length || 1;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % total);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + total) % total);

  const startAutoSlide = () => {
    if (intervalRef.current !== null || total <= 1) return;
    intervalRef.current = window.setInterval(nextImage, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (hovered) startAutoSlide();
    else stopAutoSlide();
    return stopAutoSlide;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, total]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-full rounded-2xl border border-[#FF1631]/25 bg-[#050509]/90 backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
        {/* image area */}
        <div className="relative h-52 overflow-hidden">
          {project.images.length > 0 && (
            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1.02, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />

          {/* tinted overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-[#FF1631] mix-blend-multiply"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0.26 : 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* arrows */}
          {total > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/40 text-white border border-white/30 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/40 text-white border border-white/30 hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* dots */}
          {total > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentImage
                      ? 'w-5 bg-white'
                      : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* body */}
        <div className="flex-1 flex flex-col px-6 py-5">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-[#FFE3ED] tracking-[0.16em] uppercase">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 text-[0.75rem] tracking-[0.28em] uppercase text-[#FF9AAF]">
                {project.subtitle}
              </p>
            )}
          </div>
          <p className="text-sm text-[#C0AEB9] leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-[#FF1631]/40 bg-[#050509] text-[0.7rem] text-[#FFE3ED] tracking-[0.18em] uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-4 border-t border-white/5 pt-4">
            {project.live && (
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.05, x: 2 }}
                className="flex items-center gap-2 text-xs text-[#FDF2F5] tracking-[0.2em] uppercase hover:text-[#FF9AAF]"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </motion.a>
            )}
            {project.code && (
              <motion.a
                href={project.code}
                whileHover={{ scale: 1.05, x: 2 }}
                className="flex items-center gap-2 text-xs text-[#FDF2F5] tracking-[0.2em] uppercase hover:text-[#FF9AAF]"
              >
                <Github size={14} />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      title: 'Scalable Predictive Analytics Platform',
      subtitle: 'Reinforcement Learning • AWS',
      description:
        'A low-latency analytics platform that uses reinforcement learning to drive reliable predictions. Optimized server-side caching to cut operational disruptions by 90% and keep the system resilient under load.',
      tech: ['Python', 'AWS', 'Node.js', 'Reinforcement Learning', 'SQL'],
      images: [
        '/images/predictive-1.jpg',
        '/images/predictive-2.jpg',
        '/images/predictive-3.jpg',
      ],
    },
    {
      title: 'Real-Time Threat Detection System',
      subtitle: 'Streaming NLP on AWS Lambda',
      description:
        'High-performance pipeline that ingests high-velocity data streams and triggers real-time alerts. A distributed inference design improved model accuracy and reduced false positives by 30%.',
      tech: ['Python', 'TensorFlow', 'NLP', 'AWS Lambda'],
      images: [
        '/images/threat-1.jpg',
        '/images/threat-2.jpg',
        '/images/threat-3.jpg',
      ],
    },
    {
      title: 'Distributed Health Data Application',
      subtitle: 'Microservices at Scale',
      description:
        'Secure full-stack app for processing 300k+ health records. Designed REST APIs for a microservices backend and tuned data handling + lazy loading to improve perceived performance by 20%.',
      tech: ['Node.js', 'React', 'MongoDB', 'REST APIs', 'Microservices'],
      images: [
        '/images/health-1.jpg',
        '/images/health-2.jpg',
        '/images/health-3.jpg',
      ],
    },
    {
      title: 'High-Throughput Scheduling Engine',
      subtitle: 'Walmart ASE Virtual Experience',
      description:
        'Scheduling engine built around a custom priority queue to eliminate processing bottlenecks. The design improved algorithmic efficiency by 25% and came with UML documentation that sped up peer reviews by 15%.',
      tech: ['Java', 'Data Structures', 'System Design'],
      images: [
        '/images/walmart-1.jpg',
        '/images/walmart-2.jpg',
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-28 bg-[#050509] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,22,49,0.13)_0%,_transparent_60%)]" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[#FF1631] rounded-full blur-[220px] opacity-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-18"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[2px] w-16 bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-transparent mx-auto mb-5"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-[#FDF2F5]"
          >
            PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 text-[#C0AEB9] text-base md:text-lg max-w-2xl mx-auto"
          >
            Creations forged where high-throughput systems, ML and clean design intersect.
          </motion.p>
        </motion.div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={!!isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
