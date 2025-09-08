import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import spaceGif from "../../assets/space.gif";

export default function Gates({ isOpen, onComplete }) {
  const gates = [
    { side: "left", clip: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" },
    { side: "right", clip: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onComplete && onComplete(isOpen);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isOpen, onComplete]);

  return (
    <>
      {gates.map((gate, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-full h-full overflow-hidden z-10"
          style={{ clipPath: gate.clip }}
          animate={isOpen ? { x: i === 0 ? "-100%" : "100%" } : { x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={spaceGif} alt={`gate-${i}`} className="w-full h-full object-cover" draggable={false} />
        </motion.div>
      ))}
    </>
  );
}
