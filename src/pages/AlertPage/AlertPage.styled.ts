import styled from 'styled-components';

const Page = styled.section`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const PageStyle = {
  Page,
  Text,
};
