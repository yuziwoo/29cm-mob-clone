import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 3rem;
`;

const SelectAll = styled.div`
  & button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Checkbox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const SelectAmount = styled.p`
  font-size: 16px;
  padding-left: 1rem;
  color: ${theme.color.BLACK};
  font-weight: 600;
`;

const SelectRemove = styled.p`
  font-size: 16px;
  padding-left: 1rem;
  color: ${theme.color.GRAY7};
  font-weight: 500;
`;

const List = styled.div``

export const ComponentStyle = {
  Component,
  Header,
  SelectAll,
  Checkbox,
  SelectAmount,
  SelectRemove,
  List
};
