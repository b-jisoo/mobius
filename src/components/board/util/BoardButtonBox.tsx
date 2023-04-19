import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../style/flex";
import { blueButton } from "../../../style/blue";

const ButtonBox = () => {
  return (
    <Box>
      <OptionContainer>
        <FilterOption>최신순</FilterOption>
        <span> | </span>
        <FilterOption>오래된순</FilterOption>
      </OptionContainer>
      <WriteButton>글쓰기</WriteButton>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  ${flexCenter}
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
`;

const OptionContainer = styled.div`
  display: flex;
  color: #7e7e7e;
`;

const FilterOption = styled.div`
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const WriteButton = styled.div`
  ${flexCenter}
  ${blueButton}
  border-radius: 0.5em;
  width: 85px;
  height: 35px;
`;

export default ButtonBox;
