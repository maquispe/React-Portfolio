import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Hero from "../components/Hero";
import LinkHero from "../components/LinkHero";

const Home = () => {
  return (
    <Container>
      <br />
    <h1>About Me</h1>
    <hr />
      <Row>
        <Col size="3">
          <Card />
        </Col>
        <Col size="9">
          <Hero />
          <LinkHero />
        </Col>
      </Row>
    </Container>
  )
};
export default Home;