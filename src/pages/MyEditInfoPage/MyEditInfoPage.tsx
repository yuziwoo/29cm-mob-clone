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
import { InfoTableDescription } from './MyEditInfoPage.styled';
import { userPlaceholder } from '../../constants/user';
import { uploadeImage } from '../../api/uploader';
import { fetchUpdateUserProfile } from '../../api/firebase';
import { UserInfo } from '../../types/auth';

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
      <motion.label
        htmlFor="my-edit-profileImg"
        style={{ display: 'inline-block', position: 'relative' }}
        whileTap={motionStyle.scaleButton.whileTap}
        transition={motionStyle.scaleButton.transition}
      >
        {userProfileImg === null ? (
          <S.ProfileImg
            style={{
              backgroundImage: `url(${user?.photoURL ? user.photoURL : userPlaceholder.PHOTO_URL})`,
            }}
          />
        ) : (
          <S.ProfileImg
            style={{
              backgroundImage: `url(${URL.createObjectURL(userProfileImg)})`,
            }}
          />
        )}

        <S.ProfileEditMessage>프로필 사진 바꾸기</S.ProfileEditMessage>
        <S.ImgInput
          type="file"
          accept="image/*"
          name="my-edit-profileImg"
          id="my-edit-profileImg"
          onChange={handleChangeProfileImg}
        />
      </motion.label>

      <S.InfoWrap>
        <li>
          <label htmlFor="my-edit-DisplayName" style={{ display: 'inline-block' }}>
            <S.InfoTableHead>이름</S.InfoTableHead>
          </label>
          <S.InfoTableInput
            type="text"
            name="my-edit-DisplayName"
            id="my-edit-DisplayName"
            placeholder={userDisplayName}
            maxLength={10}
            onChange={handleChangeUserDisplayName}
          />
        </li>
        <li>
          <S.InfoTableHead>이메일</S.InfoTableHead>
          <InfoTableDescription>{user?.email ? user.email : '없음'}</InfoTableDescription>
        </li>
        <li>
          <S.InfoTableHead>계정연동</S.InfoTableHead>
          <InfoTableDescription>
            {user?.providerId !== 'firebase' ? user?.providerId : '없음'}
          </InfoTableDescription>
        </li>
      </S.InfoWrap>

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
