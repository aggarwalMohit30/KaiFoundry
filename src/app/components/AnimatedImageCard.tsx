"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    image: "/assets/img2.jpg",
    title: "Leading in Blockchain Innovation and Decentralized Solutions",
    description:
      "From innovative solutions to enterprise adoption, Kai Foundry leads the way in delivering scalable, decentralized blockchain technologies.",
  },
  {
    image: "/assets/img1.jpg",
    title: "Empowering Businesses with Next-Gen Blockchain Solutions",
    description:
      "Seamless integration of blockchain technology to drive transparency, efficiency, and trust.",
  },
  {
    image: "/assets/img3.jpg",
    title: "Revolutionizing Digital Transactions with Security and Speed",
    description:
      "Building the future of secure, decentralized finance with high-performance blockchain networks.",
  },
];

export default function AnimatedSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center sm:justify-center min-h-[85vh] sm:min-h-screen bg-white text-black p-6 md:p-10">
      <div className="relative w-full md:w-2/5 h-[40vh] md:h-[60vh] flex sm:justify-center ">
        <AnimatePresence>
          {content.map(
            (item, i) =>
              i <= index && (
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt="Blockchain"
                  className="absolute w-[90%] md:w-[85%] h-full object-cover rounded-2xl shadow-2xl"
                  initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
                  animate={{ y: 20 * i, opacity: 1, x: 20 * i }}
                  exit={{ y: -100 - 20 * i, opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )
          )}
        </AnimatePresence>
      </div>

      <div className="w-full md:w-1/2 mt-20 md:mt-0 md:pl-10 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.h2
            key={content[index].title}
            className="text-3xl md:text-5xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {content[index].title}
          </motion.h2>
          <motion.p
            key={content[index].description}
            className="mt-5 md:mt-10 text-lg text-gray-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {content[index].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
