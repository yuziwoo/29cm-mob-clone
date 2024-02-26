import * as S from './DescriptionBoard.styled';

interface DescriptionBoardProps {
  children: React.ReactNode;
  showDescription: boolean;
  onClickDescription?: () => void;
}

const DescriptionBoard = ({
  children,
  showDescription,
  onClickDescription,
}: DescriptionBoardProps) => {
  return (
    <S.DescriptionBoardStyle
      $showDescription={showDescription}
      onClick={() => {
        if (onClickDescription) {
          onClickDescription();
        }
      }}
    >
      {children}
    </S.DescriptionBoardStyle>
  );
};

export default DescriptionBoard;
