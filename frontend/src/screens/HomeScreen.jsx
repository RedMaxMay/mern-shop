import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error?.error}
        </Message>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
