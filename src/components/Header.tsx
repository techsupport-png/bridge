import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({
    studyAbroad: false,
    studentServices: false,
    testPrep: false,
    careerCounseling: false,
    visaGuidance: false,
    accommodationSupport: false,
    findCourse: false,
    destination: false,
  });

  // Desktop hover state for reliable dropdowns on large screens
  const [hoveredDropdowns, setHoveredDropdowns] = useState<{ [key: string]: boolean }>({
    studyAbroad: false,
    studentServices: false,
    findCourse: false,
    destination: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdowns({
      studyAbroad: false,
      studentServices: false,
      testPrep: false,
      careerCounseling: false,
      visaGuidance: false,
      accommodationSupport: false,
      findCourse: false,
      destination: false,
    });
    setHoveredDropdowns({
      studyAbroad: false,
      studentServices: false,
      findCourse: false,
      destination: false,
    });
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleHover = (key: string, open: boolean) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setHoveredDropdowns((prev) => ({ ...prev, [key]: open }));
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-cream shadow-lg">
      <nav className="flex items-center justify-between px-[5%] py-2">
        <div className="w-[200px]">
          <Link href="/" className="flex items-center">
            <Image 
              src="/img/Original_Logo.svg" 
              alt="Bridge Bound Academy Logo" 
              width={180} 
              height={60}
              className="w-auto h-[60px]"
            />
          </Link>
        </div>

        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } fixed lg:relative lg:right-0 flex flex-col lg:flex-row top-[76px] lg:top-0 h-[calc(100vh-76px)] lg:h-auto w-full lg:w-auto transition-all duration-500 bg-cream lg:bg-transparent overflow-y-auto lg:overflow-visible shadow-md lg:shadow-none z-40`}
        >
          {/* Study Abroad Dropdown */}
          <div
            className="relative group border-b lg:border-0 border-navy/10"
            onMouseEnter={() => handleHover("studyAbroad", true)}
            onMouseLeave={() => handleHover("studyAbroad", false)}
          >
            <button 
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  toggleDropdown("studyAbroad");
                }
              }}
              className="w-full lg:w-auto py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors lg:mt-0 flex items-center justify-between lg:justify-start gap-2 focus:outline-none"
            >
              <span>Study Abroad</span>
              <ChevronDown className={`w-4 h-4 lg:hidden transition-transform ${openDropdowns.studyAbroad ? "rotate-180" : ""}`} />
              <ChevronDown className="hidden lg:block w-4 h-4" />
            </button>
            
            {/* Mobile Accordion */}
            <div className={`lg:hidden bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.studyAbroad ? "max-h-[500px]" : "max-h-0"}`}>
              <Link href="/study-abroad/undergraduate" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">Undergraduate</Link>
              <Link href="/study-abroad/postgraduate" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">Postgraduate</Link>
              <Link href="/study-abroad/short-courses" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">Short Courses</Link>
            </div>
            
            {/* Desktop Dropdown */}
            <div
              className={`hidden absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] ${
                hoveredDropdowns.studyAbroad ? "lg:block" : "lg:hidden"
              }`}
            >
              <Link href="/study-abroad/undergraduate" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Undergraduate</Link>
              <Link href="/study-abroad/postgraduate" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Postgraduate</Link>
              <Link href="/study-abroad/short-courses" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Short Courses</Link>
            </div>
          </div>

          {/* Student Services Dropdown (Multi-level, Nested) */}
          <div
            className="relative group border-b lg:border-0 border-navy/10"
            onMouseEnter={() => handleHover("studentServices", true)}
            onMouseLeave={() => handleHover("studentServices", false)}
          >
            <button 
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  toggleDropdown("studentServices");
                }
              }}
              className="w-full lg:w-auto py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors flex items-center justify-between lg:justify-start gap-2 focus:outline-none"
            >
              <span>Student Services</span>
              <ChevronDown className={`w-4 h-4 lg:hidden transition-transform ${openDropdowns.studentServices ? "rotate-180" : ""}`} />
              <ChevronDown className="hidden lg:block w-4 h-4" />
            </button>
            
            {/* Mobile Accordion */}
            <div className={`lg:hidden bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.studentServices ? "max-h-[1000px]" : "max-h-0"}`}>
              {/* Test Prep */}
              <div className="border-b border-navy/5">
                <button 
                  onClick={() => toggleDropdown("testPrep")}
                  className="w-full px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors flex items-center justify-between font-semibold text-left"
                >
                  <span>Test Prep</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdowns.testPrep ? "rotate-180" : ""}`} />
                </button>
                <div className={`bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.testPrep ? "max-h-[300px]" : "max-h-0"}`}>
                  <Link href="/services/ielts" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">IELTS Prep</Link>
                  <Link href="/services/toefl" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">TOEFL Prep</Link>
                  <Link href="/services/gre" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">GRE Prep</Link>
                  <Link href="/services/gmat" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">GMAT Prep</Link>
                </div>
              </div>

              {/* Career Counseling */}
              <div className="border-b border-navy/5">
                <button 
                  onClick={() => toggleDropdown("careerCounseling")}
                  className="w-full px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors flex items-center justify-between font-semibold text-left"
                >
                  <span>Career Counseling</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdowns.careerCounseling ? "rotate-180" : ""}`} />
                </button>
                <div className={`bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.careerCounseling ? "max-h-[200px]" : "max-h-0"}`}>
                  <Link href="/services/profile-assessment" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Profile Assessment</Link>
                  <Link href="/services/course-selection" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Course Selection</Link>
                  <Link href="/services/university-shortlisting" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">University Shortlisting</Link>
                </div>
              </div>

              {/* Visa Guidance */}
              <div className="border-b border-navy/5">
                <button 
                  onClick={() => toggleDropdown("visaGuidance")}
                  className="w-full px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors flex items-center justify-between font-semibold text-left"
                >
                  <span>Visa Guidance</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdowns.visaGuidance ? "rotate-180" : ""}`} />
                </button>
                <div className={`bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.visaGuidance ? "max-h-[200px]" : "max-h-0"}`}>
                  <Link href="/services/student-visa" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Student Visa</Link>
                  <Link href="/services/visa-interview-prep" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Visa Interview Prep</Link>
                  <Link href="/services/documentation" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Documentation Support</Link>
                </div>
              </div>

              {/* Accommodation Support */}
              <div>
                <button 
                  onClick={() => toggleDropdown("accommodationSupport")}
                  className="w-full px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors flex items-center justify-between font-semibold text-left"
                >
                  <span>Accommodation</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdowns.accommodationSupport ? "rotate-180" : ""}`} />
                </button>
                <div className={`bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.accommodationSupport ? "max-h-[150px]" : "max-h-0"}`}>
                  <Link href="/services/on-campus-housing" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">On-Campus Housing</Link>
                  <Link href="/services/off-campus-housing" onClick={closeMenu} className="block px-12 py-2 text-sm text-navy hover:bg-orange/10 hover:text-orange transition-colors">Off-Campus Housing</Link>
                </div>
              </div>
            </div>
            
            {/* Desktop Dropdown - keeping existing structure */}
            <div
              className={`hidden absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[240px] ${
                hoveredDropdowns.studentServices ? "lg:block" : "lg:hidden"
              }`}
            >
              {/* Test Preparations with submenu */}
              <div className="relative group/testprep">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  Test Preparations <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/testprep:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] text-left">
                  <Link href="/tests/all" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">All Tests</Link>
                  <Link href="/tests/toefl" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">TOEFL</Link>
                  <Link href="/tests/ielts" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">IELTS</Link>
                  <Link href="/tests/gmat" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">GMAT</Link>
                  <Link href="/tests/gre" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">GRE</Link>
                  <Link href="/tests/sat" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">SAT</Link>
                  <Link href="/tests/cael" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">CAEL</Link>
                  <Link href="/tests/celpip" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">CELPIP</Link>
                  <Link href="/tests/act" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">ACT</Link>
                  <Link href="/tests/pte" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">PTE</Link>
                  <Link href="/tests/duolingo" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">DUOLINGO</Link>
                </div>
              </div>

              {/* Admission Services */}
              <div className="relative group/admission">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  Admission Services <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/admission:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] text-left">
                  <Link href="/services/career-counseling" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Career Counseling</Link>
                  <Link href="/services/admission-guidance" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Admission Guidance</Link>
                  <Link href="/services/application-tracking" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Application Tracking</Link>
                  <Link href="/services/university-selection" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">University Selection (AI-powered)</Link>
                </div>
              </div>

              {/* Financial Planning */}
              <div className="relative group/finance">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  Financial Planning <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/finance:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[220px] text-left">
                  <Link href="/services/scholarships-grants" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Scholarships & Grants</Link>
                  <Link href="/services/education-loans" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Education Loans</Link>
                  <Link href="/services/income-share" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Income-Share Agreements</Link>
                  <Link href="/services/cost-calculator" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Cost-of-Living Calculator</Link>
                </div>
              </div>

              {/* Pre-Departure Prep */}
              <div className="relative group/prep">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  Pre-Departure Prep <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/prep:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[220px] text-left">
                  <Link href="/services/language-courses" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Language Courses</Link>
                  <Link href="/services/visa-assistance" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Visa Assistance</Link>
                  <Link href="/services/travel-forex" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Travel & Forex</Link>
                  <Link href="/services/cultural-orientation" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Cultural Orientation</Link>
                </div>
              </div>

              {/* Post-Arrival Support */}
              <div className="relative group/postarrival">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  Post-Arrival Support <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/postarrival:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] text-left">
                  <Link href="/services/mental-health" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Mental Health Support</Link>
                  <Link href="/services/career-placement" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Career Placement</Link>
                  <Link href="/services/alumni-network" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Alumni Network</Link>
                </div>
              </div>

              {/* Virtual Campus Tours */}
              <Link href="/services/virtual-campus-tours" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Virtual Campus Tours</Link>
            </div>
          </div>

          {/* IELTS */}
          <Link
            href="/ielts"
            onClick={closeMenu}
            className="py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors border-b lg:border-0 border-navy/10 block"
          >
            IELTS
          </Link>

          {/* Colleges */}
          <Link
            href="/colleges"
            onClick={closeMenu}
            className="py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors border-b lg:border-0 border-navy/10 block"
          >
            Colleges
          </Link>

          {/* Find a Course Dropdown (Multi-level, Nested) */}
          <div
            className="relative group border-b lg:border-0 border-navy/10"
            onMouseEnter={() => handleHover("findCourse", true)}
            onMouseLeave={() => handleHover("findCourse", false)}
          >
            <button 
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  toggleDropdown("findCourse");
                }
              }}
              className="w-full lg:w-auto py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors flex items-center justify-between lg:justify-start gap-2 focus:outline-none"
            >
              <span>Find a Course</span>
              <ChevronDown className={`w-4 h-4 lg:hidden transition-transform ${openDropdowns.findCourse ? "rotate-180" : ""}`} />
              <ChevronDown className="hidden lg:block w-4 h-4" />
            </button>
            
            {/* Mobile Accordion */}
            <div className={`lg:hidden bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.findCourse ? "max-h-[500px]" : "max-h-0"}`}>
              <Link href="/courses/subjects" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Subject</Link>
              <Link href="/courses/degrees" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Degree Level</Link>
              <Link href="/courses/countries" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Country</Link>
              <Link href="/courses/duration" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Duration</Link>
              <Link href="/courses/language" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Language</Link>
              <Link href="/courses/budget" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">By Budget</Link>
            </div>
            
            {/* Desktop Dropdown */}
            <div
              className={`hidden absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[240px] ${
                hoveredDropdowns.findCourse ? "lg:block" : "lg:hidden"
              }`}
            >
              {/* By Subject */}
              <Link href="/courses/subjects" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">By Subject</Link>

              {/* By Degree Level */}
              <div className="relative group/degree">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  By Degree Level <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/degree:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] text-left">
                  <Link href="/courses/bachelors" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Bachelor&apos;s</Link>
                  <Link href="/courses/masters" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Master&apos;s</Link>
                  <Link href="/courses/phd" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">PhD</Link>
                  <Link href="/courses/diploma-certificate" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Diploma/Certificate</Link>
                  <Link href="/courses/foundation" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Foundation Programs</Link>
                </div>
              </div>

              {/* By Country */}
              <div className="relative group/country">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  By Country <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/country:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] text-left">
                  <Link href="/courses/germany" className="block px-6 py-3 font-bold text-orange bg-orange/10 hover:bg-orange hover:text-white transition-colors">🇩🇪 Germany</Link>
                  <Link href="/courses/usa" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇺🇸 USA</Link>
                  <Link href="/courses/uk" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇬🇧 UK</Link>
                  <Link href="/courses/canada" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇨🇦 Canada</Link>
                  <Link href="/courses/australia" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇦🇺 Australia</Link>
                  <Link href="/courses/all-countries" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">View All Countries</Link>
                </div>
              </div>

              {/* By Duration */}
              <div className="relative group/duration">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  By Duration <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/duration:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] text-left">
                  <Link href="/courses/1-year" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">1 Year</Link>
                  <Link href="/courses/2-years" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">2 Years</Link>
                  <Link href="/courses/3-4-years" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">3-4 Years</Link>
                </div>
              </div>

              {/* By Language */}
              <div className="relative group/language">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  By Language <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/language:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] text-left">
                  <Link href="/courses/english-taught" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">English-taught</Link>
                  <Link href="/courses/german-taught" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">German-taught</Link>
                  <Link href="/courses/other-languages" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Other Languages</Link>
                </div>
              </div>

              {/* By Budget */}
              <div className="relative group/budget">
                <button className="w-full flex items-center justify-between px-6 py-3 hover:bg-orange hover:text-white transition-colors font-body text-left">
                  By Budget <span className="fa fa-caret-right ml-2"></span>
                </button>
                <div className="hidden group-hover/budget:block absolute left-full top-0 bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] text-left">
                  <Link href="/courses/free-low-tuition" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Free/Low Tuition</Link>
                  <Link href="/courses/under-10k" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Under $10,000/year</Link>
                  <Link href="/courses/10k-25k" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">$10,000-$25,000/year</Link>
                  <Link href="/courses/above-25k" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Above $25,000/year</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Dropdown */}
          <div
            className="relative group border-b lg:border-0 border-navy/10"
            onMouseEnter={() => handleHover("destination", true)}
            onMouseLeave={() => handleHover("destination", false)}
          >
            <button 
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  toggleDropdown("destination");
                }
              }}
              className="w-full lg:w-auto py-4 lg:py-0 px-6 lg:px-4 font-body text-sm lg:text-base font-bold text-navy hover:text-orange transition-colors flex items-center justify-between lg:justify-start gap-2 focus:outline-none"
            >
              <span>Destination</span>
              <ChevronDown className={`w-4 h-4 lg:hidden transition-transform ${openDropdowns.destination ? "rotate-180" : ""}`} />
              <ChevronDown className="hidden lg:block w-4 h-4" />
            </button>
            
            {/* Mobile Accordion */}
            <div className={`lg:hidden bg-white/50 overflow-hidden transition-all duration-300 ${openDropdowns.destination ? "max-h-[600px]" : "max-h-0"}`}>
              <Link href="/destinations/germany" onClick={closeMenu} className="block px-8 py-3 text-navy font-bold bg-orange/10 hover:bg-orange/20 hover:text-orange transition-colors">🇩🇪 Germany</Link>
              <Link href="/destinations/usa" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇺🇸 USA</Link>
              <Link href="/destinations/uk" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇬🇧 UK</Link>
              <Link href="/destinations/canada" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇨🇦 Canada</Link>
              <Link href="/destinations/australia" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇦🇺 Australia</Link>
              <Link href="/destinations/ireland" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇮🇪 Ireland</Link>
              <Link href="/destinations/new-zealand" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇳🇿 New Zealand</Link>
              <Link href="/destinations/singapore" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">🇸🇬 Singapore</Link>
              <Link href="/colleges" onClick={closeMenu} className="block px-8 py-3 text-navy hover:bg-orange/10 hover:text-orange transition-colors">View All Destinations</Link>
            </div>
            
            {/* Desktop Dropdown */}
            <div
              className={`hidden absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] ${
                hoveredDropdowns.destination ? "lg:block" : "lg:hidden"
              }`}
            >
              <Link href="/destinations/germany" className="block px-6 py-3 font-bold text-orange bg-orange/10 hover:bg-orange hover:text-white transition-colors">🇩🇪 Germany</Link>
              <Link href="/destinations/usa" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇺🇸 USA</Link>
              <Link href="/destinations/uk" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇬🇧 UK</Link>
              <Link href="/destinations/canada" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇨🇦 Canada</Link>
              <Link href="/destinations/australia" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇦🇺 Australia</Link>
              <Link href="/destinations/ireland" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇮🇪 Ireland</Link>
              <Link href="/destinations/new-zealand" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇳🇿 New Zealand</Link>
              <Link href="/destinations/singapore" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇸🇬 Singapore</Link>
              <Link href="/colleges" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">View All Destinations</Link>
            </div>
          </div>

          {/* Contact (mobile) */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="lg:hidden py-4 px-6 font-body text-sm font-bold text-navy hover:text-orange transition-colors block"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <SignedOut>
            <Link
              href="/sign-in"
              className="py-3 px-6 text-base font-bold text-white bg-orange border-2 border-orange rounded-full hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
          </SignedIn>
        </div>

        <div
          className={`lg:hidden h-10 w-12 relative cursor-pointer p-4 z-50 ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isMenuOpen ? "rotate-[-315deg] !top-1/2" : "!top-1/4"
            }`}
          ></div>
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-[71%] h-1 bg-[#231F41] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isMenuOpen ? "rotate-[-225deg] !top-1/2" : "!top-3/4"
            }`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;