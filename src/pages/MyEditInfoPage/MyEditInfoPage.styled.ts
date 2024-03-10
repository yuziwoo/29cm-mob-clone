import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 16px 120px;
`;

const Confirm = styled.div`
  width: 100%;
  padding-top: 8rem;
  display: flex;
  justify-content: space-between;

  & button {
    width: calc(50% - 5px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    border-radius: 10px;
  }

  & button p {
    font-size: 16px;
    font-weight: 700;
  }

  & .cancel {
    border: 1px solid ${theme.color.GRAY3};
  }

  & .cancel p {
    color: ${theme.color.BLACK};
  }

  & .submit {
    background: ${theme.color.INPUT_VALID};
  }

  & .submit p {
    color: ${theme.color.WHITE};
  }
`;

export const PageStyle = {
  Page,
  Confirm
};