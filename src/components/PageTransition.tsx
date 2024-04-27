import { motion } from "framer-motion";
import styled from "styled-components";
import { text, curve, translate } from "../backend/animations";
import { getPathname } from "../backend/functions";

const Style = styled.div`
  z-index: 2140000000;
  .curvesvg {
    position: fixed;
    height: calc(100vh + 600px);
    width: 100vw;
    pointer-events: none;
    left: 0;
    top: 0;
    z-index: 2140000000;
  }
  .route {
    position: absolute;
    margin: 0;
    left: 50%;
    top: 40%;
    color: white;
    font-size: 46px;
    z-index: 3;
    transform: translateX(-50%);
    text-align: center;
    z-index: 2140000001; //2147480001
  }
`;

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const SVG = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg className="curvesvg" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

interface PageTransitionProps {
  children: React.ReactNode;
}

// MAIN COMPONENT
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <Style>
      <motion.p className="route" {...anim(text)}>
        {getPathname()}
      </motion.p>
      <SVG />
      <div>{children}</div>
    </Style>
  );
};

export default PageTransition;
