import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal!! Free shipping On Orders Over 50 L.E</Container>
  );
};

export default Announcement;
