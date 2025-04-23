"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (

<section className="relative flex items-center py-60 w-full overflow-hidden px-6 md:px-6 ">
  {/* Background GIF */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/background/gd_bg.gif"
      alt="Background"
      className="w-full h-full object-cover"
      width={1920}
      height={1080}
    />
  </div>

  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="absolute inset-y-0 left-0 w-1/2 bg-white/50 backdrop-blur-md z-10"
  ></motion.div>

  <div className="w-full flex justify-center md:justify-start">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-lg"
    >
      <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900">
        Game That Keep <br />
        <span className="text-[#E95DFF]">Players</span> Hooked
      </h2>
      <p className="text-gray-600 text-base md:text-lg mt-4">
        We create engaging, high-performance games that players love — seamless, fun, and built for the future of gaming
      </p>
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-lg font-medium shadow-lg transition"
        >
          Contact Us
        </motion.button>
      </Link>
    </motion.div>
  </div>
</section>


  );
};

export default HeroSection;