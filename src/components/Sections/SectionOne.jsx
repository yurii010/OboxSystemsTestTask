import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import StarCard from "../StartCard/StarCard";
import StarModal from "../StarModal/StarModal";

const stars = [
  {
    id: 1,
    name: "Sun",
    shortDesc: "The star at the center of our Solar System.",
    longDesc: "The Sun is a G-type main-sequence star (G2V) that provides energy and light, making life possible on Earth.",
    image:
      "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint",
  },
  {
    id: 2,
    name: "Sirius",
    shortDesc: "The brightest star in Earth's night sky.",
    longDesc: "Sirius, also known as the Dog Star, is a binary star system and the brightest star visible from Earth.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sirius_A_and_B_Hubble_photo.jpg/250px-Sirius_A_and_B_Hubble_photo.jpg",
  },
  {
    id: 3,
    name: "Betelgeuse",
    shortDesc: "A red supergiant star in Orion constellation.",
    longDesc: "Betelgeuse is one of the largest visible stars, a red supergiant nearing the end of its life cycle, and is expected to go supernova someday.",
    image: "https://www.shutterstock.com/image-photo/betelgeuse-star-space-red-supergiant-600nw-2402608565.jpg",
  },
];

export default function SectionOne({ currentIndex }) {
  const [selectedStar, setSelectedStar] = useState(null);
  const [readStars, setReadStars] = useState([]);
  const [triggerAnim, setTriggerAnim] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    setTriggerAnim(currentIndex === 0);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handleReadMore = (star) => {
    setSelectedStar(star);
    if (!readStars.includes(star.id)) setReadStars((prev) => [...prev, star.id]);
  };

  return (
    <motion.div
      className={`flex-shrink-0 w-full flex flex-col items-center
      ${isMobile ? "justify-start pt-6 pb-32" : "justify-center"} overflow-y-auto p-6`}
      style={{ minHeight: "100vh" }}
      animate={{ x: (0 - currentIndex) * 100 + "%" }}
      transition={{ type: "tween", duration: 0.6 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {stars.map((star, index) => (
          <StarCard
            key={star.id}
            star={star}
            index={index}
            triggerAnim={triggerAnim}
            handleReadMore={handleReadMore}
            isRead={readStars.includes(star.id)}
            isMobile={isMobile}
          />
        ))}
      </div>

      <StarModal star={selectedStar} onClose={() => setSelectedStar(null)} />
    </motion.div>
  );
}
