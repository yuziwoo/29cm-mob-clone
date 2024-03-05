import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useSearch } from '../../hooks/search/useSearch';
import { PageStyle as S } from './SearchPage.styled';
import RecentSearch from '../../components/search/RecentSearch/RecentSearch';

const SearchPage = () => {
  const { getSearchWordRanking, getRecentSearch, updateRecentSearch } = useSearch();

  const handleChangeRecentSearch = (newRecentSearch: string) => {
    updateRecentSearch(newRecentSearch);
  };

  return (
    <CommonPageAnimation>
      <S.Page>
        <RecentSearch
          recentSearch={getRecentSearch()}
          onChangeRecentSearch={handleChangeRecentSearch}
        />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default SearchPage;
