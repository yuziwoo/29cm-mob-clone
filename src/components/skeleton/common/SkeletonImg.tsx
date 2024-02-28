import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonImgProps {
  circle?: boolean;
  ratio?: number[];
}

const SkeletonImg = ({ circle, ratio = [1, 1] }: SkeletonImgProps) => {
  /**
   * circle: 동그라미를 그리고 싶은 경우 true를 넣어주세요.
   * ratio: 이미지의 비율을 넣어주세요. ex. [1, 1.2] === 가로 100%, 세로 120%
   */
  const [aspectRatio, setAspectRatio] = useState('1 / 1');

  useEffect(() => {
    if (ratio.length !== 2) return;

    setAspectRatio(`${ratio[0]} / ${ratio[1]}`);
  }, [ratio]);

  return (
    <Skeleton width="100%" circle={circle ? circle : false} style={{ aspectRatio }}></Skeleton>
  );
};

export default SkeletonImg;
