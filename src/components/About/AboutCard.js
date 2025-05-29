import React from "react";
import Card from "react-bootstrap/Card";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaGuitar } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hello Everyone, I am <span className="purple">Wings.</span>
            <br />
            I am a <span className="purple">Full-Stack Developer</span> passionate about building scalable, user-friendly web applications
            <br />
            I have completed <span className="purple">B.Sc Computer Science</span> from <b>University of Greenwich </b>and <span className="purple">B.Sc Information and Communication Technology</span> from <b>Rangsit University.</b>
            <br />
            <br />
            Apart from coding, there are a few hobbies of mine which I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <IoLogoGameControllerB /> Playing <span className="purple">Albion Online</span>
            </li>
            <li className="about-activity">
              <FaGuitar /> Playing <span className="purple">Guitar</span>
            </li>
            <li className="about-activity">
              <MdCardTravel /> <span className="purple">Travelling</span>
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
