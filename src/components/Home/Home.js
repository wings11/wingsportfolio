import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import homeLogo from "../../Assets/homeee.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// List of font families (Google Fonts + system fallbacks)
const fonts = [
  
  "Times New Roman, serif", 
  
  
];

function Home() {
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  // Cycle through fonts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFont((prevFont) => {
        const currentIndex = fonts.indexOf(prevFont);
        const nextIndex = (currentIndex + 1) % fonts.length;
        return fonts[nextIndex];
      });
    }, 3000); // Change font every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          backgroundImage: `url(${require("../../Assets/home-bg.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Particle />
        <Container className="home-content">
          <StyledWrapper>
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M&nbsp;
                  <strong
                    className="main-name"
                    style={{ fontFamily: currentFont }}
                  >
                    {" "}
                    Wai Yan Kyaw
                  </strong>
                  .
                </h1>

                <div className="type" style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid1"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </StyledWrapper>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

const StyledWrapper = styled.div`
  .main-name {
    color: #1e90ff; /* Initial color */
    animation: colorChange 10s infinite ease-in-out;
    display: inline-block; /* Ensure proper rendering */
    font-weight: bold;
  }

  @keyframes colorChange {
    0% {
      color:rgb(226, 70, 247);
    }
    20% {
      color: #1e90ff; /* Pink */
    }
    40% {
      color:rgb(135, 64, 194); /* Green */
    }
    60% {
      color:rgb(143, 0, 187); /* Orange */
    }
    80% {
      color:rgb(199, 0, 27); /* Purple */
    }
    100% {
      
      color: #ff2288; /* Blue */
    }
  }
`;

export default Home;