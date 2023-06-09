import React from "react";
import BoardItem from "./Item";
import styled from "styled-components";
import { IBoardList } from "../../types/board";

const BoardList = ({ Data }: IBoardList) => {
  return (
    <Container>
      {Data.map((board) => (
        <BoardItem {...board} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 1200px;
  margin-top: 80px;
`;

export default BoardList;
