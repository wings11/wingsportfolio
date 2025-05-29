import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
<Particles
  id="tsparticles"
  params={{
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        enable: true,
  speed: 0.7,         // Slightly faster so movement is noticeable
  direction: "none",  // Move in all directions
  random: true,       // Adds organic, natural movement
  straight: false,    // Curved movement instead of straight lines
  out_mode: "out", 
      },

      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // or try "bubble" or "grab"
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  }}
/>

  );
}

export default Particle;
