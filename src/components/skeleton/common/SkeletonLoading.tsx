const SkeletonLoading = () => {
  return (
    <video style={{ display: 'block', width: '100%' }} autoPlay muted loop>
      <source src="../img/system/loading.webm" type="webm" />
      <source src="../img/system/loading.mp4" type="mp4" />
    </video>
  );
};

export default SkeletonLoading;
