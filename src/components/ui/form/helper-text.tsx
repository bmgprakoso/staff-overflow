import styled from "@emotion/styled";

type Props = {
  error?: boolean;
};

export const HelperText = styled.span<Props>`
  display: block;
  font-size: 13px;
  line-height: 1.4;
  margin-top: -1.25rem;
  margin-bottom: 1.5rem;
  color: ${(props) => (props.error ? "#d32f2f" : "#757575")};

  &.error {
    color: #d32f2f;
  }

  &.success {
    color: #2e7d32;
  }
`;
