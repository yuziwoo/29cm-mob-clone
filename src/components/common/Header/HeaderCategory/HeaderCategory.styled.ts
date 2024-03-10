import styled from 'styled-components';

const Category = styled.section`
  padding: 1.2rem 0 2.4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  & > button {
    margin: 0 0.5rem;
  }

  & > button:first-child {
    margin-left: 0;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

export const TextWrap = styled.div<{ $isActive: boolean; $color: string }>`
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 1px solid ${({ $color }) => $color};
  transition: opacity 0.2s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.35)};
  overflow: hidden;
`;

export const Text = styled.p<{ $color: string }>`
  font-size: 1.8rem;
  color: ${({ $color }) => $color};
`;

export const ComponentStyle = {
  Category,
  Nav,
  TextWrap,
  Text,
};
