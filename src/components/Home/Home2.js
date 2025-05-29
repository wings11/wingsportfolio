import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn ,FaDiscord} from "react-icons/fa";
import "./gg.css";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I will <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <i>
                <b className="purple"> full-stack </b>
              </i> developer who enjoys building responsive and dynamic web apps💻.
              <br />
              <br />I work mainly with <i>
                <b className="purple"> React.js </b>
              </i> on the frontend and <i>
                <b className="purple"> Node.js </b>
              </i> with Express on the backend. For databases, I use 
              <i>
                <b className="purple"> PostgreSQL </b>
              </i>
               to keep things fast and organized. 
              <br />
              <br />
              I love turning ideas into <i>
                <b className="purple"> real, working products  </b>
              </i>— clean code and good UX matter to me.
              <br />
              <br />
              Always 
                <b className="purple"> learning </b>
              , always 
                <b className="purple"> imporoving </b>
              .
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12}>
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>HOW TO CONTACT?</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                            <a
                              href="mailto:wykyaw2001@gmail.com"
                              className="icon-colour home-social-icons"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                          <MdEmail />
                        </a>
                  </li>
              <li className="social-icons">
                <a
                  href="https://github.com/wings11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/1CYouhCuMj/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wai-yan-kyaw-474464248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/w_in_gs_10?igsh=MWY5NWpnd2N0Z2I1bg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
               <li className="social-icons">
                            <a
                              href="https://discord.com/users/499557225103097859"
                              className="icon-colour home-social-icons"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <FaDiscord />
                            </a>
                          </li>
                          
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;