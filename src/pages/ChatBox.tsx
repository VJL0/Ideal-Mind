import styled from "styled-components";
import TherapistChat from "../components/TherapistChat";
import Curve from "../components/Curve";
import Overlay from "../components/Overlay";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
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

  .overlay-content {
    top: 45%;
    text-align: center;
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 15px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  }

  textarea {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(204, 204, 204);
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input,
  select {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(204, 204, 204);
  }
`;

const initialState = localStorage.getItem("firstOpen") !== "false";

const useFirstOpenState = () => {
  const [firstOpen, setFirstOpen] = useState(initialState);

  const toggleOverlay = () => {
    localStorage.setItem("firstOpen", "false");
    setFirstOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("firstOpen") === null) {
      localStorage.setItem("firstOpen", "true");
    }
  }, []);

  return { firstOpen, toggleOverlay };
};

const ChatBox = () => {
  const { firstOpen, toggleOverlay } = useFirstOpenState();
  const [selectedTab, setSelectedTab] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [background, setBackground] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const increment = () => {
    setSelectedTab(selectedTab + 1);
  };

  const decrement = () => {
    setSelectedTab(selectedTab - 1);
  };

  return (
    <Container>
      <Curve />
      <Overlay isOpen={firstOpen}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab == 0 && (
              <>
                <h2>Let's get started</h2>
                <p>
                  This is not a medical service. Do not ask for medical advice.
                  Use your own judgement.
                </p>
                <p>
                  If you are having a crisis situation or need immediate help,
                  do not rely on this service. Instead, call 911 or go to the
                  nearest emergency room.
                </p>
                <button onClick={increment}>Got it!</button>
              </>
            )}
            {selectedTab == 1 && (
              <>
                <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
                  Enter Your Information
                </h2>
                <p style={{ marginBottom: "20px", fontSize: "16px" }}>
                  Your profile info is stored locally. Fields are completely
                  optional.
                </p>
                <form style={{ marginBottom: "20px" }}>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Name:</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Age:</label>
                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Gender:</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </form>
                <button
                  onClick={decrement}
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Back
                </button>
                <button onClick={increment}>Next</button>
              </>
            )}

            {selectedTab === 2 && (
              <>
                <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
                  Share More Information
                </h2>
                <p style={{ marginBottom: "0px" }}>
                  Provide as much info as you want the therapist to know about
                  you.
                </p>
                <p style={{ marginTop: "0px" }}>
                  Your profile info is stored locally.
                </p>
                <form style={{ marginBottom: "20px" }}>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>Background:</label>
                    <textarea
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      placeholder="I grew up..."
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label style={{ marginRight: "10px" }}>
                      Anything else?
                    </label>
                    <textarea
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      placeholder="I prefer..."
                    />
                  </div>
                </form>
                <button
                  onClick={decrement}
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Back
                </button>
                <button onClick={toggleOverlay}>Finish</button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </Overlay>

      <video src="newbg.mp4" playsInline autoPlay loop muted />

      <TherapistChat
        USERINFO={`This Person is a client, This info is very important: Name: ${name},  Age: ${age}, Gender: ${gender}, Background: ${background}, Additional Info: ${additionalInfo}`}
      />
    </Container>
  );
};

export default ChatBox;
