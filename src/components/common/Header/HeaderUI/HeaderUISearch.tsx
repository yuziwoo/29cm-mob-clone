import { elementId } from '../../../../constants/elementId';
import { ComponentStyle as S } from '../Header.styled';
import HeaderBackButton from '../HeaderBackButton/HeaderBackButton';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

interface HeaderUISearchProps {
  height: number | undefined;
}

const HeaderUISearch = ({ height }: HeaderUISearchProps) => {
  return (
    <>
      <S.RelatedHeight $height={height} />
      <S.Header id={elementId.common.HEADER}>
        <S.MainHeader>
          <HeaderBackButton />
          <HeaderSearch />
        </S.MainHeader>
      </S.Header>
    </>
  );
};

export default HeaderUISearch;
