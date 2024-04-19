import Picture1 from "/130d0a.png";
import Picture2 from "/pic1.png";
import Picture3 from "/pic2.png";
import Picture4 from "/pic3.png";
import Picture5 from "/pic4.png";
import Picture6 from "/pic5.png";
import Picture7 from "/pic5.png";
import styled from "styled-components";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Style = styled.div`
  .scrollContainer {
    height: 300vh;
    position: relative;
    .sticky {
      position: sticky;
      overflow: hidden;
      top: 0;
      height: 100vh;

      .el {
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        .imageContainer {
          position: relative;
          width: 25vw;
          height: 25vh;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &:nth-of-type(2) {
          .imageContainer {
            top: -30vh;
            left: 5vw;
            width: 35vw;
            height: 30vh;
          }
        }
        &:nth-of-type(3) {
          .imageContainer {
            top: -10vh;
            left: -25vw;
            width: 20vw;
            height: 45vh;
          }
        }
        &:nth-of-type(4) {
          .imageContainer {
            left: 27.5vw;
            width: 25vw;
            height: 25vh;
          }
        }
        &:nth-of-type(5) {
          .imageContainer {
            top: 27.5vh;
            left: 5vw;
            width: 20vw;
            height: 25vh;
          }
        }
        &:nth-of-type(6) {
          .imageContainer {
            top: 27.5vh;
            left: -22.5vw;
            width: 30vw;
            height: 25vh;
          }
        }
        &:nth-of-type(7) {
          .imageContainer {
            top: 22.5vh;
            left: 25vw;
            width: 15vw;
            height: 15vh;
          }
        }
      }
    }
  }
`;

const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1.7], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1.7], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1.7], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1.7], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1.7], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  return (
    <Style>
      <div ref={container} className="scrollContainer">
        <div className="sticky">
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className="el">
                <div className="imageContainer">
                  <img src={src} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Style>
  );
};

export default ZoomParallax;
