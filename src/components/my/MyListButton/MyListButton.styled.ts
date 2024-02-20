import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const ListButton = styled.button`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 18px;
    font-weight: 500;
    color: ${theme.color.BLACK};
  }

  & .arrow {
    width: 2.8rem;
    height: 2.8rem;
  }

  & .arrow svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 400px) {
    padding: 13px 0;

    & p {
      font-size: 17px;
    }
  }
`;
