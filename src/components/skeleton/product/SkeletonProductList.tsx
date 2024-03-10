import SkeletonImg from '../common/SkeletonImg';
import SkeletonText from '../common/SkeletonText';

const SkeletonProductList = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <SkeletonImg />
      </div>
      <div style={{ paddingTop: '1rem' }}>
        <SkeletonText height="11px" width="40px" />
      </div>
      <div style={{ paddingTop: '0.5rem' }}>
        <SkeletonText height="13px" count={2} />
      </div>
      <div style={{ paddingTop: '0.5rem' }}>
        <SkeletonText height="13px" width="80px" />
      </div>
    </div>
  );
};

export default SkeletonProductList;
