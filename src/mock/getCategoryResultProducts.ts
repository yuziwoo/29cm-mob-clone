import { CATEGORY_PARAMS } from '../constants/path';
import { FormatedProductProps, Products } from '../types/product';

interface GetCategoryResultProductProps {
  products: Products;
  params: URLSearchParams;
}

const filterGroup = (value: string, productList: FormatedProductProps[]) => {
  let filteredProducts: FormatedProductProps[] = productList;
  switch (value) {
    case '의류':
      filteredProducts = productList.filter(
        ({ categoryMedium }) =>
          categoryMedium === '아우터' || categoryMedium === '상의' || categoryMedium === '하의'
      );
      break;
    case '컴퓨터/디지털':
      filteredProducts = productList.filter(
        ({ categoryMedium }) => categoryMedium === '컴퓨터/디지털'
      );
  }

  return filteredProducts;
};

const filterCategoryLarge = (value: string, productList: FormatedProductProps[]) => {
  let filteredProducts: FormatedProductProps[] = productList;

  switch (value) {
    case 'man':
      filteredProducts = productList.filter(({ categoryLarge }) => categoryLarge === 'man');
      break;
    case 'woman':
      filteredProducts = productList.filter(({ categoryLarge }) => categoryLarge === 'woman');
  }

  return filteredProducts;
};

const filterCategoryMedium = (value: string, productList: FormatedProductProps[]) => {
  let filteredProducts: FormatedProductProps[] = productList;

  switch (value) {
    case '아우터':
      filteredProducts = productList.filter(({ categoryMedium }) => categoryMedium === '아우터');
      break;
    case '상의':
      filteredProducts = productList.filter(({ categoryMedium }) => categoryMedium === '상의');
      break;
    case '하의':
      filteredProducts = productList.filter(({ categoryMedium }) => categoryMedium === '하의');
  }

  return filteredProducts;
};

export const getCategoryResultProduct = ({ products, params }: GetCategoryResultProductProps) => {
  /**
   * 카테고리 상품 조회 API를 임시로 만든 함수입니다.
   */

  let formatedProducts: FormatedProductProps[] = Object.keys(products).map((key) => ({
    productId: key,
    ...products[key],
  }));

  params.forEach((value, key) => {
    switch (key) {
      case CATEGORY_PARAMS.group:
        formatedProducts = filterGroup(value, formatedProducts);
        break;
      case CATEGORY_PARAMS.categoryLarge:
        formatedProducts = filterCategoryLarge(value, formatedProducts);
        break;
      case CATEGORY_PARAMS.categoryMedium:
        formatedProducts = filterCategoryMedium(value, formatedProducts);
        break;
    }
  });

  return formatedProducts.map(({ productId }) => productId);
};
