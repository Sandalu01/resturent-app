// Menu.js
import React from "react";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

const Menu = ({ name, price }) => {
  return (
    <>
      <NavbarComponent />
      <div className="menu">
        <Container>
          <Row>
            <Col md>
              <h2>Appetizers</h2>
              <Card className="food-card">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojuqzuQyZzN1KvIET9l4l-CNJ-vLXZGzMXQ&s"
                />
                <Card.Body>
                  <Card.Title>{name}rice</Card.Title>
                  <Card.Text>Price: ${price}50</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h2>Entrees</h2>
              <Card className="food-card">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-photo/front-view-tasty-boiled-rice-with-dried-pepper-garlic_179666-25779.jpg?size=626&ext=jpg&ga=GA1.1.111055513.1715136630&semt=ais_user"
                />
                <Card.Body>
                  <Card.Title>{name}rice</Card.Title>
                  <Card.Text>Price: ${price}50</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h2>Desserts</h2>
              <Card className="food-card">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojuqzuQyZzN1KvIET9l4l-CNJ-vLXZGzMXQ&s"
                />
                <Card.Body>
                  <Card.Title>{name}rice</Card.Title>
                  <Card.Text>Price: ${price}50</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* we can used for react props to optimixze the code */}
      <Footer />
    </>
  );
};

export default Menu;
