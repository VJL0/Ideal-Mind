import { helpingOptions } from "../backend/data";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  //position: absolute;
  //top: 0;
  height: 100%;

  .full-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .cont {
      margin-bottom: 50px;
      flex: 0 0 calc(50% - 50px);
      padding: 20px;
      @media (max-width: 480px) {
        flex: 0 0 100%;
      }
    }
  }

  .cont1 {
    h1 {
      text-align: center;
      margin: 2rem 0;
    }
    div {
      margin: 0 5vw;
      button {
        font-size: 1.5rem;
      }
    }
  }
  .cont2 {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    background-color: #b2d6d6;
    h4 {
      text-transform: lowercase;
      text-align: center;
      font-size: 1.38rem;
      margin: 2rem 0;
      line-height: 1.5;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    ol {
      margin: 2rem 5vw;
      font-size: 1.06rem;
      line-height: 1.5;
      li {
        margin-top: 1.5rem;
      }
    }
  }
  .options-container {
    display: flex;
    flex-direction: column;
  }

  img {
    background-color: #fff;
    border-radius: 99rem;
    align-items: center;
    display: flex;
    height: 200px;
    margin: 2rem auto;
  }
`;

const Challenges = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Style>
      <div className="full-container">
        <div className="cont cont1">
          <h1>Ways to act based on your role:</h1>
          <div className="options-container">
            {helpingOptions.map(({ role }, index) => {
              return (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedTab(index)}
                >
                  {role}
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className="cont cont2">
          <img
            src={`helpingOptionsImages/${helpingOptions[selectedTab].image}`}
          />
          <h4>What {helpingOptions[selectedTab].role} can do:</h4>
          <ol>
            {helpingOptions[selectedTab].messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ol>
        </div>
      </div>
    </Style>
  );
};

export default Challenges;
