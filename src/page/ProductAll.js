import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from '../component/productCard'; 

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/hydena03/<
    noona-shop/products/`;
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
