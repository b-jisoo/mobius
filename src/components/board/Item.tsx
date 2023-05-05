import React from "react";
import styled from "styled-components";
import { BoardBase } from "../../types/board";
import { hover } from "../../style/hover";

const BoardItem = ({ title, nickname }: BoardBase) => {
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

const Container = styled.li`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  padding: 20px 20px;
  box-sizing: border-box;
  border-top: 1px solid #cecece;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    font-size: 1.125rem;
    font-weight: 600;
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

export default BoardItem;
