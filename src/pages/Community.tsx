import React from "react";
import styled from "styled-components";
import { flexCenter } from "../style/flex";
import BoardList from "../components/board/list";
import { CommunityData } from "../components/board/mock/Board";
import Pagination from "../components/board/util/Pagination";
import ButtonBox from "../components/board/util/BoardButtonBox";

const Community = () => {
  return (
    <Container>
      <BoardTitle>커뮤니티</BoardTitle>
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

export default Community;
