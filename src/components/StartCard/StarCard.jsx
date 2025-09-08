// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function StarCard({ star, index, triggerAnim, handleReadMore, isRead, isMobile }) {
  const getCardVariants = (index) => {
    if (isMobile) {
      const directions = ["-100vw", "100vw", "-100vw"];
      return { hidden: { x: directions[index % 3], opacity: 0 }, visible: { x: 0, opacity: 1 } };
    } else {
      const directions = ["-100vh", "100vh", "-100vh"];
      return { hidden: { y: directions[index % 3], opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      className="relative bg-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:scale-[1.03]"
      variants={getCardVariants(index)}
      initial="hidden"
      animate={triggerAnim ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
        <img src={star.image} alt={star.name} className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-white">{star.name}</h2>
      <p className="text-gray-300 text-center mb-4">{star.shortDesc}</p>
      <button
        onClick={() => handleReadMore(star)}
        style={{ padding: "0.75rem 1.5rem" }}
        className="border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
      >
        Read More
      </button>
      {isRead && <CheckCircle className="absolute top-3 right-3 text-green-400 w-6 h-6" />}
    </motion.div>
  );
}
