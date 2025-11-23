import styled from "@emotion/styled";

export const Button = styled.button<{ primary?: boolean }>`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: ${({ primary }) => (primary ? "#FFF" : "#555")};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${({ primary }) => (primary ? "#33C3F0" : "transparent")};
  border-radius: 4px;
  border: 1px solid ${({ primary }) => (primary ? "#33C3F0" : "#bbb")};
  cursor: pointer;
  box-sizing: border-box;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
  margin-bottom: 1rem;

  &:hover,
  &:focus {
    color: ${({ primary }) => (primary ? "#FFF" : "#333")};
    border-color: ${({ primary }) => (primary ? "#1EAEDB" : "#888")};
    background-color: ${({ primary }) => (primary ? "#1EAEDB" : "transparent")};
    outline: 0;
  }
`;
