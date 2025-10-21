import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#home"
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange text-white flex items-center justify-center rounded-full shadow-lg hover:bg-orange-dark hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Back to top"
          data-back-top-btn
        >
          <i className="fa fa-arrow-up text-lg"></i>
        </a>
      )}
    </>
  );
};

export default BackToTop;