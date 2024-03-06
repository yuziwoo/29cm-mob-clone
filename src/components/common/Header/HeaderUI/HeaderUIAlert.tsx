import { elementId } from '../../../../constants/elementId';
import { ComponentStyle as S } from '../Header.styled';
import HeaderBackButton from '../HeaderBackButton/HeaderBackButton';

interface HeaderUIAlertProps {
  height: number | undefined;
}

const HeaderUIAlert = ({ height }: HeaderUIAlertProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <HeaderBackButton />
          <S.Title>알림</S.Title>
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUIAlert;
