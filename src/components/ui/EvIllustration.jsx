import { motion } from "framer-motion";

const EvIllustration = ({ className }) => {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <rect x="80" y="40" width="80" height="180" rx="8" fill="#1B4ED8" />
      <rect x="200" y="80" width="100" height="120" rx="8" fill="#22C55E" />
      <circle cx="120" cy="240" r="12" fill="#0F172A" />
      <circle cx="260" cy="240" r="12" fill="#0F172A" />
    </motion.svg>
  );
};

export default EvIllustration;
