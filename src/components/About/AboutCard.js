import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Harsh Dinde</span>{" "}
            from <span className="purple">Pune, India</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Equations Work</span>, specializing in{" "}
            <span className="purple">Generative AI</span>.
            <br />I hold a B.Tech. in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Tatyasaheb Kore Institute of Engineering and Technology</span> with a GPA of 8.7.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime, especially story-driven and action-packed series 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football – both watching and playing ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Valorant and other tactical shooters 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harsh Dinde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
