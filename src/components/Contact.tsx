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
    { icon: Mail, label: 'Email', value: 'dev@upside-down.com' },
    { icon: MapPin, label: 'Location', value: 'The Upside Down' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 bg-[#0B0B0D] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(176,0,32,0.15)_0%,_transparent_60%)]" />

      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(176, 0, 32, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
                opacity: [1, 0.8, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CONTACT
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#5A5A5A] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Reach out from your dimension to mine
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#F2E9E4] tracking-wider mb-6">
                Let's Connect
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hi,
                I'm always open to new opportunities and conversations. Drop me a message and
                I'll get back to you from the other side.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 border border-[#B00020] bg-[#1A1A1D] group-hover:border-[#E50914] group-hover:bg-[#B00020]/10 transition-all"
                    >
                      <info.icon className="text-[#E50914]" size={24} />
                    </motion.div>
                    <div>
                      <div className="text-[#5A5A5A] text-sm tracking-wider">{info.label}</div>
                      <div className="text-[#F2E9E4] font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative p-8 border-2 border-[#B00020]/30 bg-[#1A1A1D]"
            >
              <motion.div
                className="absolute inset-0 border-2 border-[#E50914] opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <p className="text-[#F2E9E4] leading-relaxed italic">
                "In the shadows of code, we find light. In the depths of problems, we discover
                solutions. Let's build something extraordinary together."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#1A1A1D] border border-[#B00020]/30 p-8">
              <motion.div
                className="absolute inset-0 border border-[#E50914] opacity-0"
                whileHover={{ opacity: 1 }}
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(229, 9, 20, 0)',
                    '0 0 30px rgba(229, 9, 20, 0.3)',
                    '0 0 0px rgba(229, 9, 20, 0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[#F2E9E4] tracking-wider mb-2 text-sm font-medium">
                    NAME
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0B0D] border border-[#B00020]/50 px-4 py-3 text-[#F2E9E4] focus:border-[#E50914] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[#F2E9E4] tracking-wider mb-2 text-sm font-medium">
                    EMAIL
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0B0D] border border-[#B00020]/50 px-4 py-3 text-[#F2E9E4] focus:border-[#E50914] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#F2E9E4] tracking-wider mb-2 text-sm font-medium">
                    MESSAGE
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-[#0B0B0D] border border-[#B00020]/50 px-4 py-3 text-[#F2E9E4] focus:border-[#E50914] focus:outline-none resize-none transition-colors"
                    placeholder="Your message from the other side..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-transparent border-2 border-[#E50914] text-[#F2E9E4] tracking-widest uppercase text-sm font-bold overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-[#E50914]"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
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
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
