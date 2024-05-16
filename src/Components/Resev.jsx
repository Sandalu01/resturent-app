// Reservation.js
import React from "react";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

import { Container, Form, Button } from "react-bootstrap";
const Resev = () => {
  return (
    <>
      <NavbarComponent />
      <div className="resv">
        <section id="reservation">
          <Container fluid>
            <h2>Reservation</h2>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control type="date" id="date" />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Control type="time" id="time" />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="guests">Number of Guests</Form.Label>
                <Form.Control type="number" id="guests" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Reserve
              </Button>
            </Form>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Resev;
