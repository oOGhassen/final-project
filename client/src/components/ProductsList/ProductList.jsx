import React, { useEffect } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProduct";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  //store
  const { products } = useSelector((state) => state.productReducer);
  // const { products } = productList;

  // console.log(products);

  //dispatch getallproducts
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home">
      <div className="carousels">
        <Carousel >
          <Carousel.Item style={{ color: "black" }}>
            <img
              className="d-block w-100"
              style={{ height: "50vh" }}
              src="https://medias.pourlascience.fr/api/v1/images/view/5d1b663a8fe56f77c8671165/wide_1300/image.jpg"
              alt="First slide"
            />
           
            <Carousel.Caption>
              <h3>Digital</h3>
              <p>
                i dont know
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col lg={true} sm={10}>
            <div className="listProduct">
              {products &&
                React.Children.toArray(
                  products.map((el) => <ProductCard product={el} />)
                )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
