import { css } from "styled-components";

export const blueButton = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-color: transparent;
  cursor: pointer;
  border-radius: 1.5rem;
  color: white;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  background-color: #339af0;
  &:hover {
    background-color: #228be6;
  }
  &:active {
    background-color: #1c7ed6;
  }
`;
