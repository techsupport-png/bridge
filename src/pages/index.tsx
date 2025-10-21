import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bridge Bound Academy - Your trusted partner for global education opportunities. Expert guidance for studying abroad, scholarships, and international admissions." />
        <meta name="keywords" content="study abroad, international education, scholarships, admissions, IELTS, education consulting" />
        <title>Bridge Bound Academy - Study Abroad & International Education</title>
      </Head>

      <div className="scroll-smooth">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BlogSection />
        <FAQSection />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Home;