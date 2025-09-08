import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import Gates from "./components/Gates/Gates";
import ControlButtons from "./components/ControlButtons/ControlButtons";
import BottomArrow from "./components/BottomArrow/BottomArrow";

import SectionOne from "./components/Sections/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo";
import SectionThree from "./components/Sections/SectionThree";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);

  const changeSlide = (step) => {
    const len = 3;
    setCurrentIndex((currentIndex + step + len) % len);
  };

  const openGates = () => {
    setShowText(false);
    setIsOpen(true);
  };

  const closeGates = () => {
    setIsOpen(false);
    setTimeout(() => setShowText(true), 1200);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Gates isOpen={isOpen} />

      <AnimatePresence>
        {!isOpen && showText && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="
                text-7xl 
                font-bold 
                tracking-widest 
                text-white/90 
                drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
                text-center
                select-none
              "
            >
              Starlight Journey
            </motion.h1>

            <BottomArrow onClick={openGates} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: `url("https://wallpapers.com/images/hd/black-space-7kzhjs4o5spwgwtq.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SectionOne currentIndex={currentIndex} />
        <SectionTwo currentIndex={currentIndex} onBack={closeGates} />
        <SectionThree currentIndex={currentIndex} />
      </div>

      {isOpen && <ControlButtons onPrev={() => changeSlide(-1)} onNext={() => changeSlide(1)} />}
    </div>
  );
}
