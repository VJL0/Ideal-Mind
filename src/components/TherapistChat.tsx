import { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { INSTRUCTIONS, openai } from "../api/therapistDataSet";
import Overlay from "./Overlay";
import Switch from "./Switch";

const Style = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  align-content: center;
  .therapist-chat-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    height: 80vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }

  .chat-window {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    min-height: 200px;
    overflow-y: auto;

    flex: 1;
  }

  .input-container {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .input-field {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  .send-button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .reset-button {
    padding: 10px 20px;
    background-color: #5e5e5e;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }

  .user {
    background-color: #f0f0f0;
  }

  .therapist {
    background-color: #d3d3d3;
  }

  .settings-heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h1 {
      margin: 0;
    }
  }
`;

interface TherapistChatProps {
  USERINFO: any;
}

const TherapistChat: React.FC<TherapistChatProps> = ({ USERINFO }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enableVoiceChat, setEnableVoiceChat] = useState(false);
  const [femaleVoice, setFemaleVoice] = useState(false);
  const AUTOSCROLL = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<any[]>(() => {
    const STOREDMESSAGES = localStorage.getItem("chatMessages");
    return STOREDMESSAGES
      ? JSON.parse(STOREDMESSAGES)
      : [
          {
            role: "assistant",
            content: "Hi friend! How's your day been treating you?",
          },
        ];
  });

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!inputText) return;

    const newMessages = [...messages, { content: inputText, role: "user" }];
    setMessages(newMessages);
    setInputText("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [INSTRUCTIONS, ...newMessages],
      });

      if (enableVoiceChat) {
        const audioResponse = await openai.audio.speech.create({
          model: "tts-1",
          voice: `${!femaleVoice ? "alloy" : "onyx"}`,
          input: `${response.choices[0].message.content}`,
        });
        const blob = new Blob([await audioResponse.arrayBuffer()], {
          type: "audio/mpeg",
        });
        const audio = new Audio(URL.createObjectURL(blob));
        audio.play();
      }

      setMessages([...newMessages, response.choices[0].message]);
    } catch (error) {
      console.error(error);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hi friend! How's your day been treating you?",
      },
    ]);
    localStorage.removeItem("chatMessages");
  };

  useEffect(() => {
    AUTOSCROLL.current?.scrollTo(0, AUTOSCROLL.current.scrollHeight);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );
  useEffect(() => {
    INSTRUCTIONS.content += USERINFO;
  }, []);

  return (
    <Style>
      <div className="therapist-chat-container">
        <div ref={AUTOSCROLL} className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
          <img
            className="reset-button"
            src="settings.svg"
            onClick={toggleOverlay}
            style={{ height: "70%", padding: "5px 5px" }}
          />
        </div>
      </div>

      <Overlay isOpen={isOpen}>
        <div className="settings-heading">
          <h1>SETTINGS</h1>
          <button className="reset-button" onClick={toggleOverlay}>
            X
          </button>
        </div>

        <div className="options">
          <h1> Enable/Disable Voice Chat?</h1>
          <Switch
            isOn={enableVoiceChat}
            onClick={() => setEnableVoiceChat(!enableVoiceChat)}
          />
        </div>
        <div
          className="options"
          style={{ visibility: `${enableVoiceChat ? "visible" : "hidden"}` }}
        >
          <h1> Female/Male Voice?</h1>
          <Switch
            isOn={femaleVoice}
            onClick={() => setFemaleVoice(!femaleVoice)}
          />
        </div>
        <div style={{ height: "50px" }} />
        <div className="settings-heading">
          <h1> Erase Data</h1>
          <button className="reset-button" onClick={resetChat}>
            Reset
          </button>
        </div>
      </Overlay>
    </Style>
  );
};

export default TherapistChat;
