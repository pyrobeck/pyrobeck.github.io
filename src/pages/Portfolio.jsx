import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import firstpic from "../assets/artwork/viomgrealsigned.png";
import anotherpic from "../assets/artwork/Viandvanderdrawinined.png";
import thirdpic from "../assets/artwork/morevibabysigned.png";
import fourthpic from "../assets/artwork/istheretime.png";
import fifthpic from "../assets/artwork/kitchenorange.0004.png";
import sixthpic from "../assets/artwork/BeanDrawing1.jpg";
import seventhpic from "../assets/artwork/helmwithfriends.jpg";
import eighthpic from "../assets/artwork/kingbaby_quality.png";
import ninthpic from "../assets/artwork/IMG_20200213_191915_optimized.jpg";
import tenthpic from "../assets/artwork/20181214_210453.jpg";

// volunteer work
import eleventhpic from "../assets/artwork/playbillcovermeangirls_final.png";
import thirteenthpic from "../assets/artwork/Colour Escape the Simulation Logo - white text.png";
import fourteenthpic from "../assets/artwork/Escape the Simulation Logo with Team Logos White with Name Bar.png";

export default function Portfolio() {
  const personalWork = [
    {
      src: firstpic,
      title: "Electric Violet",
      description: "Digital drawing of character Vi from the show Arcane.",
    },
    {
      src: anotherpic,
      title: "What have they done to us",
      description: "Stylized drawing inspired by Arcane.",
    },
    {
      src: thirdpic,
      title: "Vi Study",
    },
    {
      src: fourthpic,
      title: "Is There Still Time",
    },
    {
      src: fifthpic,
      title: "Factory Kitchen - 3D Render",
      description: "A 3D render of a kitchen in warm lighting.",
    },
    {
      src: sixthpic,
      title: "Bean",
    },
    {
      src: seventhpic,
      title: "Helm with Friends",
    },
    {
      src: eighthpic,
      title: "King",
      description: "Fan art inspired by the show The Owl House.",
    },
    {
      src: ninthpic,
      title: "De Stijl?",
    },
    {
      src: tenthpic,
      title: "Beauty in the Eye",
      description: "Painting from an art battle.",
    },
  ];

  const groupWork = [
    {
      src: eleventhpic,
      title: "Mean Girls Playbill Cover",
      description: "Designed the official playbill for a theatre production.",
    },
    {
      src: thirteenthpic,
      title: "Escape the Simulation Logo",
      description: "Created logo for Carleton University EngFrosh.",
    },
    {
      src: fourteenthpic,
      title: "Team Logo Collaboration",
      description: "Created main logo and worked with teams to create individual logos for Carleton University EngFrosh.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % activeGallery.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") {
        setSelectedIndex(null);
        setActiveGallery(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, activeGallery]);

  const openModal = (gallery, index) => {
    setActiveGallery(gallery);
    setSelectedIndex(index);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-24 overflow-hidden">
      {/* PERSONAL WORK SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mb-32"
      >
        <h1
          className="font-[Playfair_Display] font-bold text-center leading-[0.9] mb-16
                     text-[4rem] sm:text-[6rem] md:text-[8rem]
                     bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
        >
          Personal Work
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
          {personalWork.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(personalWork, i)}
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm font-medium text-white opacity-90">{art.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-300 text-center mt-12 max-w-2xl mx-auto">
          A selection of my personal drawings and 3D creations.
        </p>
      </motion.section>

      {/* VOLUNTEER WORK SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl"
      >
        <h1
          className="font-[Playfair_Display] font-bold text-center leading-[0.9] mb-16
                     text-[4rem] sm:text-[6rem] md:text-[8rem]
                     bg-linear-to-r from-fuchsia-500 via-pink-500 to-red-400 bg-clip-text text-transparent"
        >
          Volunteer Work
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
          {groupWork.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(groupWork, i)}
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm font-medium text-white opacity-90">{art.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-300 text-center mt-12 max-w-2xl mx-auto">
          Some work I have done for various different groups.
        </p>

        <br />
        <br />
        <p className="text-purple-400 text-center mt-12 max-w-2xl mx-auto">
          🕸️ Updated frequently! 🕸️
        </p>
      </motion.section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50 p-6"
            onClick={() => {
              setSelectedIndex(null);
              setActiveGallery(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={selectedIndex}
              src={activeGallery[selectedIndex].src}
              alt={activeGallery[selectedIndex].title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center max-w-2xl"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">
                {activeGallery[selectedIndex].title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                {activeGallery[selectedIndex].description}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev(e);
              }}
              className="absolute left-8 text-white text-5xl font-bold hover:text-purple-400 select-none"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext(e);
              }}
              className="absolute right-8 text-white text-5xl font-bold hover:text-purple-400 select-none"
            >
              ›
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
                setActiveGallery(null);
              }}
              className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-purple-400"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
