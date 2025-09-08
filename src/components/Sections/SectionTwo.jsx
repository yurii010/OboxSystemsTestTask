// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import TopArrow from "../TopArrow/TopArrow";

export default function SectionTwo({ currentIndex, onBack }) {
  return (
    <motion.div
      className="flex-shrink-0 h-full w-full flex flex-col gap-y-6 items-center justify-center px-8 text-center"
      animate={{ x: (0 - currentIndex) * 100 + "%" }}
      transition={{ type: "tween", duration: 0.6 }}
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-2xl 
          md:text-3xl 
          font-semibold 
          text-white/90 
          drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] 
          max-w-3xl 
          leading-relaxed
          select-none
        "
      >
        Step into the vastness of space and explore distant stars, galaxies, and mysterious worlds. Embark on a journey beyond the familiar, where every turn
        reveals new wonders of the universe.
      </motion.p>

      <TopArrow onClick={onBack} icon={ArrowUp} />
    </motion.div>
  );
}
