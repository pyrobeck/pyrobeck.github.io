import { motion } from "framer-motion";
import artvid from "../assets/artwork/kitchencurtainwind.mp4";

export default function Contact() {
  return (
    <main className="relative flex flex-col md:flex-row min-h-screen overflow-hidden bg-black text-white">
      <section className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: '"Space Mono", monospace' }}
          className="font-mono font-bold leading-[0.9] tracking-tight mb-12 text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] text-white"
        >
          CONTACT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-8 mt-6"
        >

          <p className="text-base sm:text-lg font-semibold text-purple-100">
            Email:{" "}
            <a
              href="mailto:beckbraun@cmail.carleton.ca"
              className="underline hover:text-purple-300 transition-colors"
            >
              beckbraun@cmail.carleton.ca
            </a>
          </p>

          <p className="text-base sm:text-lg font-semibold text-purple-100">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/beckbraun/"
              className="underline hover:text-purple-300 transition-colors"
            >
              https://www.linkedin.com/in/beckbraun/
            </a>
          </p>

          <p className="text-base sm:text-lg font-semibold text-purple-100">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/pyrobeckdraws"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-300 transition-colors"
            >
              @pyrobeckdraws
            </a>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-300 text-sm sm:text-base max-w-md"
        >
          Please feel free to reach out!
        </motion.p>
      </section>

      <section className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
        <video
          src={artvid}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-l from-black/70 to-transparent" />
      </section>
    </main>
  );
}
