import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  alidng-items: center;
  padding: 6px 0;
`;

export const HiddenCheckbox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  & p {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.color.BLACK};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  & svg {
    width: 18px;
    margin-right: 10px;
  }

  & h1 {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.color.BLACK};
  }
`;
