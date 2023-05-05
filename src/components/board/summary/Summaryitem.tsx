import React from "react";
import styled from "styled-components";
import { IBoardSummary, BoardSummaryBase } from "../../../types/board";
import { hover } from "../../../style/hover";

const BoardSummaryitem = ({ title, nickname }: BoardSummaryBase) => {
  return (
    <Container>
      <NickName>
        <span>{nickname}</span>
      </NickName>
      <Title>
        <span>{title}</span>
      </Title>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 81px;
  /* background-color: #cecece; */
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #cecece;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    ${hover}
  }
`;
const NickName = styled.div`
  font-size: 15px;
  color: #666666;
  span {
    ${hover}
  }
`;

export default BoardSummaryitem;
