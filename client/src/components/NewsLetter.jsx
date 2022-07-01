import React from "react";

import { FiSend } from "react-icons/fi/";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  background-color: #e2d5d5;
`;
const Title = styled.h1`
  margin: 50px auto;
  font-size: x-large;
  display: flex;
  justify-content: center;
  font-size: 70px;
  margin-bottom: 40px;
`;
const Desc = styled.p`
  margin-bottom: 40px;
  font-size: 20px;
  color: rgb(121, 109, 109);
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  height: 30px;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  height: 30px;
  border: none;
  background-color: teal;
  color: white;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favourite products</Desc>
      <InputContainer>
        <Input placeholder="Your Email"></Input>
        <Button type="">
          <FiSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
