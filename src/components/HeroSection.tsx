import React, { useState } from "react";
import Image from "next/image";
import { useTextCycle } from "@/hooks/useTextCycle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GetStartedModal from "./GetStartedModal";

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentText, opacity } = useTextCycle([
    { text: "Empowering your global education journey.", color: "#374151" },
    { text: "Personalized support for study abroad success.", color: "#374151" },
    { text: "Expert guidance from application to arrival.", color: "#374151" },
  ]);

  useScrollReveal([
    {
      selector: ".hero-content",
      options: {
        origin: "left",
        distance: "80px",
        duration: 1000,
      },
    },
    {
      selector: ".hero-image",
      options: {
        origin: "right",
        distance: "80px",
        duration: 1000,
        delay: 200,
      },
    },
  ]);

  return (
    <main 
      className="flex flex-col lg:flex-row items-center justify-between px-[5%] py-20 lg:py-32 min-h-screen bg-gradient-to-br from-cream-light to-white" 
      id="home"
    >
      <div className="hero-content w-full lg:w-1/2 mb-10 lg:mb-0">


        <p className="text-orange font-body text-sm font-semibold tracking-wider mb-4">
          WELCOME TO
        </p>
        <h1 className="font-heading text-4xl lg:text-6xl font-extrabold text-navy mb-6 leading-tight">
          Bridge Bound Academy
        </h1>

        <div className="mb-8 min-h-[80px]">
          <h3 
            className="font-body text-xl lg:text-2xl text-navy-light leading-relaxed transition-opacity duration-1000"
            style={{ opacity }}
          >
            {currentText.text}
          </h3>
        </div>

        <div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 py-4 px-8 text-base font-bold text-white bg-orange border-2 border-orange rounded-lg hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="hero-image w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image 
          src="/img/hero-banner.png" 
          alt="Hero Banner" 
          width={600} 
          height={600}
          className="max-w-full h-auto"
        />
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default HeroSection;