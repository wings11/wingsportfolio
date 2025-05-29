import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yarsu from "../../Assets/Projects/YarSu.png";

import Kham from "../../Assets/Projects/Kham.png";
import shalpal from "../../Assets/Projects/shalpal.png";
import hybriddev from "../../Assets/Projects/hybriddev.png";
import tm from "../../Assets/Projects/tm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          All of these below are test versions of my real world projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shalpal}
              isBlog={false}
              title="Shal Pal"
              description="This project is my first real world project which is a restaurant  website build with React.js and Node.js. The website is responsive and has a modern design. Admin can generate QR code for the menu items and can also view the orders placed by the customers. Customers can scan the qr code and view menu, and create order. The admin will recieve notification after customer create order or ring the bell. The admin side also has graphs, charts and pies shown for sales report.
             "

              username="username : shalpal@gmail.com"
              password="password : shalpalshalpal"
               demoLink="https://shalpal.netlify.app/login"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tm}
              isBlog={false}
              title="Tamar Myay"
              description="In this project, I mainly have to focus on backend development. I have used Node.js, Express.js, and Psql for the backend development. The project is a restaurant management and pos system where admin can manage the restaurant, menu items, and orders. Admin can also view the sales report in the form of graphs, charts, and pies."
              username="username : admin"
              password="password : tm123!@#"
              demoLink="https://tamarmyay-frontend-last.onrender.com/login"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hybriddev}
              isBlog={false}
              title="Hybrid Dev"
              description="A simple web app for managing your daily tasks. The app allows users to create, read, update, and delete tasks. It also has a feature to mark tasks as completed. The app is responsive and has a modern design. This app is built for Hybrid Dev Company for their internal use. The app is built with React.js and Node.js. The app is hosted on Railway."
              username="username : Wings"
              password="password : hybriddev"
              demoLink="https://hybrid-dev.up.railway.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kham}
              isBlog={false}
              title="Kham Portfolio"
              description="A single page portfolio website built with React.js, threejs and GSAP. The website is responsive and has a modern design. The website has a section for projects, skills, and contact information. The website is hosted on Netlify. This website is built for my fellow classmate."
              
              demoLink="https://kham-portfolio.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yarsu}
              isBlog={false}
              title="Yar Su"
              description="This app is still in development phase. The demo link will be available as soon as the app is completed. The app is built with React Native and Node.js."
              
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
