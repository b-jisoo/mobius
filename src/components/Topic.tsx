import React from "react";
import styled from "styled-components";
import TopicItem from "./TopicItem";

const Data = [
  {
    title:
      "스프링 인터셉터에서 repository는 사용못하는건가요?jquery 엘리먼트 이런식으로 수정 가능한 방법이 있을까요?jquery 엘리먼트 이런식으로 수정 가능한 방법이 있을까요?",
    username: "닉네임1",
  },
  {
    title: "스프링부트에서 ModelMapper가 동시성 발생할 수 있나요?",
    username: "닉네임2",
  },
  {
    title: "맥북에 스프링을 설치하는 과정에서 이런 문제가 발생했습니다.",
    username: "닉네임3",
  },
  {
    title: "jquery 엘리먼트 이런식으로 수정 가능한 방법이 있을까요?",
    username: "닉네임4",
  },
  {
    title: "스프링부트에서 ModelMapper가 동시성 발생할 수 있나요?",
    username: "닉네임5",
  },
  {
    title: "맥북에 스프링을 설치하는 과정에서 이런 문제가 발생했습니다.",
    username: "닉네임6",
  },
  {
    title: "jquery 엘리먼트 이런식으로 수정 가능한 방법이 있을까요?",
    username: "닉네임7",
  },
];

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  /* background-color: #cecece; */
`;

const TopicTitle = styled.div`
  box-sizing: border-box;
  border-radius: 1.5em;
  width: 100%;
  padding: 30px;
  background-color: #cecece;
`;

interface Props {
  topic: string;
  image?: string;
  boardData?: {
    title: string;
    content?: string;
    username: string;
  };
}

const Topic = ({ topic, image, boardData }: Props) => {
  return (
    <Container>
      <TopicTitle>{topic}</TopicTitle>
      {Data.slice(0, 5).map((data) => (
        <TopicItem {...data} />
      ))}
    </Container>
  );
};

export default Topic;
