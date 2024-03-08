import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
`;

const Intro = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.color.BLACK};
  padding-top: 2rem;
`;

const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.color.BLACK};
  padding-top: 1rem;
  line-height: 1.6;
`;

const Products = styled.div`
  padding-top: 2rem;
`;

export const ComponentStyle = {
  Component,
  Intro,
  Img,
  Title,
  Description,
  Products,
};
