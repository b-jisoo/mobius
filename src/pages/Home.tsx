import React from "react";
import styled from "styled-components";
import Topic from "../components/Topic";
import { useRouter } from "../hooks/useRouter";
import { flexCenter } from "../style/flex";

const MainContainer = styled.main`
  display: flex;
  height: 500vh;
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

const Home = () => {
  return (
    <MainContainer>
      <MainTitle>
        게시판
        <p>원하는 게시판으로 이동해보세요</p>
        <ContentsBox>
          <Topic topic={"Q&A"} />
          <Contents>지식</Contents>
          <Contents>커뮤니티</Contents>
          <Contents>공지사항</Contents>
        </ContentsBox>
      </MainTitle>
    </MainContainer>
  );
};

export default Home;
