import styled from "styled-components";
import CharTransition from "../components/CharTransition";
import TherapyCard from "../components/TherapyCard";
import { Link } from "react-router-dom";

const Style = styled.div`
  position: absolute;
  width: 100%;
  background-color: #f8fafc;

  .solutionHeader {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url("solutionbg.jpg");
    @media (max-width: 480px) {
      background-image: url("mobileSolution.png");
    }
  }

  .about-site {
    .paragraph {
      margin: 0;
      padding: 0;
      margin: 5rem;
      font-size: 2rem;
    }
  }

  .demo-container {
    .text-container {
      font-size: 1rem;
      .paragraph {
        margin: 0;
        padding: 0;
      }
      .demo-button {
        margin-top: 5vw;
        background-color: black;
        color: white;
        font-size: 1rem;
        padding: 0.6rem 2rem;
        border-radius: 24px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
      }
    }
    .video-container {
      padding: 0 80px;
      video {
        width: 100%;
        pointer-events: none;
      }
    }
  }

  .demo-container,
  .therapy-card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .text-container,
  .video-container {
    flex: 0 0 50%;
    margin-bottom: 20px;
    padding: 20px;
  }
  @media (max-width: 480px) {
    .text-container,
    .video-container {
      flex: 0 0 100%;
      padding: 20px !important;
    }
  }
`;

const Solution = () => {
  return (
    <Style>
      <div className="solutionHeader" />

      <div className="about-site">
        <CharTransition paragraph="Mental health support is a critical need that affects millions of people worldwide. Unfortunately, there are significant barriers preventing individuals from accessing the care they require. These barriers include cost, accessibility, stigma, and a shortage of human therapists. As the demand for mental health services surges, innovative solutions are essential to bridge this gap." />
        <CharTransition paragraph="My goal is to create an AI therapist assistant that offers reliable and immediate responses. AI therapy could potentially provide quicker and more affordable access to support compared to traditional mental health services." />
      </div>

      <div className="demo-container">
        <div className="text-container">
          <CharTransition paragraph="The artificial intelligence that works like a therapist" />
          <Link to={"/Ideal-Mind/chat"} className="demo-button">
            Try The Demo
          </Link>
        </div>
        <div className="video-container">
          <video src="demo.mp4" playsInline autoPlay loop muted />
        </div>
      </div>

      <div className="therapy-card-container">
        <TherapyCard
          imageUrl={"therapyCard/accessibility.png"}
          title={"Accessibility"}
          description={
            "Chatbots are available 24/7 on smartphones, providing immediate assistance to users wherever they are. Unlike traditional therapy, which often requires appointments and travel, chatbots are accessible at any time."
          }
        />
        <TherapyCard
          imageUrl={"therapyCard/anonymity.png"}
          title={"Anonymity"}
          description={
            "Many people hesitate to seek help due to the fear of judgment or stigma. Chatbots allow users to express their feelings anonymously, reducing the emotional barriers associated with seeking support."
          }
        />
        <TherapyCard
          imageUrl={"therapyCard/personalization.png"}
          title={"Personalization"}
          description={
            "AI chatbots can tailor their responses based on individual needs. By analyzing user input, they provide personalized guidance and coping strategies."
          }
        />
        <TherapyCard
          imageUrl={"therapyCard/scalability.png"}
          title={"Scalability"}
          description={
            "With the increasing demand for mental health services, scalability is crucial. Chatbots can handle a large number of users simultaneously, making them an efficient solution."
          }
        />
      </div>
    </Style>
  );
};

export default Solution;
