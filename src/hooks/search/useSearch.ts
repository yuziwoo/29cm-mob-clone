import { useQuery } from '@tanstack/react-query';
import { localStorageAPI } from '../../constants/localStorage';
import { mockSearchWordRanking } from '../../mock/search';
import { Products } from '../../types/product';
import { queryAPI } from '../../constants/query';
import { SearchWordRankingProps } from '../../types/search';
import { Http } from '../../api/http';
import { BrandProps } from '../../types/brand';

export const useSearch = (keyword: string = '') => {
  /**
   * 검색 기능을 사용할때 사용합니다.
   */

  const searchBrand = useQuery({
    queryKey: [queryAPI.queryKey.searchBrand, keyword],
    queryFn: async () => {
      const searchResult = await Http.getWithoutClient<BrandProps[]>('../mock/brands.json').then(
        (res) => {
          return Object.values(res.data).filter(
            ({ nameKo, nameEn }) => nameKo.includes(keyword) || nameEn.includes(keyword)
          );
        }
      );

      return searchResult;
    },
  });

  const searchProduct = useQuery({
    queryKey: [queryAPI.queryKey.searchProduct, keyword],
    queryFn: async () => {
      const searchResult = await Http.getWithoutClient<Products>('../mock/product.json').then(
        (res) => {
          const formatedProducts = Object.keys(res.data).map((key) => ({
            productId: key,
            ...res.data[key],
          }));

          return formatedProducts.filter(
            ({ name, brandName }) => name.includes(keyword) || brandName.includes(keyword)
          );
        }
      );

      return searchResult;
    },
  });

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
      .slice(0, localStorageAPI.recentSearch.maxLength)
      .join(localStorageAPI.recentSearch.separateSymbol);

    localStorage.setItem(localStorageAPI.recentSearch.name, filteredNewData);
  };

  const updateRecentSearch = (newRecentSearch: string) => {
    const filteredNewData = newRecentSearch
      .split(localStorageAPI.recentSearch.separateSymbol)
      .slice(0, localStorageAPI.recentSearch.maxLength)
      .join(localStorageAPI.recentSearch.separateSymbol);

    localStorage.setItem(localStorageAPI.recentSearch.name, filteredNewData);
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
