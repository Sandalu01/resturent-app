import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <footer
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 0",
          }}
        >
          <Container>
            <p>
              &copy; {new Date().getFullYear()} Fooddddie's Kitchen. All Rights
              Reserved.
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default Footer;
