import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDigitalProd } from "../../redux/actions/actionProduct";
import DigitalProdCard from "./DigitalProdCard";
import { Col, Container, Row } from "react-bootstrap";
import "./Digital.css";

const DigitalProductList = () => {
  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDigitalProd());
  }, [dispatch]);

  return (
    <div >
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
              {products &&
                React.Children.toArray(
                  products.map((el) => <DigitalProdCard digit={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalProductList;
