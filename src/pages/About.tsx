import styled from "styled-components";
import Challenges from "../components/Challenges";
import Curve from "../components/Curve";
import { useEffect } from "react";
import Cards from "../components/Cards";

const Style = styled.div`
  //height: 1000vh;
  background-color: #eeeeee;
  .why-text {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const About = () => {
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
        {/* <h1>
        While their is nothing wrong with the current way to adress problems.
        With the increase of ai integration in multiple asspets of life. The
        problem is that there is a lack of professional therapists. My perspose
        of this website is to create to an AI therapist assistent for relaible
        and imdediate responses. AI therapy could also provide quicker and
        cheaper access to support than traditional mental health services.
      </h1> */}
      </Style>
    </>
  );
};

export default About;
