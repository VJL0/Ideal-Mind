import { ReactNode, useEffect } from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body.active-modal {
    overflow-y: hidden;
  }
`;
const Style = styled.div`
  z-index: 10000;
  position: absolute;

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .overlay-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  }
`;

interface OverlayProps {
  children: ReactNode;
  isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, children }) => {
  useEffect(() => {
    document.body.classList.toggle("active-modal", isOpen);
  }, [isOpen]);

  return (
    <Style>
      <GlobalStyle />
      {isOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="overlay-content">{children}</div>
        </div>
      )}
    </Style>
  );
};

export default Overlay;
