
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
    <a href= "https://leetcode.com/u/prathammishra99013/"><SiLeetcode></SiLeetcode></a>
    <h2>Leetcode</h2>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <a href= "https://www.codechef.com/users/prathammishra9"><SiCodechef></SiCodechef></a>
    <h2>CodeChef</h2>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <a href= "https://www.naukri.com/code360/profile/26a70ad1-f7d9-44cd-a902-e20f460b28e2"><SiCodingninjas></SiCodingninjas></a>
    <h2>Codestudio</h2>
    </Col>
  
  </Row>
  );
}

export default Github;
