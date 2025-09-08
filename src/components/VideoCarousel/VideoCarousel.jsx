import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function VideoCarousel({ videos }) {
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div className="relative w-full aspect-video flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={videoIndex}
            src={`https://www.youtube.com/embed/${videos[videoIndex].id}`}
            title={videos[videoIndex].name}
            className="w-full h-full rounded-2xl shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        <button
          onClick={prevVideo}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            flex items-center justify-center
            bg-black/50 text-white
            border border-white/30
            p-4 rounded-full
            shadow-lg
            backdrop-blur-sm
            hover:bg-white/20
            hover:scale-110
            transition-all duration-300 ease-in-out
          "
        >
          <ArrowLeft size={28} />
        </button>

        <button
          onClick={nextVideo}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            flex items-center justify-center
            bg-black/50 text-white
            border border-white/30
            p-4 rounded-full
            shadow-lg
            backdrop-blur-sm
            hover:bg-white/20
            hover:scale-110
            transition-all duration-300 ease-in-out
          "
        >
          <ArrowRight size={28} />
        </button>
      </div>

      <motion.p
        key={videoIndex}
        className="mt-4 text-xl text-white/90 text-center font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        {videos[videoIndex].name}
      </motion.p>
    </div>
  );
}
