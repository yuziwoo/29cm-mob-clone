import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

const Component = styled.div<{ $closeModal: boolean }>`
  position: absolute;
  z-index: ${theme.zIndex.MODAL};
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  transform: translate(-50%, 0);
  display: ${({ $closeModal }) => ($closeModal ? 'none' : 'flex')};
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

const Shadow = styled.div<{ $isOpen: boolean }>`
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity ${({ $isOpen }) => ($isOpen ? '0.5s' : '0.3s')} ${theme.transition.EASE_INOUT};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

const ContentWrap = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  animation-name: ${({ $isOpen }) => ($isOpen ? theme.animation.COME_UP : theme.animation.GO_DOWN)};
  animation-duration: 0.3s;
  animation-timing-function: ${theme.transition.EASE_INOUT};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: relative;
  z-index: 2;

  & > .modal-motion-content {
    width: 100%;
    padding: 0 ${theme.padding.DEFAULT} 4rem;
    background: white;
    position: relative;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 0;
    min-height: 300px;
    max-height: 90vh;
    height: fit-content;
    box-shadow: 0px 7.8px 0px rgba(255, 255, 255, 0.877), 0px 17.2px 0px rgba(255, 255, 255, 1.154),
      0px 28.8px 0px rgba(255, 255, 255, 1.325), 0px 43.4px 0px rgba(255, 255, 255, 1.436),
      0px 62.6px 0px rgba(255, 255, 255, 1.505), 0px 88.6px 0px rgba(255, 255, 255, 1.538),
      0px 125.7px 0px rgba(255, 255, 255, 1.535), 0px 182.5px 0px rgba(255, 255, 255, 1.492),
      0px 281.3px 0px rgba(255, 255, 255, 1.389), 0px 500px 0px rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 400px) {
    & > .modal-motion-content {
      min-height: 150px;
    }
  }
`;

const DragBar = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

  &::after {
    position: absolute;
    display: block;
    content: '';
    bottom: 1rem;
    width: 60px;
    height: 4px;
    border-radius: 2px;
    background: ${theme.color.GRAY2};
  }
`;

export const ComponentStyle = {
  Component,
  Shadow,
  ContentWrap,
  DragBar,
};
