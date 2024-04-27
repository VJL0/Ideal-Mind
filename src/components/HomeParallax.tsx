import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Style = styled.div`
  display: grid;
  overflow: hidden;
  position: relative;
  place-items: center;
  width: 100%;
  height: 100vh;

  .startPosition {
    background-position: bottom;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .text {
    position: relative;
    z-index: 2;
    font-size: 4rem;
    text-align: center;
    line-height: 1;
    font-weight: 700;
    top: -100px;
    margin: 0;
    color: black;
    @media (min-width: 480px) {
      margin: 0 80px;
      font-size: 8rem;
      line-height: 1;
    }
  }
`;

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <Style ref={ref}>
      <motion.div
        className="startPosition"
        style={{
          zIndex: 1,
          backgroundImage: `url(homeParallax/layer5-bg.png)`,
          y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      />
      <motion.div
        className="startPosition"
        style={{
          zIndex: 2,
          backgroundImage: `url(homeParallax/layer4.png)`,
          y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
        }}
      />
      <motion.div
        className="startPosition"
        style={{
          zIndex: 3,
          backgroundImage: `url(homeParallax/layer3.png)`,
          y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
        }}
      />
      <motion.div
        className="startPosition"
        style={{
          zIndex: 4,
          backgroundImage: `url(homeParallax/layer2.png)`,
          y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
        }}
      />
      <div
        className="startPosition"
        style={{
          zIndex: 5,
          backgroundImage: `url(homeParallax/layer1.png)`,
        }}
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ y: textY }}
        className="text"
      >
        Let's Explore the Invisible Battles.
      </motion.h1>
    </Style>
  );
};
export default MultiLayerParallax;
