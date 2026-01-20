import { motion } from "framer-motion";
import groupcapstonepic from "../assets/artwork/IMG_4158.jpg";
import anotherpic from "../assets/artwork/DeckOfSecrets_Logo_White.png";
import thirdpic from "../assets/artwork/IMG_1138.JPG";

export default function Games() {
  const images = [groupcapstonepic, anotherpic, thirdpic];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-24 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-[Playfair_Display] font-bold text-center leading-[0.9] mb-16
                   text-[4rem] sm:text-[6rem] md:text-[8rem]
                   bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
      >
        Games
      </motion.h1>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={src}
              alt={`game-${i}`}
              className="w-full h-[350px] object-cover transform transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity"></div>
          </motion.div>
        ))}
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 space-y-6"
      >
        <p className="text-purple-200 text-lg max-w-xl mx-auto">
          You can check out the capstone VR project I worked on here:
        </p>
        <a
          href="https://codenoirstudios.wixsite.com/deckofsecrets/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-400 hover:text-purple-300 transition-colors"
        >
          https://codenoirstudios.wixsite.com/deckofsecrets/
        </a>

        <div className="mt-12">
          <p className="text-purple-200 text-lg">More games I worked on:</p>
          <a
            href="https://pyrobeck.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-400 hover:text-purple-300 transition-colors"
          >
            itch.io
          </a>
        </div>
      </motion.div>
    </main>
  );
}
