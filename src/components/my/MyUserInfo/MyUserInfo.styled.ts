import styled, { keyframes } from 'styled-components';

export const SectionUserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgWrap = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2rem;
  background-size: cover;
  background-position: center center;
`;

const textslide = keyframes`
0%, 45% {
  transform: translateY(0);
}
50%, 95% {
  transform: translateY(-33%);
}
100% {
  transform: translateY(-66%);
}
`;

export const TextWrap = styled.div`
  overflow: hidden;
  position: relative;

  & h1 {
    text-indent: 1rem;
  }

  & .container {
    position: absolute;
    left: 0;
    top: 0;
    animation: ${textslide} 7s infinite linear;
  }
`;

export const Arrow = styled.button`
  width: 2.8rem;
  height: 2.8rem;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
