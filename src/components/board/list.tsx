import React from "react";
import BoardItem from "./item";
import styled from "styled-components";
import { IBoardList } from "./type";

const Container = styled.ul`
  width: 1200px;
  margin-top: 80px;
`;

const BoardList = ({ Data }: IBoardList) => {
  return (
    <Container>
      {Data.map((board) => (
        <BoardItem {...board} />
      ))}
    </Container>
  );
};

export default BoardList;
