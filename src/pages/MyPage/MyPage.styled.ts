import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  padding: ${theme.padding.BODY_WITH_BOTTOM_MARGIN};
`;

const ListWrap = styled.div`
  padding: 3rem 2rem 0;
`;

const ListTitle = styled.h2`
  padding: 2rem 0;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const PageStyle = {
  Page,
  ListWrap,
  ListTitle,
};
