import { motion } from 'framer-motion';
import { theme } from '../../../styles/theme';
import * as S from './MyListButton.styled';
import IconRightArrow2 from '../../icons/IconRightArrow2';

interface MyListButtonProps {
  text: string;
  onClick: () => void;
}

const MyListButton = ({ text, onClick }: MyListButtonProps) => {
  /**
   * 마이페이지에서 사용하는 리스트 버튼 컴포넌트입니다.
   * 텍스트와 onClick 함수를 지정할 수 있는 간단한 컴포넌트입니다.
   */

  return (
    <motion.div>
      <S.ListButton onClick={onClick}>
        <p>{text}</p>
        <div className="arrow">
          <IconRightArrow2 color={theme.color.BLACK} />
        </div>
      </S.ListButton>
    </motion.div>
  );
};

export default MyListButton;
