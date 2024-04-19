import styled from "styled-components";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Style = styled.div`
  .paragraph {
    display: flex;
    font-size: 60px;
    line-height: 1;
    padding: 40px;
    max-width: 1280px;
    //color: white;
    flex-wrap: wrap;
    .word {
      position: relative;
      margin-right: 12px;
      margin-top: 12px;
      .shadow {
        position: absolute;
        opacity: 20%;
      }
    }
  }
`;

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="word">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <Style>
      <p ref={container} className="paragraph">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </Style>
  );
};

export default Paragraph;
