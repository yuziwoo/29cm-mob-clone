import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & svg {
    width: 20%;
    height: 100%;
  }
`;

const EmptyStar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const FullStar = styled.div<{ $percentage: number }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  left: 0;
  top: 0;
  clip-path: inset(0 ${({ $percentage }) => 100 - $percentage}% 0 0);
`;

export const ComponentStyle = {
  Component,
  EmptyStar,
  FullStar,
};
