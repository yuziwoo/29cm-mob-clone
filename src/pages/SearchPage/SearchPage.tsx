import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useSearch } from '../../hooks/search/useSearch';
import { PageStyle as S } from './SearchPage.styled';
import RecentSearch from '../../components/search/RecentSearch/RecentSearch';
import SearchWordRanking from '../../components/search/SearchWordRanking/SearchWordRanking';

const SearchPage = () => {
  const { searchWordRankingQuery, getRecentSearch, updateRecentSearch } = useSearch();

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
        <SearchWordRanking words={searchWordRankingQuery.data} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default SearchPage;
