"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse w-full items-center text-center px-6 py-16 md:text-left md:px-20 md:justify-between relative">

      {/* Background GIF Container */}
      <div className="absolute inset-y-0 right-20 z-0 w-full h-full md:w-1/3 md:h-[1000px] transform -translate-y-50 -translate-x-5"> 
      <Image
  src="/assets/HowWeHelp/bg.gif"
  alt="Background GIF"
  fill
  style={{ objectFit: "cover" }}
  className="opacity-20"
  draggable={false}
/>

      </div>

      {/* Blockchain Image */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <Image
          src="/assets/HowWeHelp/blockchain.png"
          alt="Blockchain"
          width={480}  
          height={480} 
          loading="lazy"
          className="drop-shadow-lg"
          draggable={false} 

        />
      </div>
     
      {/* Text Section */}
      <div className="w-full md:w-2/3 mt-10 md:mt-20 z-10">
        <h2 className="text-5xl md:text-7xl font-bold ">
          {/* How We Help <br /> */}
   
  <span className="text-black">Ho</span>
  <span className="text-black opacity-70">w We Help <br /></span>


          <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#E95DFF]">Businesses Grow</span> <br />
          <span className="text-black">Wi</span>
  <span className="text-black opacity-70">th</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#E95DFF] italic">Blockchain</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-lg mt-4">
          At Kai Foundry, we craft blockchain solutions tailored to your
          business needs, empowering you to innovate, secure your operations,
          and scale your growth.
        </p>
        <Link href="/ContactUs">
          <button className="mt-12 px-10 py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-lg font-medium shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowWeHelp;