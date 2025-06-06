"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Game Development",
    description:
      "End-to-end game creation, from concept to launch. We craft engaging, high-quality games for various platforms."},
  {
    title: "P2E Game Development",
    description:
      "Develop play-to-earn (P2E) games that reward players with digital assets. Integrate blockchain to enable secure in-game economies"},
  {
    title: "Tap-To-Earn Game",
    description:
      "Build lightweight, addictive hyper-casual games. Designed for quick sessions with simple mechanics and high replayability."},
  {
    title: "Hyper Casual Game Development",
    description:
      "Kai Foundry specializes in Smart Contract Development, creating secure and efficient blockchain solutions tailored to your needs.",
  },
  {
    title: "Telegram Game Development",
    description:
      "Develop fun and interactive games within Telegram. Perfect for engaging users directly within the messaging app."},
  {
    title: "NFT Gaming",
    description:
      "Integrate NFTs into your game to offer unique, tradable assets. Players can truly own in-game items and collectibles."},
  {
    title: "Web3 Game Development",
    description:
      "Build decentralized Web3 games with blockchain integration. Empower players with asset ownership. transparency, and security."},
  {
    title: "Blockchain Game Development",
    description:
      "Develop blockchain-powered games with secure, decentralized mechanics. Enhance trust, player engagement, and digital economies."},
];

const FeaturesSection = () => {
  return (
    <section
      className="py-30 px-4 md:px-9 lg:px-30 bg-white relative " 
      style={{
        backgroundImage: "url('/assets/background/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" mx-auto text-center">
      
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-[#333333] mb-20 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key <span className="text-[#D444F1]">Features</span> of Gaming
        </motion.h2>

    
       
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="p-4 border-t-3 mb-6 max-w-100 mx-auto" // Set max width and center the card
                      style={{ borderColor: "#D444F1" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-left text-[#333333]">
                        {service.title}
                      </h3>
                      <p className="text-[#575656] mt-3 text-left text-sm md:text-base">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
      </div>
    </section>
  );
};

export default FeaturesSection;