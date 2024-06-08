import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2.1} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
      <DiDjango></DiDjango>
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
        <SiSqlite></SiSqlite>
      </Col>
     

      <Col xs={3} md={2.1} className="tech-icons">
       <FaHtml5></FaHtml5>
      </Col>
      <Col xs={3} md={2.1} className="tech-icons">
       <FaCss3></FaCss3>
      </Col>
    
    </Row>
  );
}

export default Techstack;
