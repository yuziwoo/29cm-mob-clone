import { SkeletonImgStyle } from './SkeletonImg.styled';

const SkeletonImg = ({ ratio }: { ratio: number }) => {
  /**
   * ratio
   * 1 === width: 100%, height: 100%
   * 1.2 === width: 100%, height: 120%
   */
  return <SkeletonImgStyle $ratio={ratio}></SkeletonImgStyle>;
};

export default SkeletonImg;
