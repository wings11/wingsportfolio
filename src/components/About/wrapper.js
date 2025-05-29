import React from "react";
import styled from "styled-components";
import {
  SiVisualstudiocode,
  SiPostman,

  SiNetlify,
 
} from "react-icons/si";
import { GrWindows } from "react-icons/gr";
import { SiSublimetext } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
const tools = [
{ icon: <GrWindows size={30} />, color: "000000" },
  { icon: <SiVisualstudiocode size={30} />, color: "007ACC" },
  { icon: <SiPostman size={30} />, color: "FF6C37" },
  { icon: <SiSublimetext  size={30} />, color: "4A154B" },
  { icon: <SiNetlify size={30} />, color: "000000" },
   { icon: <RiSupabaseFill size={30} />, color: "000000" },
];

const Card = () => {
  return (
    <StyledWrapper>
      {tools.map((tool, index) => (
        <div key={index} className="card" id={`card-${index}`}>
          <div className="content" style={{ "--color-card": tool.color }}>
            <span>{tool.icon}</span>
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  overflow-x: auto;

  .card {
    width: 150px;
    height: 150px;
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
    flex: 0 0 auto;
  }

  span {
    font-size: 30px;
  }

  .card .content {
    border-radius: 5px;
    background: #171717;
    width: 98%;
    height: 98%;
    z-index: 1;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content::before {
    opacity: 0;
    transition: opacity 300ms;
    content: " ";
    display: block;
    background: white;
    width: 5px;
    height: 50px;
    position: absolute;
    filter: blur(50px);
    overflow: hidden;
  }

  .card:hover .content::before {
    opacity: 1;
  }

  .card::before {
    opacity: 1;
    content: " ";
    position: absolute;
    display: block;
    width: 80px;
    height: 360px;
    background: linear-gradient(#ff2288, #387ef0);
    transition: opacity 300ms;
    animation: rotation_9018 8000ms infinite linear;
    animation-play-state: running;
  }

  .card:hover::before {
    opacity: 1;
    animation-play-state: running;
  }

  .card::after {
    position: absolute;
    content: " ";
    display: block;
    width: 110px;
    height: 80px;
    background: #17171733;
    backdrop-filter: blur(50px);
  }

  @keyframes rotation_9018 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;
    .card {
      flex: 0 0 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
    }
  }

  @media (max-width: 768px) {
    .card {
      flex: 0 0 calc(50% - 20px);
      max-width: calc(50% - 20px);
    }
  }

  @media (max-width: 576px) {
    .card {
      flex: 0 0 calc(100% - 20px);
      max-width: calc(100% - 20px);
    }
  }
`;

export default Card;