import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonTextProps {
  width?: string;
  height?: string;
  count?: number;
}

const SkeletonText = ({ width = '100%', height = '14px', count = 1 }: SkeletonTextProps) => {
  /**
   * width: css width
   * height: font-size
   * count: 몇 줄을 표기할지
   */

  return <Skeleton width={width} count={count}></Skeleton>;
};

export default SkeletonText;
