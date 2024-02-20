import * as S from './MainFooter.styled';
import IconFooterHome from '../../../icons/IconFooter/IconFooterHome';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../../../styles/theme';
import { motionStyle } from '../../../../styles/motion';
import { useRouter } from '../../../../hooks/useRouter';
import { scrollTop } from '../../../../utils/scrollTop';
import { ROUTE_PATH } from '../../../../constants/path';
import IconFooterCategory from '../../../icons/IconFooter/IconFooterCategory';
import IconFooterSearch from '../../../icons/IconFooter/IconFooterSearch';
import IconFooterLike from '../../../icons/IconFooter/IconFooterLike';
import IconFooterMy from '../../../icons/IconFooter/IconFooterMy';

interface MainFooterProps {
  location: string;
}

const getActiveButton = (location: string) => {
  if (location.length === 0) return 'home';

  switch (location) {
    case 'man' || 'life' || 'woman' || 'best': {
      return 'home';
    }
    case 'category': {
      return 'category';
    }
    case 'search': {
      return 'search';
    }
    case 'like': {
      return 'like';
    }
    case 'my': {
      return 'my';
    }
    default:
      return 'undefined';
  }
};

const MainFooter = ({ location = '' }: MainFooterProps) => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    setActiveButton(getActiveButton(location));
  }, [location]);

  const { navigate } = useRouter();

  const handleClickButton = (name: string, path: string) => {
    if (activeButton === name) {
      scrollTop();
      return;
    }
    navigate(path);
  };

  const getColor = (name: string) => {
    if (activeButton === name) return theme.color.ACTIVE;
    return theme.color.FOOTER_INACTIVE;
  };

  const buttons = [
    {
      name: 'home',
      path: ROUTE_PATH.root,
      icon: <IconFooterHome color={getColor('home')} />,
    },
    {
      name: 'category',
      path: ROUTE_PATH.category,
      icon: <IconFooterCategory color={getColor('category')} />,
    },
    {
      name: 'search',
      path: ROUTE_PATH.search,
      icon: <IconFooterSearch color={getColor('search')} />,
    },
    {
      name: 'like',
      path: ROUTE_PATH.like,
      icon: <IconFooterLike color={getColor('like')} />,
    },
    {
      name: 'my',
      path: ROUTE_PATH.my,
      icon: <IconFooterMy color={getColor('my')} />,
    },
  ];

  return (
    <S.MainFooterBlock>
      {buttons.map(({ name, path, icon }, idx) => (
        <S.button
          onClick={() => handleClickButton(name, path)}
          $active={activeButton === name}
          key={idx}
        >
          <motion.div
            whileTap={motionStyle.primaryButton.whileTap}
            transition={motionStyle.primaryButton.transition}
            className="wrap"
          >
            {icon}
            <p>{name}</p>
          </motion.div>
        </S.button>
      ))}
    </S.MainFooterBlock>
  );
};

export default MainFooter;
