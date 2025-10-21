import { useEffect, useState } from "react";

interface TextParagraph {
  text: string;
  color: string;
}

export const useTextCycle = (paragraphs: TextParagraph[], interval: number = 4500) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        setOpacity(1);
      }, 1000);
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentText: paragraphs[currentIndex], opacity };
};