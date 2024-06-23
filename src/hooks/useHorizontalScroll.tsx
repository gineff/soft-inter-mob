import { useRef, useEffect, WheelEvent } from 'react';

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };

      const listener = onWheel as unknown as EventListener; // Приведение типов

      el.addEventListener('wheel', listener);
      return () => el.removeEventListener('wheel', listener);
    }
  }, []);

  return elRef;
}
