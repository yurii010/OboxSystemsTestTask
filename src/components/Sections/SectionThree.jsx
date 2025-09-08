// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import VideoCarousel from "../VideoCarousel/VideoCarousel";

const videos = [
  { id: "0KBjnNuhRHs", name: "Mercury" },
  { id: "BvXa1n9fjow", name: "Venus" },
  { id: "HCDVN7DCzYE", name: "Earth" },
  { id: "D8pnmwOXhoY", name: "Mars" },
  { id: "PtkqwslbLY8", name: "Jupiter" },
  { id: "epZdZaEQhS0", name: "Saturn" },
  { id: "m4NXbFOiOGk", name: "Uranus" },
  { id: "NStn7zZKXfE", name: "Neptune" },
];

export default function SectionThree({ currentIndex }) {
  const isActive = currentIndex === 2;

  return (
    <motion.div
      className="flex-shrink-0 h-full w-full flex flex-col items-center justify-center p-6"
      animate={{ x: (0 - currentIndex) * 100 + "%" }}
      transition={{ type: "tween", duration: 0.6 }}
    >
      {isActive && <VideoCarousel videos={videos} />}
    </motion.div>
  );
}
