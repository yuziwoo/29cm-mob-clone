import SkeletonImg from '../../components/skeleton/SkeletonImg/SkeletonImg';
import SkeletonText from '../../components/skeleton/SkeletonText/SkeletonText';
import { theme } from '../../styles/theme';

const MyPageSkeleton = () => {
  return (
    <div style={{ padding: theme.padding.BODY }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '4rem',
        }}
      >
        <div style={{ width: '80px' }}>
          <SkeletonImg circle={true} />
        </div>
        <SkeletonText height="18px" />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <SkeletonText height="108px" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: 'calc(50% - 0.5rem)' }}>
          <SkeletonText height="108px" />
        </div>
        <div style={{ width: 'calc(50% - 0.5rem)' }}>
          <SkeletonText height="108px" />
        </div>
      </div>

      <div style={{ paddingTop: '3rem' }}>
        <SkeletonText height="18px" count={3} />
      </div>
    </div>
  );
};

export default MyPageSkeleton;
