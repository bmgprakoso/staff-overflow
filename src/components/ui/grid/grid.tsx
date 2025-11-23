import styled from "@emotion/styled";

type Props = {
  cols?: number; // for >= 768px
};

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({ cols }) => `repeat(${cols ?? 2}, 1fr)`};
  }
`;
