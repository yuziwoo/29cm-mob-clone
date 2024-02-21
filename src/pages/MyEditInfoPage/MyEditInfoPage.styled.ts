import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const SectionMyEditInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 16px 120px;
`;

export const InfoWrap = styled.ul`
  width: 100%;
  padding: 3rem 0;

  & li {
    padding: 2rem 0;
    border-bottom: 1px solid ${theme.color.GRAY3};
    display: flex;
    align-items: center;
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const infoFont = css`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.color.BLACK};

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const InfoTableHead = styled.p`
  ${infoFont}
  width: 115px;
`;

export const InfoTableInput = styled.input`
  ${infoFont}
`;

export const InfoTableDescription = styled.p`
  ${infoFont}
`;

export const Confirm = styled.div`
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
