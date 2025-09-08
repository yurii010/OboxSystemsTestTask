import { ArrowLeft, ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ControlButtons({ onPrev, onNext }) {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
      <motion.button
        onClick={onPrev}
        className="
          rounded-full 
          bg-white/20
          border border-white/50
          text-white
          p-6
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
        <ArrowLeft size={24} />
      </motion.button>

      <motion.button
        onClick={onNext}
        className="
          rounded-full 
          bg-white/20
          border border-white/50
          text-white
          p-6
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
        <ArrowRight size={24} />
      </motion.button>
    </div>
  );
}
