import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonWrap = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
  
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  min-width: 23px;
  min-height: 23px;

  & svg {
    width: 80%;
    height: 80%;
  }
`;

const Count = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 50%;
  background: ${theme.color.SIGNATURE};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 100%;
  bottom: 100%;
  transform: translate(-50%, 50%);
`;

const CountText = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.color.WHITE};
  text-align: center;
`;

export const ComponentStyle = {
  Component,
  ButtonWrap,
  IconWrap,
  Count,
  CountText,
};
