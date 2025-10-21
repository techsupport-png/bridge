import React, { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  useScrollReveal([
    {
      selector: ".faq-item",
      options: {
        origin: "bottom",
        distance: "30px",
        duration: 800,
        interval: 100,
      },
    },
  ]);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What does Bridge Bound Academy do?",
      answer:
        "We help students achieve their study abroad dreams by providing personalized admissions guidance, scholarship and funding support, research and academic help, and career coaching. Our team supports you from your first inquiry to your arrival at your chosen university.",
    },
    {
      id: 2,
      question: "How do you support students with scholarships?",
      answer:
        "We help you find the best scholarships for your profile, guide you through the application process, and assist with essays and documentation. Our goal is to maximize your chances of securing financial support for your studies abroad.",
    },
    {
      id: 3,
      question: "Can you help with research and academic projects?",
      answer:
        "Absolutely! We offer research support for academic projects, proposals, and data collection, ensuring your work meets international standards. Our experts provide guidance for both undergraduate and postgraduate students.",
    },
    {
      id: 4,
      question: "Which countries can I study in with your help?",
      answer:
        "We assist students in gaining admission to top universities in the UK, USA, Canada, Australia, and many other countries. We tailor our advice to your goals and preferred destinations.",
    },
    {
      id: 5,
      question: "Do you offer funding or loan support?",
      answer:
        "Yes, we connect students to education funding and loan options, including support for tuition and living expenses. We help you explore all available resources to make your study abroad journey possible.",
    },
    {
      id: 6,
      question: "How long does the admissions process take?",
      answer:
        "The process varies by country and university, but typically takes 2-6 months. We guide you through every step, ensuring you meet all deadlines and requirements for a smooth application experience.",
    },
    {
      id: 7,
      question: "What makes Bridge Bound Academy unique?",
      answer:
        "We offer a student-centered, comprehensive approach with expert consultants, global experience, and a proven track record. Our support is tailored to your unique needs, and we’re with you every step of the way.",
    },
    {
      id: 8,
      question: "How do I get started?",
      answer:
        "Just click the 'Get Started Today' button on our website and fill out the form. Our team will reach out to you within 24 hours to discuss your goals and create a personalized plan for your success.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-[5%] bg-cream" id="faq">
      <div className="max-w-4xl mx-auto">
        <h4 className="font-body text-orange text-sm font-semibold tracking-wider text-center mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-4">
          Got Questions? We Have Answers
        </h1>
        <p className="font-body text-center text-navy-light mb-12 leading-relaxed">
          Find answers to common questions about our services, admissions, and support
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-orange"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <h3 className="font-heading text-lg font-semibold text-navy pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl text-orange transform transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="font-body px-6 pb-6 text-navy-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-navy-light mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 text-base font-bold text-white bg-orange border-2 border-orange rounded-lg hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
