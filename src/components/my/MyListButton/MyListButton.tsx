import { motion } from 'framer-motion';
import { theme } from '../../../styles/theme';
import * as S from './MyListButton.styled';
import IconRightArrow2 from '../../icons/IconRightArrow2';

interface MyListButtonProps {
  text: string;
  onClick: () => void;
}

const MyListButton = ({ text, onClick }: MyListButtonProps) => {
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
