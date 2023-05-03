import React from "react";
import styled from "styled-components";
import { BoardBase } from "../../types/board";

const BoardItem = ({ title, nickname }: BoardBase) => {
  return (
    <Container>
      <NickName>{nickname}</NickName>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.li`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding: 20px 20px;
  box-sizing: border-box;
  border-top: 1px solid #cecece;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const NickName = styled.div`
  font-size: 15px;
  color: #666666;
`;

export default BoardItem;
