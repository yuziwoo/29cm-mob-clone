interface ScrollTopProps {
  element: HTMLElement | Window;
  targetY: 0;
}

export const scrollTop = (
  { element, targetY }: ScrollTopProps = { element: document.documentElement, targetY: 0 }
) => {
  element.scrollTo({ left: 0, top: targetY, behavior: 'smooth' });
};
