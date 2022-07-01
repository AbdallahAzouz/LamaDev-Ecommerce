import React from "react";
// import "./Product.css";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Icon} {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  margin: 10px auto;
  z-index: 2;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <FaShoppingCart />
        </Icon>
        <Icon>
          <Link to={"/product/" + item._id}>
            <FaSearch />
          </Link>
        </Icon>
        <Icon>
          <FaHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
