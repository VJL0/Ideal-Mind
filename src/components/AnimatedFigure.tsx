import React, { useEffect, useState } from "react";

const AnimatedFigure: React.FC = () => {
  const walkingFrames = [
    "stickFigureFrames/f0.png",
    "stickFigureFrames/f1.png",
    "stickFigureFrames/f2.png",
    "stickFigureFrames/f3.png",
    "stickFigureFrames/f4.png",
    "stickFigureFrames/f5.png",
    "stickFigureFrames/f6.png",
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: any = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        // Your custom logic for when scrolling stops
        setIsScrolling(false);
      }, 120);

      setIsScrolling(true);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isScrolling) {
        setCurrentFrame((prevFrame) => (prevFrame + 1) % walkingFrames.length);
      }
    }, 100); // Adjust walking interval as needed

    return () => clearInterval(interval);
  }, [isScrolling, walkingFrames.length]);

  return (
    <img
      key={currentFrame}
      src={walkingFrames[currentFrame]}
      alt={`Frame ${currentFrame + 1}`}
      style={{ display: "block", transform: "scaleX(-1)" }}
    />
  );
};

export default AnimatedFigure;
