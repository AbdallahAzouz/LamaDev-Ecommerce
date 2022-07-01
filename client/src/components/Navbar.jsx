import React from "react";

import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <div className="navbar">
      <Container>
        <Wrapper>
          <Left className="left">
            <Language className="language">EN</Language>
            <SearchContainer>
              <Input placeholder="Search"></Input>
              <FaSearch style={{ color: "grey", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/">
              <Logo>A3D</Logo>
            </Link>
          </Center>
          <Right>
            <Link to="/register">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <FaShoppingBasket />
                <span>{quantity}</span>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
