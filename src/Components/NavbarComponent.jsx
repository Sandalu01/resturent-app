import React from "react";
import { Navbar, Nav, Container, NavDropdown, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="navi">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Foodddie's Kitchen
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to={"/about"} className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/reservation" className="nav-link-custom">
                Reservation
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className="nav-link-custom">
                Menu
              </Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Test">
                  my test
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/reservation">
                  my loaction
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
