import About from "./pages/About";
import Home from "./pages/Home";
import ChatBox from "./pages/ChatBox";
import Solution from "./pages/Solution";
import NavigationBar from "./NavigationBar";
import PageTransition from "./components/PageTransition";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    width: 100%;    
    
  }
  body::-webkit-scrollbar {
  display: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
`;
function App() {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/Ideal-Mind/" element={<Home />} />
            <Route path="/Ideal-Mind/chat" element={<ChatBox />} />
            <Route path="/Ideal-Mind/about" element={<About />} />
            <Route path="/Ideal-Mind/solution" element={<Solution />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default App;
