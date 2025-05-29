import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Particle from "./Particle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sceneryImages = [
  "https://images.unsplash.com/photo-1672215251935-0edbeec181ce?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://res.cloudinary.com/dakgb0zrs/image/upload/v1748547830/photo-1539667547529-84c607280d20_ygbkfm.jpg",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Relax() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const handleUnsplashClick = () => {
    window.open("https://unsplash.com", "_blank", "noopener,noreferrer");
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} style={{ padding: "50px 0" }}>
            <Slider {...sliderSettings}>
              {sceneryImages.map((url, index) => (
                <div key={index}>
                  <img
                    src={url}
                    alt={`Nature Scenery ${index + 1}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "500px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "center",
            }}
          >
            <p>
              Above photos are sourced from{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#6f42c1", // Matches .purple class, adjust if needed
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleUnsplashClick}
              >
                Unsplash
              </a>
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Relax and <strong className="purple">Unwind</strong>
            </h1>
          </Col>
        </Row>
        <h1 className="project-heading">
          More <strong className="purple">Coming Soon</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Stay Relaxed and <strong className="purple">Chill</strong>
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p>
              Remember to take breaks and enjoy the little things in life. More content will be added soon!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Relax;