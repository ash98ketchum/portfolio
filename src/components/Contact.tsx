import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'anirudhchauhan8074@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Mathura, Uttar Pradesh, India' },
    { icon: Phone, label: 'Phone', value: '+91-9027370595' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-28 bg-[#050509] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,22,49,0.14)_0%,_transparent_60%)]" />

      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255, 22, 49, 0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(176, 13, 49, 0.2) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.2em] text-[#FDF2F5]"
          >
            CONTACT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 text-[#C0AEB9] text-base md:text-lg max-w-2xl mx-auto"
          >
            Whether it&apos;s a complex system design, ML pipeline or contest-style problem,
            I&apos;d love to collaborate.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* left info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#FFE3ED] tracking-[0.16em] uppercase mb-4">
                Let&apos;s build something sharp
              </h3>
              <p className="text-[#C0AEB9] leading-relaxed">
                If you&apos;re working on large-scale systems, real-time analytics or anything that
                needs competitive-level problem solving, drop a message. I&apos;m always open to
                internships, research collaborations and high-impact side projects.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl border border-[#FF1631]/40 bg-[#050509]/90 group-hover:border-[#FF4B6E]/80 transition-colors">
                    <info.icon className="text-[#FF9AAF]" size={22} />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.24em] text-[#C9B2BF] uppercase">
                      {info.label}
                    </div>
                    <div className="text-sm md:text-base text-[#FFE3ED] font-medium">
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative mt-5 rounded-2xl border border-[#FF1631]/30 bg-[#050509]/90 p-6"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl border border-[#FF4B6E] opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p className="relative z-10 text-sm text-[#F5E6EF] leading-relaxed italic">
                &quot;Good systems feel effortless because the hard problems were solved in the
                design phase. That&apos;s the part I enjoy the most.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* right form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#FF1631]/35 bg-[#050509]/90 backdrop-blur-xl p-7">
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-xs font-medium text-[#F5E6EF] tracking-[0.26em] mb-2 uppercase">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-[#050509] border border-[#FF1631]/40 px-4 py-3 text-sm text-[#FFE3ED] focus:border-[#FF4B6E] outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F5E6EF] tracking-[0.26em] mb-2 uppercase">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-[#050509] border border-[#FF1631]/40 px-4 py-3 text-sm text-[#FFE3ED] focus:border-[#FF4B6E] outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#F5E6EF] tracking-[0.26em] mb-2 uppercase">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-[#050509] border border-[#FF1631]/40 px-4 py-3 text-sm text-[#FFE3ED] focus:border-[#FF4B6E] outline-none resize-none"
                    placeholder="Tell me about the problem you want to solve..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full overflow-hidden text-xs font-semibold tracking-[0.26em] uppercase text-[#050509]"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF1631] via-[#FF4B6E] to-[#FFE6F0]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
