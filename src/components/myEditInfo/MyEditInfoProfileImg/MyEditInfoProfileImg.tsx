import { ComponentStyle as S } from './MyEditInfoProfileImg.styled';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';

interface MyEditInfoProfileImgProps {
  defaultImg: string;
  changedImg: null | File;
  onChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyEditInfoProfileImg = (props: MyEditInfoProfileImgProps) => {
  /**
   * 프로필 이미지를 바꿀 수 있는 컴포넌트입니다.
   */

  const { defaultImg, changedImg, onChangeImg } = props;

  return (
    <S.Component>
      <motion.label
        htmlFor="my-edit-profileImg"
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        <S.ProfileImg
          style={{
            backgroundImage: `url(${changedImg ? URL.createObjectURL(changedImg) : defaultImg})`,
          }}
        />
        <S.EditProfileImg>프로필 사진 바꾸기</S.EditProfileImg>
        <S.Input
          type="file"
          accept="image/*"
          name="my-edit-profileImg"
          id="my-edit-profileImg"
          onChange={onChangeImg}
        />
      </motion.label>
    </S.Component>
  );
};

export default MyEditInfoProfileImg;
