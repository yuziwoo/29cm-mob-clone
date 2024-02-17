import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SectionMyPage = styled.section`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};

  & h1 {
    font-size: 18px;
    font-weight: 700;
    color: ${theme.color.BLACK};
    line-height: 1.2;
    text-align: left;
  }

  & p {
    font-size: 14px;
    color: ${theme.color.GRAY5};
    text-align: left;
    line-height: 1.2;
    font-weight: 500;
  }

  & h6 {
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (max-width: 350px) {
    & h1 {
      font-size: 16px;
    }
    & p {
      font-size: 12px;
    }
    & h6 {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 320px) {
    & h1 {
      font-size: 14px;
    }
    & p {
      font-size: 10px;
    }
    & h6 {
      font-size: 10px;
    }
  }
`;

