import React from "react";
import styled from "styled-components";

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
`;
const UserName = styled.div`
  font-size: 15px;
  opacity: 0.6;
`;

interface Props {
  title: string;
  username: string;
}
[];

const TopicItem = ({ title, username }: Props) => {
  return (
    <Container>
      <UserName>{username}</UserName>
      <Title>{title}</Title>
    </Container>
  );
};

export default TopicItem;
