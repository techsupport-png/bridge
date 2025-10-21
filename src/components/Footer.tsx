import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="px-[5%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/img/Original_Logo.svg" 
                alt="Bridge Bound Academy Logo" 
                width={160} 
                height={50}
                className="w-auto h-[50px] brightness-0 invert"
              />
            </Link>
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner for global education opportunities. We help students achieve their dreams of studying abroad with comprehensive support and guidance.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-xl hover:text-orange transition-colors"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a 
                href="#" 
                className="text-xl hover:text-orange transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a 
                href="#" 
                className="text-xl hover:text-orange transition-colors"
                aria-label="Pinterest"
              >
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#services" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="#blog" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa fa-phone text-orange mt-1"></i>
                <div>
                  <a href="tel:+15551234567" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa fa-envelope text-orange mt-1"></i>
                <div>
                  <a href="mailto:info@bridgeboundacademy.com" className="font-body text-gray-300 hover:text-orange transition-colors text-sm">
                    info@bridgeboundacademy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa fa-map-marker text-orange mt-1"></i>
                <div>
                  <p className="font-body text-gray-300 text-sm">
                    123 Education Street<br />
                    Learning City, LC 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="font-body">© 2025 Bridge Bound Academy. All rights reserved.</p>
          <div className="flex items-center gap-6 font-body">
            <Link href="#" className="hover:text-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-orange transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;