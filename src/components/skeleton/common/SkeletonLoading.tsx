const SkeletonLoading = () => {
  return (
    <video
      style={{ display: 'block', width: '100%' }}
      autoPlay
      muted
      loop
      playsInline
      poster="../img/system/loading.png"
    >
      <source src="../img/system/loading.webm" type="video/webm" />
      <source src="../img/system/loading.mp4" type="video/mp4" />
    </video>
  );
};

export default SkeletonLoading;
