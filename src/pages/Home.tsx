import React from "react";
import styled from "styled-components";
import BoardSummary from "../components/board/summary/Summary";
import { useRouter } from "../hooks/useRouter";
import { flexCenter } from "../style/flex";

const Home = () => {
  return (
    <MainContainer>
      <MainTitle>
        게시판
        <p>원하는 게시판으로 이동해보세요</p>
        <ContentsBox>
          <BoardSummary title={"Q&A"} />
          <BoardSummary title={"지식"} />
          <BoardSummary title={"커뮤니티"} />
          <BoardSummary title={"공지사항"} />
        </ContentsBox>
      </MainTitle>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
`;

const MainTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  p {
    font-size: 15px;
    opacity: 0.6;
    margin-top: 25px;
  }
`;

const ContentsBox = styled.div`
  margin-top: 50px;
  min-width: 1200px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 24;
`;

const Contents = styled.div`
  ${flexCenter}
  width: 100%;
  height: 500px;
  background-color: #cecece;
`;

export default Home;
