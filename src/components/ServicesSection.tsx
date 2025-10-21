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
      title: "University Selection & Admissions",
      description:
        "Expert guidance in choosing the right university and program abroad. We help you navigate applications, documentation, and admissions requirements for top institutions worldwide.",
    },
    {
      id: 2,
      image: "/img/scholarship.png",
      title: "Visa Assistance & Documentation",
      description:
        "Complete support with visa applications, documentation preparation, and interview coaching. We ensure your paperwork is accurate and submitted on time for a smooth visa process.",
    },
    {
      id: 3,
      image: "/img/funding.png",
      title: "Test Preparation (IELTS, TOEFL, GRE, GMAT)",
      description:
        "Comprehensive coaching for standardized tests required for study abroad. Our expert trainers help you achieve the scores needed for your dream university admission.",
    },
    {
      id: 4,
      image: "/img/coaching.png",
      title: "Scholarship & Financial Aid",
      description:
        "Discover funding opportunities and maximize your chances of securing scholarships. We guide you through applications, essays, and interviews to reduce your study abroad costs.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white" id="services">
      <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-4">
        Our Services
      </h1>
      <h4 className="font-body text-base lg:text-lg text-center text-navy-light max-w-4xl mx-auto mb-16 leading-relaxed">
        Bridge Bound Academics provides end-to-end support for your study abroad journey—from university selection and test preparation to visa assistance and scholarship guidance.
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