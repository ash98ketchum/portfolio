import { motion } from 'framer-motion';

const FogLayer = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(255, 22, 49, 0.35) 0%, transparent 55%)',
        }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-0 opacity-2"
        style={{
          background:
            'radial-gradient(ellipse at 70% 30%, rgba(255, 75, 110, 0.4) 0%, transparent 60%)',
        }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default FogLayer;
