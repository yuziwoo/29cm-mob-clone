import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SectionLogin = styled.section`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
`;

export const Logo = styled.div`
  width: 182.5px;
  height: 45px;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Title = styled.div`
  position: relative;
  padding: 30px 0;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: ${theme.color.BLACK};
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  & h1 {
    font-size: 16px;
    font-weight: 500;
    position: relative;
    display: inline-block;
    padding-right: 20px;
    background: ${theme.color.WHITE};
    color: ${theme.color.BLACK};
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 10px;

  & a {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    color: ${theme.color.BLACK};
  }
`;
