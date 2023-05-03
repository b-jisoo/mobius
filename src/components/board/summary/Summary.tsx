import React from "react";
import styled from "styled-components";
import BoardSummaryitem from "./Summaryitem";
import { HomeData } from "../mock/Board";
import { IBoardSummary } from "../../../types/board";

const BoardSummary = ({ title, image, boardData }: IBoardSummary) => {
  return (
    <Container>
      <Title>{title}</Title>
      {HomeData.slice(0, 5).map((data, i) => (
        <BoardSummaryitem key={i} {...data} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  /* background-color: #cecece; */
`;

const Title = styled.div`
  box-sizing: border-box;
  border-radius: 1.5em;
  width: 100%;
  padding: 30px;
  background-color: #cecece;
`;

export default BoardSummary;
