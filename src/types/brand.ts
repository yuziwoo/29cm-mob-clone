export type BrandProps = {
  id: number;
  nameKo: string;
  nameEn: string;
  thumb: string;
  mainImg: string;
  showcase: Record<string, number>;
  introduce: string;
};

export type FetchBrandProps = {
  id: number;
  nameKo: string;
  nameEn: string;
  thumb: string;
  mainImg: string;
  showcase: number[];
  introduce: string;
};