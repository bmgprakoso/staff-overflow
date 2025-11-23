import styled from "@emotion/styled";

export const Textarea = () => styled.textarea`
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-bottom: 1.5rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`;
