import React from "react";
import styled from "styled-components";
import BoardSummaryitem from "./Summaryitem";
import { HomeData } from "../mock/Board";
import { IBoardSummary } from "../../../types/board";
import { BoardArticle } from "../../../router";
import { hover } from "../../../style/hover";
import { Link } from "react-router-dom";

const BoardSummary = ({ title, image, boardData }: IBoardSummary) => {
  const routerData = BoardArticle.filter((router) => router.label === title);
  const { path } = routerData[0];

  return (
    <Container>
      <Title to={path}>
        <span>{title}</span>
      </Title>
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
`;

const Title = styled(Link)`
  box-sizing: border-box;
  border-radius: 1.5em;
  width: 100%;
  padding: 30px;
  background-color: #dddddd;
  color: #000000;
  display: flex;
  align-items: center;
  ${hover}
  span {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default BoardSummary;
