import * as S from './ToggleText.styled';
import IconDownArrow2 from '../../icons/IconDownArrow2';
import { theme } from '../../../styles/theme';
import { useState } from 'react';
import SkeletonText from '../../skeleton/common/SkeletonText';
import { motion } from 'framer-motion';

interface ToggleTextProps {
  children: React.ReactNode;
  title?: string | undefined;
  initialShowing?: boolean;
}

const ToggleText = ({ children, title, initialShowing = false }: ToggleTextProps) => {
  /**
   * 상품 상세페이지 가장 하단에서 사용되는 토글 메뉴입니다.
   */

  const [showToggle, setShowToggle] = useState(initialShowing);

  if (title === undefined)
    return (
      <S.ToggleComponent>
        <S.ToggleBlock>
          <SkeletonText height="18px" width="200px" />
          <S.Arrow>
            <IconDownArrow2 color={theme.color.BLACK} />
          </S.Arrow>
        </S.ToggleBlock>
      </S.ToggleComponent>
    );

  return (
    <S.ToggleComponent
      onClick={() => {
        setShowToggle((prevShowToggle) => !prevShowToggle);
      }}
    >
      <S.ToggleBlock>
        <S.Title>{title}</S.Title>
        <S.Arrow style={{ transform: `rotate(${showToggle ? -180 : 0}deg)` }}>
          <IconDownArrow2 color={theme.color.BLACK} />
        </S.Arrow>
      </S.ToggleBlock>
      {showToggle && (
        <S.ToggleData>
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </S.ToggleData>
      )}
    </S.ToggleComponent>
  );
};

export default ToggleText;
