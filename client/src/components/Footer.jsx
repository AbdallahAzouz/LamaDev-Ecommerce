import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px;
`;
const Left = styled.div``;

const Logo = styled.h1`
  margin-bottom: 30px;
`;
const Desc = styled.p``;

const Center = styled.div`
  padding: 20px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  padding: 20px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing eListItemt.
          Accusantium, adipisci natus esse qui dolorem eum non, numquam hic
          atque nemo sed dolorum iure expListItemcabo aliquid quam labore. Eos,
          nam beatae.
        </Desc>
      </Left>
      <Center>
        <h2>Useful Links</h2>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
        </List>
      </Center>
      <Right>
        <h2>Contact</h2>
        <Icons>
          <MdLocationPin />
          <p>622 Dixie Path , South Tobinchester 98336</p>
        </Icons>
        <Icons>
          <BsTelephoneFill />
          <p>+1 234 56 78</p>
        </Icons>
        <Icons>
          <FiMail />
          <p>support@lama.dev</p>
        </Icons>
      </Right>
    </Container>
  );
};

export default Footer;
