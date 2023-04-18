import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 100px;
  width: 100%;
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid #cecece;
`;

const Contents = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <Container>
      <Contents>Footer</Contents>
    </Container>
  );
};

export default Footer;
