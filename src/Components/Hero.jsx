// Hero.js
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
    setShowModal(false); // Close the modal after form submission
  };
  return (
    <>
      <NavbarComponent />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>

            <Button variant="primary" type="submit" className="bttn">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="hero">
        <section id="home" className="hero-content">
          <h1>Welcome to Fooddddie's Kitchen!</h1>
          <p>
            We offer a wide range of delicious dishes that will satisfy your
            cravings.
          </p>
          <Button variant="primary" onClick={handleShowModal}>
            Book a Table
          </Button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
