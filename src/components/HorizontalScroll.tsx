import { mentalHealthQuotes } from "../api/data";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import AnimatedFigure from "./AnimatedFigure";

const Style = styled.div`
  .scrollContainer {
    height: 500vh;
    position: relative;
    color: white;
    .sticky {
      position: sticky;
      overflow: hidden;
      top: 0;
      height: 100vh;
      .stickFigure {
        margin-left: -300px;
        margin-top: calc(100vh - 472px);
      }
      .quote {
        margin-left: -500px;
      }
    }
  }
`;

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const shuffledQuotes = mentalHealthQuotes.sort(() => Math.random() - 0.5);
  const selectedQuotes = shuffledQuotes.slice(0, 10);

  return (
    <Style>
      <div ref={targetRef} className="scrollContainer">
        <div className="sticky">
          <div style={{ position: "absolute" }}>
            {selectedQuotes.map((quote, index) => (
              <motion.h1
                key={index}
                className="quote"
                style={{
                  x: useTransform(
                    scrollYProgress,
                    [0, 1],
                    [
                      `${Math.random() * 301 + 200}%`,
                      `${Math.random() * 101 - 150}%`,
                    ]
                  ),
                }}
              >
                {quote}
              </motion.h1>
            ))}
          </div>
          <motion.div
            className="stickFigure"
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          >
            <AnimatedFigure />
          </motion.div>
        </div>
      </div>
    </Style>
  );
};

export default HorizontalScroll;
