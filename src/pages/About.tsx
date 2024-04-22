import styled from "styled-components";
import Challenges from "../components/Challenges";
import Curve from "../components/Curve";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Style = styled.div`
  background-color: #eeeeee;
  .why-text {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdown-container {
    font-size: 1.06rem;
    line-height: 1.5;
    border-bottom-width: 1px;
    border-bottom-color: #1b1b1b;
    border-bottom-style: solid;

    h4 {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const About = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Curve />
      <Style>
        <div
          style={{
            backgroundImage: "url(freedom.png)",
            width: "100%",
            height: "100vh",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        />
        <Cards />
        <Challenges />

        <div style={{ background: "rgb(127, 155, 171)", padding: "30px" }}>
          <h1>Lifeline Resources</h1>
          <h2>
            If you are experiencing an emergency, get immediate support
            (available 24/7):
          </h2>
          <div className="dropdown-container">
            <h4 onClick={toggleDropdown1}>
              If you are suicidal or in emotional distress, consider using the
              988 Suicide & Crisis Lifeline.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </h4>
            <ul style={{ display: `${isOpen1 ? "block" : "none"}` }}>
              <li>
                Call or text 988 or chat online to connect with a trained crisis
                counselor. The Lifeline provides 24-hour, confidential support
                to anyone in suicidal crisis or emotional distress. You can
                reach a specialized LGBTQI+ affirming counselor by texting “Q”
                to 988 or by calling 988 and pressing “3.”
              </li>
              <li>
                Learn more: 988 Suicide & Crisis Lifeline (disponible en español
                )
              </li>
            </ul>
          </div>
          <div className="dropdown-container">
            <h4 onClick={toggleDropdown2}>
              If you are a veteran, consider using the Veterans Crisis Line.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </h4>
            <ul style={{ display: `${isOpen2 ? "block" : "none"}` }}>
              <li>
                Call 988, then press “1.” You can also text 838255 or chat
                online . The Veterans Crisis Line is a 24-hour, confidential
                resource that connects veterans with a trained responder. The
                service is available to all veterans and those who support them,
                even if they are not registered with the VA or enrolled in VA
                healthcare.
              </li>
              <li>Learn more: Veterans Crisis Line (disponible en español )</li>
            </ul>
          </div>
          <div className="dropdown-container">
            <h4 onClick={toggleDropdown3}>
              If you have experienced a disaster, consider using the Disaster
              Distress Helpline.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </h4>
            <ul style={{ display: `${isOpen3 ? "block" : "none"}` }}>
              <li>Suicide and Crisis Lifeline</li>
              <li>
                Call or text 1-800-985-5990. The Disaster Distress Helpline
                provides immediate crisis counseling for people experiencing
                emotional distress related to any natural or human-caused
                disaster. The 24-hour, confidential helpline offers
                interpretation services in more than 100 languages.
              </li>
              <li>
                Learn more: Disaster Distress Helpline (disponible en español )
              </li>
            </ul>
          </div>
          <div className="dropdown-container">
            <h4 onClick={toggleDropdown4}>
              If you see concerning social media messages, contact the company’s
              safety team.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </h4>
            <ul style={{ display: `${isOpen4 ? "block" : "none"}` }}>
              <li>
                Social media companies have safety teams that can reach out to
                connect the person with the help they need.
              </li>
              <li>
                Learn more about action steps for helping someone in emotional
                distress.
              </li>
            </ul>
          </div>
        </div>
      </Style>
    </>
  );
};

export default About;
