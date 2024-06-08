import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiRapid } from "react-icons/si";
import { SiMastodon } from "react-icons/si";

function ProjectCards(props) {
  let a = props.id;
  if(a==1){
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        <br></br>
        <br></br>
        <h3>Technologies used:</h3>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
              <Col xs={4} md={2} className="tech-icons">
              <SiMastodon></SiMastodon>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <FaReact></FaReact>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <TbApi></TbApi>
              </Col>
            </Row>
      </Card.Body>
    </Card>
  );
}
else if(a==2){
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        <br></br>
        <br></br>
        <h3>Technologies used:</h3>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
              <Col xs={4} md={2} className="tech-icons">
              <FaReact></FaReact>
            
              </Col>
              <Col xs={4} md={2} className="tech-icons">
             <TbBrandTailwind></TbBrandTailwind>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
              <TbApi></TbApi>
              </Col>
            </Row>
      </Card.Body>
    </Card>
  );
}
else{
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        <br></br>
        <br></br>
        <h3>Technologies used:</h3>
          <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
              <Col xs={4} md={2} className="tech-icons">
               <FaHtml5></FaHtml5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
             <FaCss3></FaCss3>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
             <IoLogoJavascript></IoLogoJavascript>
              </Col>
            </Row>
      </Card.Body>
    </Card>
  );
}
}
export default ProjectCards;
