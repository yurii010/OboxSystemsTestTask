
import { ArrowDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function BottomArrow({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="
        rounded-full 
        bg-white/20
        border border-white/50
        text-white
        p-8
        shadow-lg
        backdrop-blur-sm
        hover:bg-white/30
        hover:scale-110
        transition-all duration-300 ease-in-out
        flex items-center justify-center
      "
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.5 }}
    >
      <ArrowDown size={24} />
    </motion.button>
  );
}
