import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid #cecece;
  padding: 60px 0 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: #7e7e7e;
  }
  &:active {
    color: #555555;
  }
`;
const ArrowButton = styled.span`
  cursor: pointer;
`;

const Pages = styled.div`
  span {
    margin: 0 10px;
    color: black;
    font-weight: 600;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #228be6;
    }
    &:active {
      color: #1c7ed6;
    }
  }
`;

const Pagination = () => {
  return (
    <Container>
      <ArrowButton>Previous</ArrowButton>
      <Pages>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Pages>
      <ArrowButton>Next</ArrowButton>
    </Container>
  );
};

export default Pagination;
