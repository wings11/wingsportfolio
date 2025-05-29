import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import {
  
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

import { SiTailwindcss } from "react-icons/si";

import { FaWordpress } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";

import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <BiLogoFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
