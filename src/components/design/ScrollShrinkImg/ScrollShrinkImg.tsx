import { useCallback, useEffect, useRef, useState } from 'react';

interface ScrollShrinkImgProps {
  imgURL: string;
  alt?: string;
}

const ScrollShrinkImg = ({ imgURL, alt = '점점 작아지는 이미지' }: ScrollShrinkImgProps) => {
  /**
   * 스크롤에 반응하여 점점 작아지는 이미지입니다.
   */

  const imgRef = useRef<null | HTMLDivElement>(null);
  const [isObserving, setIsObserving] = useState(false);
  const [ratio, setRatio] = useState(0);

  const handleShrinkImg = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRect.y > 10) {
        setRatio(Math.floor(entry.intersectionRatio * 100) * 0.01);
      }
    });
  }, []);

  useEffect(() => {
    if (imgRef.current === null || isObserving) return;

    setIsObserving(true);
    const threshold = Array.from({ length: 100 }, (_, idx) => idx * 0.01);
    const observer = new IntersectionObserver(handleShrinkImg, { threshold });
    observer.observe(imgRef.current);
  }, [imgRef, isObserving, handleShrinkImg]);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }} ref={imgRef}>
      <img
        style={{
          width: '100%',
          display: 'block',
          transform: `scale(${1.5 - ratio / 2})`,
          transformOrigin: 'top center',
          willChange: 'transform',
        }}
        src={imgURL}
        alt={alt}
      />
    </div>
  );
};

export default ScrollShrinkImg;
