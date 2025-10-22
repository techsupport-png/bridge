import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          className={`$
            isMenuOpen ? "right-0" : "-right-full"
          } fixed lg:relative lg:right-0 flex flex-col lg:flex-row top-[60px] lg:top-0 h-[420px] lg:h-auto w-full lg:w-auto transition-all duration-500 bg-navy lg:bg-transparent text-white lg:text-navy shadow-md lg:shadow-none text-center z-40`}
        >
          {/* Study Abroad Dropdown */}
          <div className="relative group">
            <button className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mt-6 lg:mt-0 flex items-center gap-1 focus:outline-none">
              Study Abroad <span className="fa fa-caret-down"></span>
            </button>
            <div className="hidden group-hover:block absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[180px] lg:text-left text-center">
              <Link href="/study-abroad/undergraduate" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Undergraduate</Link>
              <Link href="/study-abroad/postgraduate" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Postgraduate</Link>
              <Link href="/study-abroad/short-courses" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">Short Courses</Link>
            </div>
          </div>

          {/* Student Services Dropdown (Multi-level, Nested) */}
          <div className="relative group">
            <button className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mb-5 lg:mb-0 flex items-center gap-1 focus:outline-none">
              Student Services <span className="fa fa-caret-down"></span>
            </button>
            <div className="hidden group-hover:block absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[240px] lg:text-left text-center">
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

          {/* About */}
          <Link
            href="#about"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mb-5 lg:mb-0"
          >
            About
          </Link>

          {/* IELTS */}
          <Link
            href="/ielts"
            onClick={closeMenu}
            className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mb-5 lg:mb-0"
          >
            IELTS
          </Link>

          {/* Find a Course Dropdown (Multi-level, Nested) */}
          <div className="relative group">
            <button className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mb-5 lg:mb-0 flex items-center gap-1 focus:outline-none">
              Find a Course <span className="fa fa-caret-down"></span>
            </button>
            <div className="hidden group-hover:block absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[240px] lg:text-left text-center">
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
          <div className="relative group">
            <button className="py-5 lg:py-0 px-4 font-body text-sm lg:text-base font-bold hover:text-orange transition-colors mb-5 lg:mb-0 flex items-center gap-1 focus:outline-none">
              Destination <span className="fa fa-caret-down"></span>
            </button>
            <div className="hidden group-hover:block absolute left-0 top-full bg-white text-navy shadow-lg rounded-b z-50 min-w-[200px] lg:text-left text-center">
              <Link href="/destinations/germany" className="block px-6 py-3 font-bold text-orange bg-orange/10 hover:bg-orange hover:text-white transition-colors">🇩🇪 Germany</Link>
              <Link href="/destinations/usa" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇺🇸 USA</Link>
              <Link href="/destinations/uk" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇬🇧 UK</Link>
              <Link href="/destinations/canada" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇨🇦 Canada</Link>
              <Link href="/destinations/australia" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇦🇺 Australia</Link>
              <Link href="/destinations/ireland" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇮🇪 Ireland</Link>
              <Link href="/destinations/new-zealand" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇳🇿 New Zealand</Link>
              <Link href="/destinations/singapore" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">🇸🇬 Singapore</Link>
              <Link href="/destinations/all" className="block px-6 py-3 hover:bg-orange hover:text-white transition-colors">View All Destinations</Link>
            </div>
          </div>

          {/* Contact (mobile) */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="lg:hidden py-5 px-4 font-body text-sm font-bold hover:text-orange transition-colors mb-5"
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