import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Balloon = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 20px;
  background: #fafafa;
  border-radius: 1rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    min-width: 20px;
    min-height: 20px;
  }
`;

const Info = styled.div``;

const TextSmall = styled.p`
  font-size: 14px;
  padding-bottom: 1rem;
  color: ${theme.color.GRAY5};
  display: flex;
  align-items: center;

  & img {
    width: 1.2rem;
    margin-left: 0.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const TextBig = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.color.BLACK};
  padding-top: 0.2rem;
  text-align: left;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

const TextBoxSmall = styled.div`
  padding: 5px 11px;
  border-radius: 14px;
  background: #efefef;

  & span {
    color: ${theme.color.BLACK};
    font-size: 12px;
    font-weight: 500;
  }
`;

const Arrow = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 20px;
  min-height: 20px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const BalloonContainer = styled.div`
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

export const ComponentStyle = {
  Balloon,
  BalloonContainer,
  Info,
  TextSmall,
  TextBig,
  TextBoxSmall,
  Arrow,
};
