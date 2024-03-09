export type ShowcaseProps = {
  id: number;
  title: string;
  thumb: string;
  bannerURL: string;
  bannerTitle: string;
  bannerDescription: string;
};

export type ShowcaseModuleProps = {
  id: number;
  mainSwiper: {
    img: string[];
    circleText: string;
    carouselText: string;
    footerText: string;
    logo: string;
  };
  imgSrc: string;
  img1: string;
  slideCarousel: string;
  subText: string;
  appearImg: string[];
  brandBanner: {
    logo: string;
    img: string;
  };
};
