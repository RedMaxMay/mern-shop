import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { PROJ_NAME } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>{PROJ_NAME} © {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
