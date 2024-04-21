import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    top: -25%;
    height: 500px;
    width: 1000px;
    border-radius: 25px;
    padding: 50px;
    transform-origin: top;
    h2 {
      text-align: center;
      margin: 0px;
      font-size: 28px;
    }
    .body {
      display: flex;
      height: 100%;
      margin-top: 50px;
      gap: 50px;

      .description {
        width: 40%;
        position: relative;
        top: 10%;
        @media (max-width: 480px) {
          width: 100%;
        }
        p {
          font-size: 16px;
          &::first-letter {
            font-size: 28px;
            font-family: "Title";
          }
        }
        span {
          display: flex;
          align-items: center;
          gap: 5px;
          a {
            font-size: 12px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }

      .imageContainer {
        position: relative;
        width: 60%;
        height: 100%;
        border-radius: 25px;
        overflow: hidden;
        .inner {
          width: 100%;
          height: 100%;
        }
        img {
          object-fit: cover;
        }
      }
    }
  }
`;

interface CardProps {
  i?: any;
  title?: any;
  description?: any;
  img?: any;
  url?: any;
  color?: any;
  progress?: any;
  range?: any;
  targetScale?: any;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  img,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Style ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            {url != null && (
              <span>
                <a href={url} target="_blank">
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}
          </div>

          {windowWidth > 480 && (
            <div className="imageContainer">
              <motion.div
                className="inner"
                style={{
                  transform: `scale(${imageScale})`,
                  backgroundImage: `url(aboutCard/${img})`,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </Style>
  );
};

export default Card;
