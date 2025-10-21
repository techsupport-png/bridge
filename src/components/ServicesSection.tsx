import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  useScrollReveal([
    {
      selector: ".service-card",
      options: {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 200,
        interval: 100,
      },
    },
  ]);
  const services: Service[] = [
    {
      id: 1,
      image: "/img/research.png",
      title: "Study Abroad Admissions",
      description:
        "Personalized guidance for university and college applications worldwide. We help you choose the right country, program, and institution, and support you through every step of the admissions process.",
    },
    {
      id: 2,
      image: "/img/scholarship.png",
      title: "Scholarship & Funding Support",
      description:
        "Expert assistance with scholarship searches, applications, and essays. We connect you to funding opportunities and help you secure financial support for your studies abroad.",
    },
    {
      id: 3,
      image: "/img/funding.png",
      title: "Research & Academic Support",
      description:
        "Comprehensive research help, from project proposals to data collection and tutorials. Our team ensures your academic work meets the highest standards with zero plagiarism.",
    },
    {
      id: 4,
      image: "/img/coaching.png",
      title: "Career Coaching & Mentorship",
      description:
        "One-on-one coaching to help you set and achieve your career goals. Get actionable insights, industry advice, and ongoing support from experienced mentors.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white" id="services">
      <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-4">
        Services
      </h1>
      <h4 className="font-body text-base lg:text-lg text-center text-navy-light max-w-4xl mx-auto mb-16 leading-relaxed">
        We empower students to achieve their study abroad dreams with expert admissions guidance, scholarship support, academic research help, and career coaching—tailored to your unique goals.
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div 
            className="service-card bg-cream p-8 rounded-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange"
            key={service.id}
          >
            <div className="mb-6">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={80} 
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h2 className="font-heading text-xl font-bold text-orange mb-4">
              {service.title}
            </h2>
            <p className="font-body text-navy-light leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;