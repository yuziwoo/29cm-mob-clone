import { useQuery } from '@tanstack/react-query';
import { localStorageAPI } from '../../constants/localStorage';
import { mockSearchWordRanking } from '../../mock/search';
import { FormatedProductProps } from '../../types/product';
import { useBrand } from '../brand/useBrand';
import { useProduct } from '../product/useProduct';
import { queryAPI } from '../../constants/query';
import { SearchWordRankingProps } from '../../types/search';

export const useSearch = () => {
  /**
   * 검색 기능을 사용할때 사용합니다.
   */

  const { brandQuery } = useBrand();
  const { productQuery } = useProduct();

  const searchBrand = (keyword: string) => {
    if (!brandQuery.isSuccess) return [];

    const searchResult = brandQuery.data.filter(
      ({ nameKo, nameEn }) => nameKo.includes(keyword) || nameEn.includes(keyword)
    );

    return searchResult;
  };

  const searchProduct = (keyword: string): FormatedProductProps[] => {
    if (!productQuery.isSuccess) return [];

    const formattedProducts: FormatedProductProps[] = Object.keys(productQuery.data).map((key) => ({
      id: key,
      ...productQuery.data[key],
    }));
    const searchResult = formattedProducts.filter(({ name }) => name.includes(keyword));

    return searchResult;
  };

  const searchWordRankingQuery = useQuery<SearchWordRankingProps>({
    queryKey: [queryAPI.queryKey.searchWordRanking],
    queryFn: async () => {
      const result = mockSearchWordRanking;
      return result;
    },
  });

  const getRecentSearch = (): null | string => {
    const result = localStorage.getItem(localStorageAPI.recentSearch.name);

    return result;
  };

  const addRecentSearch = (keyword: string) => {
    const localStorageData = localStorage.getItem(localStorageAPI.recentSearch.name);
    if (localStorageData === null || localStorageData === '') {
      localStorage.setItem(localStorageAPI.recentSearch.name, keyword);
      return;
    }

    const newData = [
      keyword,
      ...localStorageData.split(localStorageAPI.recentSearch.separateSymbol),
    ];
    const filteredNewData = newData
      .filter((keyword, index) => newData.indexOf(keyword) === index)
      .join(localStorageAPI.recentSearch.separateSymbol);

    localStorage.setItem(localStorageAPI.recentSearch.name, filteredNewData);
  };

  const updateRecentSearch = (newRecentSearch: string) => {
    localStorage.setItem(localStorageAPI.recentSearch.name, newRecentSearch);
  };

  return {
    searchBrand,
    searchProduct,
    searchWordRankingQuery,
    getRecentSearch,
    addRecentSearch,
    updateRecentSearch,
  };
};
