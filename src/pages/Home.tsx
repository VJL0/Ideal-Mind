import HomeParallax from "../components/HomeParallax";
//import ZoomParallax from "../components/ZoomParallax";
import styled from "styled-components";
import HorizontalScroll from "../components/HorizontalScroll";
import ZoomParallax from "../components/ZoomParallax";
import CharTransition from "../components/CharTransition";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Style = styled.div`
  position: absolute;
  width: 100%;

  background-color: #130d0a;
  color: white;

  .paragraph {
    font-size: 3rem;
  }
  .freedom-quote {
    margin: 0 5rem;
  }
`;

const Home = () => {
  const [atBottom, setAtBottom] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest * window.innerHeight >= window.innerHeight) {
      setAtBottom(true);
    } else setAtBottom(false);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [atBottom]);

  return (
    <Style>
      <HomeParallax />
      <HorizontalScroll />
      <div className="freedom-quote">
        <CharTransition paragraph="Freedom. " />
        <CharTransition paragraph="It’s a loaded word." />
        <CharTransition paragraph="The meaning of it can vary dramatically according to the context." />
        <CharTransition paragraph="And it’s not a word that’s often associated with mental health." />
        <CharTransition paragraph="But freedom has its place alongside thoughts, behaviors, and feelings." />
        <CharTransition paragraph="Without freedom, the air becomes stale, and behavior becomes stilted." />
        <CharTransition paragraph="Let’s consider freedom’s impact — and what we can do to bring more of it into our lives." />
        <CharTransition paragraph="-Jordan Brown" />
      </div>
      <ZoomParallax />
      {atBottom && <Navigate to="/Ideal-Mind/about" />}
    </Style>
  );
};

export default Home;
