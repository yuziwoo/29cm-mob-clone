import * as S from './HeaderCategory.styled';
import { ROUTE_PATH } from '../../../../constants/path';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../../styles/motion';
import { scrollTop } from '../../../../utils/scrollTop';
import { useNavigate } from 'react-router-dom';

interface HeaderCategoryProps {
  location?: string;
}

const HeaderCategory = ({ location = '' }: HeaderCategoryProps) => {
  const category = [
    { path: ROUTE_PATH.man, locationKey: 'man', text: '맨' },
    { path: ROUTE_PATH.root, locationKey: '', text: '홈' },
    { path: ROUTE_PATH.life, locationKey: 'life', text: '라이프' },
    { path: ROUTE_PATH.woman, locationKey: 'woman', text: '우먼' },
    { path: ROUTE_PATH.best, locationKey: 'best', text: '베스트' },
  ];

  const navigate = useNavigate();

  const handleClickButton = ({ path, locationKey }: { path: string; locationKey: string }) => {
    if (location === locationKey) {
      scrollTop();
      return;
    }
    navigate(path);
  };

  return (
    <S.Category className="category">
      <S.CategoryWrap>
        {category.map(({ path, locationKey, text }) => (
          <motion.div
            className={`list${location === locationKey ? ' active' : ''}`}
            key={text}
            whileTap={motionStyle.primaryButton.whileTap}
            transition={motionStyle.primaryButton.transition}
          >
            <button onClick={() => handleClickButton({ path, locationKey })}>
              <p>{text}</p>
            </button>
          </motion.div>
        ))}
      </S.CategoryWrap>
    </S.Category>
  );
};

export default HeaderCategory;
