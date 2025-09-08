// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function StarModal({ star, onClose }) {
  return (
    <AnimatePresence>
      {star && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black rounded-xl max-w-lg w-full p-6 flex flex-col items-center shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={star.image} alt={star.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-white">{star.name}</h2>
            <p className="text-gray-300 text-center mb-4">{star.longDesc}</p>
            <button
              onClick={onClose}
              style={{ padding: "0.75rem 1.5rem" }}
              className="border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
