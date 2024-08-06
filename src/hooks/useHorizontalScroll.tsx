import { useRef, useState, useEffect } from 'react';

export function useHorizontalScroll<T extends HTMLElement>({
  speed = 1,
}: {
  speed?: number;
}) {
  const containerRef = useRef<T | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * speed,
        behavior: 'instant',
      });
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - el.offsetLeft);
      setScrollLeft(el.scrollLeft);
    };

    const onMouseLeave = () => {
      setIsDragging(false);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * speed; // скорость прокрутки
      el.scrollLeft = scrollLeft - walk;
    };

    const wheelListener = onWheel as unknown as EventListener;
    const mouseDownListener = onMouseDown as unknown as EventListener;
    const mouseLeaveListener = onMouseLeave as unknown as EventListener;
    const mouseUpListener = onMouseUp as unknown as EventListener;
    const mouseMoveListener = onMouseMove as unknown as EventListener;

    el.addEventListener('wheel', wheelListener);
    el.addEventListener('mousedown', mouseDownListener);
    el.addEventListener('mouseleave', mouseLeaveListener);
    el.addEventListener('mouseup', mouseUpListener);
    el.addEventListener('mousemove', mouseMoveListener);

    return () => {
      el.removeEventListener('wheel', wheelListener);
      el.removeEventListener('mousedown', mouseDownListener);
      el.removeEventListener('mouseleave', mouseLeaveListener);
      el.removeEventListener('mouseup', mouseUpListener);
      el.removeEventListener('mousemove', mouseMoveListener);
    };
  }, [isDragging, startX, scrollLeft]);

  return containerRef;
}
