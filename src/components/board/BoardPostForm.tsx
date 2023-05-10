import React from "react";
import styled from "styled-components";

const BoardPostForm = () => {
  return (
    <Container>
      <Title>게시판 글쓰기</Title>
      <Form action="submit.php" method="POST">
        <Label htmlFor="title">제목:</Label>
        <Input type="text" id="title" name="title" required />

        <Label htmlFor="content">내용:</Label>
        <TextArea id="content" name="content" rows={8} required />

        <SubmitButton type="submit" value="글쓰기" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  margin-top: 20px;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 0.2em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-bottom: 10px;
  resize: none;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

export default BoardPostForm;
