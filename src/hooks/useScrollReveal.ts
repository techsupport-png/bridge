import { useEffect } from "react";

interface ScrollRevealConfig {
  selector: string;
  options: scrollReveal.ScrollRevealObjectOptions;
}

export const useScrollReveal = (configs: ScrollRevealConfig[]) => {
  useEffect(() => {
    // Only run on client side (browser)
    if (typeof window === "undefined") return;

    // Dynamically import ScrollReveal only on client side
    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;
      
      configs.forEach(({ selector, options }) => {
        ScrollReveal().reveal(selector, options);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};