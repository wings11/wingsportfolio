import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn ,FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed inspired from <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" without rel="noreferrer" >Soumyajit Behera</a></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Wings</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:wykyaw2001@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/wings11"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/share/1CYouhCuMj/?mibextid=wwXIfr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wai-yan-kyaw-474464248/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/w_in_gs_10?igsh=MWY5NWpnd2N0Z2I1bg%3D%3D&utm_source=qr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
                
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.com/users/499557225103097859"
                style={{ color: "white" }}
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
  );
}

export default Footer;
