import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub></FaGithub>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
      <FaGitSquare></FaGitSquare>
      </Col>
    </Row>
  );
}

export default Toolstack;
