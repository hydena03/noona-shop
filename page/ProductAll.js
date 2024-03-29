import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from '../src/component/ProductCard'; 

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products/`;
    // let url = `http://my-json-server.typicode.com/hydena03/H-M-react/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
