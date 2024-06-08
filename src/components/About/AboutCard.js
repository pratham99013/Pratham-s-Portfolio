import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratham Mishra </span>
            from <span className="purple"> Gorakhpur, India.</span>
            <br />
            I am currently in my pre-final year pursuing B.Tech. in Information Technology from MMMUT Gorakhpur
            <br />
            I've delved deeply into the world of technology, specializing in Data Structures and Algorithms (DSA) with a focus on C++, and mastering Full Stack Web Development using tools like React.js, Django & SQLite among others. 
            <br />
            
            I'm actively seeking internship and placement opportunities where I can leverage my skills and enthusiasm to make meaningful contributions.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
   
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
