import styled from 'styled-components';

export const Icons = styled.div`
  display: flex;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: 2.8rem;
    min-width: 23px;
    min-height: 23px;
    margin-right: 2rem;
  }

  & button:last-child {
    margin-right: 0;
  }

  & button svg {
    width: 80%;
    height: 80%;
  }
`;
