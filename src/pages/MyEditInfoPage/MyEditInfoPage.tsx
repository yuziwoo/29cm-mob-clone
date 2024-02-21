import { useRecoilState } from 'recoil';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { headerStateOnlyBackButton } from '../../recoil/headerState';
import * as S from './MyEditInfoPage.styled';
import { userState } from '../../recoil/auth';
import { useRouter } from '../../hooks/useRouter';
import React, { useCallback, useEffect, useState } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../styles/motion';
import { userPlaceholder } from '../../constants/user';
import { uploadeImage } from '../../api/uploader';
import { fetchUpdateUserProfile } from '../../api/firebase';
import { UserInfo } from '../../types/auth';
import MyEditInfoProfileImg from '../../components/myEditInfo/MyEditInfoProfileImg/MyEditInfoProfileImg';
import MyEditInfoList from '../../components/myEditInfo/MyEditInfoList/MyEditInfoList';

const MyEditInfoPage = () => {
  useSetHeaderState(headerStateOnlyBackButton);

  const [user, setUser] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.myEditInfo }, replace: true });
    // eslint-disable-next-line
  }, []);

  const [userDisplayName, setUserDisplayName] = useState(
    user?.displayName ? user.displayName : userPlaceholder.DISPLAY_NAME
  );

  const [userProfileImg, setUserProfileImg] = useState<null | File>(null);

  const handleChangeProfileImg = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setUserProfileImg(files[0]);
    }
  }, []);

  const handleChangeUserDisplayName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDisplayName(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    let photoURL = user?.photoURL ? user.photoURL : '';
    let displayName = userDisplayName.length > 0 ? userDisplayName : '방문자';
    if (userProfileImg) {
      photoURL = (await uploadeImage(userProfileImg)) as string;
    }
    fetchUpdateUserProfile({
      photoURL,
      displayName,
      callback: () => {
        setUser({ ...(user as UserInfo), displayName, photoURL });
        window.alert('프로필이 업데이트되었습니다.');
        navigate(-1);
      },
    });

    // eslint-disable-next-line
  }, [userProfileImg, userDisplayName, user?.displayName, user?.photoURL]);

  return (
    <S.SectionMyEditInfo>
      <MyEditInfoProfileImg
        defaultImg={user?.photoURL ? user.photoURL : userPlaceholder.PHOTO_URL}
        changedImg={userProfileImg}
        onChangeImg={handleChangeProfileImg}
      />

      <MyEditInfoList
        placeholder={userDisplayName}
        onChangeInput={handleChangeUserDisplayName}
        email={user?.email ? user.email : '없음'}
        providerId={user?.providerId !== 'firebase' ? user?.providerId : '없음'}
      />

      <S.Confirm>
        <motion.button
          className="cancel"
          whileTap={motionStyle.scaleButton.whileTap}
          transition={motionStyle.scaleButton.transition}
          onClick={() => {
            navigate(-1);
          }}
        >
          <p>취소</p>
        </motion.button>
        <motion.button
          className="submit"
          whileTap={motionStyle.scaleButton.whileTap}
          transition={motionStyle.scaleButton.transition}
          onClick={handleSubmit}
        >
          <p>수정</p>
        </motion.button>
      </S.Confirm>
    </S.SectionMyEditInfo>
  );
};

export default MyEditInfoPage;
