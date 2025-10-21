import React, { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GetStartedModal from "./GetStartedModal";

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollReveal([
    {
      selector: ".about-img-reveal",
      options: {
        origin: "left",
        distance: "80px",
        duration: 1000,
      },
    },
    {
      selector: ".about-text-reveal",
      options: {
        origin: "right",
        distance: "80px",
        duration: 1000,
      },
    },
  ]);
  return (
    <section className="py-20 px-[5%] bg-cream" id="about">
      <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-16">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <div className="about-img-reveal w-full lg:w-1/2">
          <Image
            src="/img/about-banner.png"
            alt="About Us"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="about-text-reveal w-full lg:w-1/2">
          <p className="font-body text-navy-light leading-relaxed text-justify mb-8">
            Bridge Bound Academy is an education consulting brand dedicated to helping students achieve their study abroad dreams. We guide students through every step of the international admissions process—from choosing the right country and university to preparing applications, securing visas, and offering personalized training and career advice. Our approach is comprehensive and student-centered: we take the time to understand each student’s unique goals, strengths, and aspirations, and then craft a customized plan to help them succeed globally. 
            <br /><br />
            At Bridge Bound, we believe that education is not just about academics, but also about exposure, growth, and building a brighter future. Our experienced team provides ongoing support, expert guidance, and up-to-date information on universities, scholarships, and career opportunities worldwide. We are committed to empowering students with the knowledge, confidence, and resources they need to thrive—no matter where their journey takes them.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block py-3 px-8 text-base font-bold text-white bg-orange border-2 border-orange rounded-lg hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default AboutSection;