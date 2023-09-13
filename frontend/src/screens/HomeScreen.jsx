import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((prod) => (
          <Col
            style={{ display: "flex" }}
            key={prod._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
