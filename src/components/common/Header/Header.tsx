import { useEffect, useState } from 'react';
import * as S from './Header.styled';
import { ROUTE_PATH } from '../../../constants/path';
import IconLogo from '../../icons/IconLogo';
import HeaderShadow from './HeaderShadow/HeaderShadow';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderCategory from './HeaderCategory/HeaderCategory';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { scrollTop } from '../../../utils/scrollTop';
import IconLeftArrow from '../../icons/IconLeftArrow';
import { useRouter } from '../../../hooks/useRouter';
import { useLocation } from 'react-router-dom';
import { headerUI } from '../../../constants/headerUI';
import { theme } from '../../../styles/theme';
import { elementId } from '../../../constants/elementId';

interface HeaderProps {
  firstPath: string;
}

const Header = ({ firstPath }: HeaderProps) => {
  /**
   * header는 (pathname의 첫번째 패스)에 따라 UI를 다르게 보여줍니다.
   * 패스의 개수가 3개 이상 중첩된 경우에는 뒤로가기 버튼만 보여줍니다. ('my/edit/info')
   * 수정할 때 더 간편하게 하고, 알아보기 쉽도록 컴포넌트를 분리했습니다.
   */

  const { pathname } = useLocation();

  const [height, setHeight] = useState<undefined | number>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setHeight(document.getElementById(elementId.common.HEADER)?.offsetHeight);
    }, 100);
  }, [pathname]);

  const { navigate } = useRouter();

  const handleClickLogo = () => {
    if (firstPath === '') {
      scrollTop();
      return;
    }
    navigate(ROUTE_PATH.root);
  };

  if (headerUI.HIDDEN.includes(firstPath)) return <></>;

  if (headerUI.MAIN.includes(firstPath))
    return (
      <>
        <S.RelatedHeight $height={height} />
        <S.Header id={elementId.common.HEADER} $backgroundTransparent={true}>
          <HeaderShadow />
          <S.MainHeader>
            <motion.button
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              onClick={handleClickLogo}
            >
              <S.Logo>
                <IconLogo color={theme.color.WHITE} />
              </S.Logo>
            </motion.button>
            <HeaderIcons color={theme.color.WHITE} />
          </S.MainHeader>
          <HeaderCategory location={firstPath} />
        </S.Header>
      </>
    );

  if (headerUI.ONLY_BACKBUTTON.includes(firstPath) || pathname.split('/').length >= 4)
    return (
      <>
        <S.RelatedHeight $height={height} />
        <S.Header id={elementId.common.HEADER}>
          <S.MainHeader>
            <motion.button
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              onClick={() => navigate(-1)}
            >
              <S.BackButton>
                <IconLeftArrow color={theme.color.BLACK} />
              </S.BackButton>
            </motion.button>
          </S.MainHeader>
        </S.Header>
      </>
    );

  if (headerUI.BACKBUTTON_AND_ICONS.includes(firstPath))
    return (
      <>
        <S.RelatedHeight $height={height} />
        <S.Header id={elementId.common.HEADER}>
          <S.MainHeader>
            <motion.button
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              onClick={() => navigate(-1)}
            >
              <S.BackButton>
                <IconLeftArrow color={theme.color.BLACK} />
              </S.BackButton>
            </motion.button>
            <HeaderIcons color={theme.color.BLACK} />
          </S.MainHeader>
        </S.Header>
      </>
    );

  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <motion.button
            whileTap={motionStyle.primaryButton.whileTap}
            transition={motionStyle.primaryButton.transition}
            onClick={handleClickLogo}
          >
            <S.Logo>
              <IconLogo color={theme.color.BLACK} />
            </S.Logo>
          </motion.button>
          <HeaderIcons color={theme.color.BLACK} />
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default Header;
