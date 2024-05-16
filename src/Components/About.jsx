// About.js
import Footer from "./Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

const About = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="about-container">
        <div className="abt">
          <Row>
            <Col>
              <h1 className="about-heading">About Us</h1>
              <p className="about-text">
                Welcome to [Restaurant Name], where we serve delicious food with
                a touch of [cuisine type] cuisine!
              </p>
              <p className="about-text">
                Our mission is to provide our customers with an exceptional
                dining experience, offering a diverse menu of high-quality
                dishes made from fresh, locally-sourced ingredients.
              </p>
              <p className="about-text">
                Whether you're joining us for a casual meal with friends or a
                special celebration, our friendly staff is dedicated to ensuring
                your satisfaction.
              </p>
              <p className="about-text">
                At [Restaurant Name], we believe in creating memorable moments
                around the table, and we look forward to serving you soon!
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </>
  );
};
export default About;
