import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hello1.png";
import emotion from "../../Assets/Projects/hello3.png";
import editor from "../../Assets/Projects/hello2.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
let a = 1;
let b =2;
let c = 3;
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               id = {a}
              imgPath={leaf}
              isBlog={false}
              title="YOUTUBE CLONE"
              description="Created a Youtube Clone website using React JS which uses Rapid API to fetch data about Youtube videos and Channels 

              Crafted a user freindly interface fimilar to Youtube layout, ensuring smooth navigation, Search bar and seamless video streaming. 
              
              Technologies used : React.js, Rapid API, Material UI"
              Techstack = "Technologies used:"
              Logos = "TRA"
              ghLink="https://github.com/pratham99013/Youtube-Clone"
              demoLink="https://papaya-custard-69d2d0.netlify.app"

            

            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             id = {b}
              imgPath={emotion}
              isBlog={false}
              title="RANDOM GIF GENERATOR"
              description="Created an Interesting website on Graphics Interchange Format which generates random GIFS 

              It also has the feature of search bar where user and search GIFs related to a particluar topic or theme "
              Techstack = "Technologies used: "
              Logos = "TRA"
              ghLink="https://github.com/pratham99013/GIF-GENERATOR"
              demoLink="https://fabulous-pie-2da3b8.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            id = {c}
              imgPath={editor}
              isBlog={false}
              title="CARS"
              description="A Website built for Car lovers which tells the specifications of Cars and Also plays its Engine's Sound"
              Techstack = "Technologies used: "
              Logos = {[ TbApi ]}
                ghLink=""
              demoLink="https://prathamcars.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
