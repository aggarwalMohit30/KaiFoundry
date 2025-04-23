"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <section className="font-inter pt-20 relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 bg-[#FFFFFF]"> 
      {/* Left Content */}
      <div className="text-center md:text-left max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[62px] font-bold text-gray-900 leading-tight" 
        >
          Kai Foundry’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA83FF] to-[#EA83FF]">Filecoin </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#BA24D5]">Wallet </span>   for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA83FF] to-[#BA24D5]">KaiOS</span> device
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg mt-4" 
        >
          It is specially designed to facilitate the storage, sending, and receiving of Filecoin (FIL) on devices running the KaiOS operating system.
        </motion.p>

        {/* Features */}
        <div className="flex justify-center items-center mx-auto mt-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white pt-2 bg-gradient-to-r from-purple-100 to-white px-4 md:px-10 py-4 rounded-lg" // Adjusted grid for mobile
          >
            {/* Feature 1 */}
            <div className="text-[#808080] text-center border-b md:border-b-0 md:border-r border-white pr-4 text-[22px] mt-2 ">
              Secure <br /> storage
            </div>
            {/* Feature 2 */}
            <div className="text-[#808080]  text-center border-b md:border-b-0 md:border-r border-white pr-4 text-[22px] ">
              Send and receive FIL tokens
            </div>
            {/* Feature 3 */}
            <div className="text-[#808080]  text-center text-[22px] ">
              Recovery <br /> phrase <br /> protection
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-10 md:mt-0"
      >
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#414141] to-[#414141] opacity-20 blur-3xl w-full h-full rounded-full"></div>

        {/* GIF Background */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
  <Image
    src="/assets/HowWeHelp/bg.gif" 
    alt="Background GIF"
    layout="fill"
    objectFit="cover"
            className="opacity-20 scale-[3.9]"
            draggable="false"// Increased size and reduced opacity
  />
</div>

        {/* Phone Image */}
        <Image
          src="/mob.png" // Replace with your actual image path
          alt="KaiOS Phone"
          width={550} // Adjusted width for mobile
          height={550} // Adjusted height for mobile
          className="relative z-10" // Ensure the phone image is above the GIF
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection2;