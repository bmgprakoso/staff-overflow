import styled from "@emotion/styled";

export const Button = styled.button<{ primary?: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  height: 38px;
  padding: 0 30px;
  margin-bottom: 1rem;

  /* Typography */
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;

  /* Colors */
  color: ${({ primary }) => (primary ? "#FFF" : "#555")};
  background-color: ${({ primary }) => (primary ? "#33C3F0" : "transparent")};

  /* Border */
  border: 1px solid ${({ primary }) => (primary ? "#33C3F0" : "#bbb")};
  border-radius: 4px;

  /* Interaction */
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus {
    outline: 0;
    color: ${({ primary }) => (primary ? "#FFF" : "#333")};
    background-color: ${({ primary }) => (primary ? "#1EAEDB" : "transparent")};
    border-color: ${({ primary }) => (primary ? "#1EAEDB" : "#888")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
