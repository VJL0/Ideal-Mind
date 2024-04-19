import styled from "styled-components";
import TherapistChat from "../components/TherapistChat";
import Curve from "../components/Curve";
import Overlay from "../components/Overlay";
import { useState } from "react";

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    pointer-events: none;
  }
  .btn-modal {
    position: absolute;
  }
`;

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Style>
      <Curve />
      <button onClick={toggleOverlay} className="btn-modal">
        Open
      </button>

      <Overlay isOpen={isOpen}>
        <button onClick={toggleOverlay}>X</button>
        <h1>bhjn</h1>
        <h1>bhjn</h1>
        <h1>bhjn</h1>
        <h1>bhjn</h1>
      </Overlay>
      <video playsInline autoPlay loop muted>
        <source src="newbg.mp4" />
      </video>
      <TherapistChat />
    </Style>
  );
};

export default ChatBox;
