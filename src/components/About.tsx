import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions that stand the test of time',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Optimized performance with lightning-fast response times',
    },
    {
      icon: Target,
      title: 'Pixel Perfect',
      description: 'Meticulous attention to detail in every design implementation',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 bg-[#0B0B0D] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(176,0,32,0.1)_0%,_transparent_50%)]" />

      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-[#B00020] rounded-full blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-[#E50914] mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-[#F2E9E4] mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px #E50914',
                  '0 0 20px #E50914',
                  '0 0 10px #E50914',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ABOUT
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#5A5A5A] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A developer who thrives in the unknown, turning complex problems into elegant solutions.
            Obsessed with creating experiences that blur the line between reality and code.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#F2E9E4] text-lg leading-relaxed">
              For the past several years, I've been navigating the dark corridors of web development,
              crafting experiences that are as captivating as they are functional.
            </p>
            <p className="text-[#5A5A5A] text-lg leading-relaxed">
              My journey began in the shadows of curiosity, evolving through countless lines of code
              and late-night debugging sessions. Now, I specialize in building atmospheric,
              high-performance applications that leave lasting impressions.
            </p>
            <p className="text-[#F2E9E4] text-lg leading-relaxed">
              When I'm not coding in the Upside Down, you'll find me exploring new technologies,
              contributing to open source, or diving deep into UI/UX design patterns.
            </p>

            <motion.div
              className="pt-6 flex gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#E50914]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5+
                </motion.div>
                <div className="text-[#5A5A5A] text-sm tracking-wider">YEARS EXP</div>
              </div>
              <div className="w-px bg-[#B00020]" />
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#E50914]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  50+
                </motion.div>
                <div className="text-[#5A5A5A] text-sm tracking-wider">PROJECTS</div>
              </div>
              <div className="w-px bg-[#B00020]" />
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#E50914]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  100%
                </motion.div>
                <div className="text-[#5A5A5A] text-sm tracking-wider">SATISFACTION</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square bg-[#1A1A1D] border-2 border-[#B00020] p-8">
              <motion.div
                className="absolute inset-0 border-2 border-[#E50914]"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-64 h-64 border-2 border-[#B00020] rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#E50914] text-6xl font-bold"
                  >
                    {'</>'}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-[#1A1A1D] border border-[#B00020]/30 p-8 h-full">
                <motion.div
                  className="absolute inset-0 border border-[#E50914] opacity-0 group-hover:opacity-100"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(229, 9, 20, 0)',
                      '0 0 30px rgba(229, 9, 20, 0.4)',
                      '0 0 0px rgba(229, 9, 20, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <feature.icon className="text-[#E50914]" size={48} />
                </motion.div>
                <h3 className="text-[#F2E9E4] text-xl font-bold tracking-wider mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#5A5A5A] leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
