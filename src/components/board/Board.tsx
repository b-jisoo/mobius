import React from "react";
import { flexCenter } from "../../style/flex";
import BoardList from "./List";
import { CommunityData } from "./mock/Board";
import ButtonBox from "./util/BoardButtonBox";
import styled from "styled-components";
import Pagination from "./util/Pagination";
import { BoardArticle } from "../../router";

const Board = () => {
  const currentPath = window.location.pathname;
  const Article = BoardArticle.filter((router) => router.path === currentPath);
  return (
    <Container>
      <BoardTitle>{Article[0].label}</BoardTitle>
      <ButtonBox />
      <BoardContainer>
        <BoardList Data={CommunityData} />
      </BoardContainer>
      <Pagination />
    </Container>
  );
};

const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
`;
const BoardTitle = styled.div`
  border-radius: 0.5em;
  width: 100%;
  height: 30px;
  padding: 30px;
  background-color: #cecece;
  margin: 30px 0;

  font-size: 23px;
  font-weight: 600;
`;
const BoardContainer = styled.div``;
export default Board;
