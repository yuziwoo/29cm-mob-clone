import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Balloon = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background: #fafafa;
  border-radius: 10px;

  & .info p {
    padding-bottom: 1rem;
    color: ${theme.color.GRAY5};
    display: flex;
    align-items: center;
  }

  & .info p img {
    width: 1.2rem;
    margin-left: 0.8rem;
  }

  & .text-small {
    padding: 4px 10px;
    border-radius: 11px;
    background: #efefef;
  }

  & .text-small h6 {
    color: ${theme.color.BLACK};
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const BalloonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  & .balloon-wrap {
    width: calc(50% - 5px);
  }

  & .balloon-wrap ${Balloon} {
    padding-right: 10px;
  }
`;
