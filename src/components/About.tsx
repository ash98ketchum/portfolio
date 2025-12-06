import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Target, Trophy } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: 'Systems-Level Thinking',
      description:
        'Designing distributed architectures that stay robust under real production traffic, not just in theory.',
    },
    {
      icon: Zap,
      title: 'Real-Time Intelligence',
      description:
        'Building low-latency analytics and threat detection pipelines with Python, TensorFlow, and AWS.',
    },
    {
      icon: Target,
      title: 'Competitive Precision',
      description:
        'ICPC regionalist and Codeforces Master – the same rigor I use for contests goes into every line of code.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-28 bg-[#050509] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,22,49,0.16)_0%,_transparent_55%)]" />

      <motion.div
        className="absolute top-1/4 left-0 w-80 h-80 bg-[#FF1631] rounded-full blur-[160px] opacity-10"
        animate={{ scale: [1, 1.15, 1], x: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: '4rem', opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-transparent"
            />
            <span className="text-[0.7rem] tracking-[0.35em] uppercase text-[#F1D9E4]/70">
              About Anirudh
            </span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: '4rem', opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="h-[2px] bg-gradient-to-l from-[#FF1631] via-[#FF4B6E] to-transparent"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.18em] text-[#FDF2F5]"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 14px #FF1631, 0 0 40px #FF163155',
                  '0 0 26px #FF4B6E, 0 0 70px #FF4B6E40',
                  '0 0 14px #FF1631, 0 0 40px #FF163155',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              FROM LOGIC TO IMPACT
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-3xl mx-auto text-[#C0AEB9] text-base md:text-lg leading-relaxed"
          >
            I’m a Computer Science student at GLA University who enjoys operating at the intersection
            of algorithms, systems and machine learning. I love turning raw constraints into
            elegant, production-ready architectures – from scalable analytics platforms to
            fault-tolerant microservices.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-18">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-6"
          >
            <p className="text-[#F5E6EF] text-base md:text-lg leading-relaxed">
              Through projects like a <span className="text-[#FF9AAF] font-medium">Scalable
              Predictive Analytics Platform</span>, a{' '}
              <span className="text-[#FF9AAF] font-medium">Real-Time Threat Detection System</span>,
              and a <span className="text-[#FF9AAF] font-medium">Distributed Health Data
              Application</span>, I&apos;ve worked on real problems that involve high-throughput
              data, streaming pipelines and distributed inference.
            </p>
            <p className="text-[#B89CAD] text-base leading-relaxed">
              On the competitive side, I&apos;ve achieved{' '}
              <span className="text-[#FFE3ED] font-semibold">Codeforces Master (2105)</span>,{' '}
              <span className="text-[#FFE3ED] font-semibold">LeetCode Guardian (2351)</span>, and
              global top ranks such as <span className="text-[#FFE3ED] font-semibold">
                47th in Codeforces Round 1046 Div 2
              </span>{' '}
              and <span className="text-[#FFE3ED] font-semibold">179th in Yandex Cup 2025</span>.
              These contests are where I sharpen my intuition for edge-cases and performance.
            </p>
            <p className="text-[#F5E6EF] text-base md:text-lg leading-relaxed">
              Beyond contests, I mentor juniors in data structures and algorithms and love
              collaborating on open-source – translating complex ideas into clear, maintainable
              code that teams can build on.
            </p>

            {/* Stats */}
            <motion.div
              className="pt-6 flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex-1 min-w-[120px] rounded-2xl border border-[#FF1631]/30 bg-[#050509]/80 px-5 py-4">
                <p className="text-xs tracking-[0.25em] text-[#C9B2BF] uppercase">
                  Problems Solved
                </p>
                <p className="mt-2 text-3xl font-semibold text-[#FFE3ED]">2000+</p>
              </div>
              <div className="flex-1 min-w-[120px] rounded-2xl border border-[#FF1631]/30 bg-[#050509]/80 px-5 py-4">
                <p className="text-xs tracking-[0.25em] text-[#C9B2BF] uppercase">
                  Global Contest Rank
                </p>
                <p className="mt-2 text-3xl font-semibold text-[#FFE3ED]">47</p>
              </div>
              <div className="flex-1 min-w-[120px] rounded-2xl border border-[#FF1631]/30 bg-[#050509]/80 px-5 py-4">
                <p className="text-xs tracking-[0.25em] text-[#C9B2BF] uppercase">
                  Open-Source Programs
                </p>
                <p className="mt-2 text-3xl font-semibold text-[#FFE3ED]">SSoC</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#0B0206] via-[#14040D] to-[#050509] border border-[#FF1631]/50 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
              <motion.div
                className="absolute inset-4 rounded-[2rem] border border-[#FF4B6E]/40"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 3.2, repeat: Infinity }}
              />
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="w-64 h-64 rounded-full border border-[#FF1631]/50 flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2.3, repeat: Infinity }}
                    className="flex flex-col items-center gap-1"
                  >
                    <Trophy className="text-[#FF1631]" size={40} />
                    <p className="text-xs tracking-[0.3em] text-[#FFE3ED] uppercase">
                      ICPC Asia West
                    </p>
                    <p className="text-xs tracking-[0.3em] text-[#FFE3ED]/80 uppercase">
                      Codeforces Master
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid md:grid-cols-3 gap-7"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.14 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl border border-[#FF1631]/30 bg-[#050509]/90 backdrop-blur-xl px-7 py-6 overflow-hidden">
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl border border-[#FF4B6E] opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255,22,49,0)',
                      '0 0 26px rgba(255,22,49,0.45)',
                      '0 0 0px rgba(255,22,49,0)',
                    ],
                  }}
                  transition={{ duration: 2.3, repeat: Infinity }}
                />
                <div className="mb-5 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                    className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#FF1631] via-[#FF4B6E] to-[#FFE6F0] flex items-center justify-center text-[#050509]"
                  >
                    <feature.icon size={26} />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold tracking-[0.16em] text-[#FFE3ED] uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#C0AEB9] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
