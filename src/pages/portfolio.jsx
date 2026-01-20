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
import frontmusicalpic from "../assets/artwork/MusicalDesigns/playbillcovermeangirls_final.png";
import beamgirlsticketposter from "../assets/artwork/MusicalDesigns/Beam_Girls_Ticket_Poster_-_NEW_1.png";
import costumehiringpost from "../assets/artwork/MusicalDesigns/Costume Hiring Post - Atoms Family.png"

import frontengfroshpic from "../assets/artwork/Escape the Simulation Logo with Team Logos White with Name Bar.png";
import whiteengfroshlogo from "../assets/artwork/Colour Escape the Simulation Logo - white text.png";
import CGullslogo from "../assets/artwork/EngFrosh2023/C-Gulls Logo colour.png"
import CyberSurferslogo from "../assets/artwork/EngFrosh2023/Cyber Surfers Logo colour.png"
import DataMinerslogo from "../assets/artwork/EngFrosh2023/Data Miners Logo colour.png"
import DiodeDogslogo from "../assets/artwork/EngFrosh2023/Diode Dogs Logo colour.png"
import FirewallFlamingoslogo from "../assets/artwork/EngFrosh2023/Firewall Flamingos Logo colour.png"
import LANSharkslogo from "../assets/artwork/EngFrosh2023/LAN Sharks Logo colour.png"
import MicroShipslogo from "../assets/artwork/EngFrosh2023/Micro Ships Logo colour.png"
import ResistorRangerslogo from "../assets/artwork/EngFrosh2023/Resistor Rangers Logo colour.png"
import ThermalPastalogo from "../assets/artwork/EngFrosh2023/Thermal Pasta Logo colour.png"
import WidgetWizardslogo from "../assets/artwork/EngFrosh2023/Widget Wizards Logo colour.png"

import frontieeepatch from "../assets/artwork/IEEECarleton/ieeeduntonlogopatch3dversionSKETCH4.png"
import ieeedirectorhiring from "../assets/artwork/IEEECarleton/1.png"
import ieeebilliardsnight from "../assets/artwork/IEEECarleton/I Triple billiards night.png"
import ieeenonamepatch from "../assets/artwork/IEEECarleton/IEEEEEE_20251011_232046_0000.png"
import ieeeslam from "../assets/artwork/IEEECarleton/SLAM_sign_ups_post.png"



const musicalGallery = [
  {
    src: frontmusicalpic,
    title: "Mean Girls Playbill Cover",
    description:
      "Designed the official playbill cover for the school production of Mean Girls.",
  },
  {
    src: beamgirlsticketposter,
    title: "Beam Girls Ticket Poster",
    description:
      "Poster to advertise ticket sales for the musical.",
  },
  {
    src: costumehiringpost,
    title: "Costume Hiring Post",
    description:
      "Social media graphic to recruit costume designers for the show.",
  },
];

const engFroshGallery = [
  {
    src: frontengfroshpic,
    title: "Escape the Simulation – Full Logo Set",
    description:
      "Main EngFrosh logo with all team logos and name bar.",
  },
  {
    src: whiteengfroshlogo,
    title: "Escape the Simulation – White Logo",
    description:
      "Main EngFrosh logo in white for dark backgrounds.",
  },
  { src: CGullslogo, title: "C-Gulls", description: "EngFrosh team logo." },
  { src: CyberSurferslogo, title: "Cyber Surfers", description: "EngFrosh team logo." },
  { src: DataMinerslogo, title: "Data Miners", description: "EngFrosh team logo." },
  { src: DiodeDogslogo, title: "Diode Dogs", description: "EngFrosh team logo." },
  { src: FirewallFlamingoslogo, title: "Firewall Flamingos", description: "EngFrosh team logo." },
  { src: LANSharkslogo, title: "LAN Sharks", description: "EngFrosh team logo." },
  { src: MicroShipslogo, title: "Micro Ships", description: "EngFrosh team logo." },
  { src: ResistorRangerslogo, title: "Resistor Rangers", description: "EngFrosh team logo." },
  { src: ThermalPastalogo, title: "Thermal Pasta", description: "EngFrosh team logo." },
  { src: WidgetWizardslogo, title: "Widget Wizards", description: "EngFrosh team logo." },
];

const ieeeGallery = [
  {
    src: frontieeepatch,
    title: "IEEE Dunton Patch Concept",
    description:
      "Patch concept for IEEE Carleton featuring Dunton Tower.",
  },
  {
    src: ieeedirectorhiring,
    title: "Director Hiring Post",
    description:
      "Graphic to advertise director hiring for IEEE Carleton.",
  },
  {
    src: ieeebilliardsnight,
    title: "Billiards Night Poster",
    description:
      "Promotional poster for an IEEE Carleton billiards social.",
  },
  {
    src: ieeenonamepatch,
    title: "IEEE Patch Variant",
    description:
      "Alternative patch design concept.",
  },
  {
    src: ieeeslam,
    title: "SLAM Sign-Ups Post",
    description:
      "Event sign-up graphic for the SLAM event.",
  },
];



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
      cover: frontmusicalpic,
      title: "Musical Designs",
      description:
        "Playbill cover and event graphics for school musical productions.",
      gallery: musicalGallery,
    },
    {
      cover: frontengfroshpic,
      title: "EngFrosh 2023 Logos",
      description:
        "Main EngFrosh logo and 10 team logos used on shirts and merchandise for over 1300 participants.",
      gallery: engFroshGallery,
    },
    {
      cover: frontieeepatch,
      title: "IEEE Carleton Publications",
      description:
        "Patch concepts and social media graphics for IEEE Carleton events and announcements.",
      gallery: ieeeGallery,
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
          className="font-mono font-bold text-center leading-[0.9] mb-16
                     text-[4rem] sm:text-[6rem] md:text-[8rem]"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          PERSONAL WORK
        </h1>
        <p className="text-gray-300 text-center mt-12 max-w-2xl mx-auto">
          A selection of my personal drawings and 3D creations.
        </p>
        <br />
        <br />
        <br />
        <br />

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
          className="font-mono font-bold text-center leading-[0.9] mb-16
                     text-[4rem] sm:text-[6rem] md:text-[8rem] text-white"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          VOLUNTEER WORK
        </h1>
        <p className="text-gray-300 text-center mt-12 max-w-2xl mx-auto">
          Click on the image to see the other work I have done for each group!
        </p>
        <br />
        <br />
        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
          {groupWork.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(project.gallery, 0)} // 👈 open that folder’s gallery
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-sm font-medium text-white opacity-90">
                  {project.title}
                </p>
              </div>
    </motion.div>
  ))}
</div>




        
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
