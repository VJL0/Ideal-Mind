import About from "./pages/About";
import Home from "./pages/Home";
import ChatBox from "./pages/ChatBox";
import Solution from "./pages/Solution";
import NavigationBar from "./NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    width: 100%;
    //font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/Ideal-Mind" element={<Home />} />
        <Route path="/Ideal-Mind/chat" element={<ChatBox />} />
        <Route path="/Ideal-Mind/about" element={<About />} />
        <Route path="/Ideal-Mind/solution" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
