import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Component = styled.div`
  width: 100%;
  display: flex;
  justify-conent: center;

  & label {
    display: inline-block;
    margin: auto;
    position: relative;
  }
`;

const ProfileImg = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  margin: auto;
`;

const EditProfileImg = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
  color: ${theme.color.INPUT_VALID};
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ComponentStyle = {
  Component,
  ProfileImg,
  EditProfileImg,
  Input,
};
