import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer specializing in Generative AI, passionate about 
              transforming ideas into intelligent, scalable solutions. I've delivered 10+ 
              AI POCs across NLP and multi-modal domains, fine-tuning LLMs and building 
              production-ready RAG applications.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Large Language Models (LLMs), RAG, LangChain, LangGraph, LlamaIndex,{" "}
                </b>
              </i>
              and I enjoy working with vector databases like ElasticSearch, PGVector, Azure AI Search, and FAISS.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  RAG Applications, Multi-modal AI Systems, LLM Fine-tuning,{" "}
                </b>
              </i>
              and building scalable cloud-based backends using Azure services.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python </b> and modern AI frameworks like{" "}
              <i>
                <b className="purple">LangChain</b>,{" "}
                <b className="purple">React.js</b>, and{" "}
                <b className="purple">Azure OpenAI</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
