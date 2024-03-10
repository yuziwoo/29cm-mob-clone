import { ComponentStyle as S } from './DescriptionBoard.styled';

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
  /**
   * showDescription을 true로 설정하면 DescriptionBoard가 유저에게 보여집니다.
   * children에 보여줄 내용을 담아주면 됩니다.
   */

  return (
    <S.Component
      $showDescription={showDescription}
      onClick={() => {
        if (onClickDescription) {
          onClickDescription();
        }
      }}
    >
      {children}
    </S.Component>
  );
};

export default DescriptionBoard;
