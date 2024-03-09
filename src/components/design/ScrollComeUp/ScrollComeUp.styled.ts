import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Inner = styled.div<{ $active: boolean; $transition: string }>`
  transition: ${({ $transition }) => $transition};
  transform: translateY(${({ $active }) => ($active ? '0' : '100%')});
`;

export const ComponentStyle = {
  Component,
  Inner,
};
