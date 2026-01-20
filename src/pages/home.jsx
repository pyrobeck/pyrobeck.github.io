import { motion } from "framer-motion";
import spiderlegovid from "../assets/artwork/spiderlegoportfolio.mp4";

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row min-h-screen overflow-hidden bg-black text-white">
      <section className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: '"Space Mono", monospace' }}
          className="font-mono font-bold leading-[0.9] tracking-tight text-center md:text-left
                     text-7xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[13rem] text-white"
        >
          BECK’S<br />PORTFOLIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-purple-100 text-base sm:text-lg font-semibold text-center md:text-left"
        >
          Email:{" "}
          <a
            href="mailto:beckbraun@cmail.carleton.ca"
            className="underline hover:text-purple-300 transition-colors"
          >
            beckbraun@cmail.carleton.ca
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-gray-300 text-center md:text-left"
        >
          <p className="text-sm sm:text-base">
            I am a dedicated artist and developer.
          </p>
          <p className="text-sm sm:text-base">
            Welcome to my art portfolio.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-sm sm:text-base">
            This website was created by me using React & Vite. Check it out on my Github linked at the bottom.  
          </p>
        </motion.div>
      </section>

      <section className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
        <video
          src={spiderlegovid}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0" />
      </section>
    </main>
  );
}
