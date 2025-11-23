import styled from "@emotion/styled";

type Props = {
  error?: boolean;
};

export const Input = styled.input<Props>`
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid ${(props) => (props.error ? "#d32f2f" : "#d1d1d1")};
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid ${(props) => (props.error ? "#d32f2f" : "#33c3f0")};
    outline: 0;
  }
`;
