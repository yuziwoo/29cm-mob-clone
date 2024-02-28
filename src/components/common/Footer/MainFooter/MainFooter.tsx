import * as S from './MainFooter.styled';
import IconFooterHome from '../../../icons/IconFooter/IconFooterHome';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { useRouter } from '../../../../hooks/useRouter';
import { scrollTop } from '../../../../utils/scrollTop';
import { ROUTE_PATH } from '../../../../constants/path';
import IconFooterCategory from '../../../icons/IconFooter/IconFooterCategory';
import IconFooterSearch from '../../../icons/IconFooter/IconFooterSearch';
import IconFooterLike from '../../../icons/IconFooter/IconFooterLike';
import IconFooterMy from '../../../icons/IconFooter/IconFooterMy';
import { useCallback } from 'react';

interface MainFooterProps {
  firstPath: string;
}

const MainFooter = ({ firstPath }: MainFooterProps) => {
  /**
   * MainFooter 기능
   * - firstPath에 따라 알맞는 버튼을 활성화 시킵니다.
   * - 활성화된 상태의 버튼을 클릭시 navigate가 아닌 scrollTop 기능이 실행됩니다.
   */

  const { navigate } = useRouter();

  const handleClickButton = useCallback(
    (isActive: boolean, path: string) => {
      if (isActive) {
        scrollTop();
        return;
      }
      navigate(path);
    },
    [navigate]
  );

  const buttons = [
    {
      name: 'HOME',
      path: ROUTE_PATH.root,
      includePath: [
        '',
        ROUTE_PATH.root,
        ROUTE_PATH.man.replace('/', ''),
        ROUTE_PATH.life.replace('/', ''),
        ROUTE_PATH.woman.replace('/', ''),
        ROUTE_PATH.best.replace('/', ''),
      ],
      icon: <IconFooterHome />,
    },
    {
      name: 'CATEGORY',
      path: ROUTE_PATH.category,
      includePath: [ROUTE_PATH.category.replace('/', '')],
      icon: <IconFooterCategory />,
    },
    {
      name: 'SEARCH',
      path: ROUTE_PATH.search,
      includePath: [ROUTE_PATH.search.replace('/', ''), ROUTE_PATH.searchDetail.split('/')[1]],
      icon: <IconFooterSearch />,
    },
    {
      name: 'LIKE',
      path: ROUTE_PATH.like,
      includePath: [ROUTE_PATH.like.replace('/', '')],
      icon: <IconFooterLike />,
    },
    {
      name: 'my',
      path: ROUTE_PATH.my,
      includePath: [ROUTE_PATH.my.replace('/', '')],
      icon: <IconFooterMy />,
    },
  ];

  return (
    <S.MainFooterBlock>
      {buttons.map(({ name, includePath, path, icon }, idx) => {
        const isActive = includePath.includes(firstPath);
        return (
          <S.Button onClick={() => handleClickButton(isActive, path)} key={idx}>
            <motion.div
              whileTap={motionStyle.primaryButton.whileTap}
              transition={motionStyle.primaryButton.transition}
              className="wrap"
            >
              <div style={{ opacity: isActive ? 1 : 0.3 }}>{icon}</div>
              <p>{name}</p>
            </motion.div>
          </S.Button>
        );
      })}
    </S.MainFooterBlock>
  );
};

export default MainFooter;
