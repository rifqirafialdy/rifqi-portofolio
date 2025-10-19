'use client';

import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const outline = document.querySelector('.cursor-outline') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: posX, clientY: posY } = e;
      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;
      outline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
      }, { duration: 500, fill: "forwards" });
    };

    const handleMouseEnter = () => {
      outline.style.width = '60px';
      outline.style.height = '60px';
      outline.style.backgroundColor = 'rgba(229, 62, 62, 0.5)';
    };

    const handleMouseLeave = () => {
      outline.style.width = '40px';
      outline.style.height = '40px';
      outline.style.backgroundColor = 'rgba(229, 62, 62, 0.3)';
    };

    window.addEventListener('mousemove', moveCursor);

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default Cursor;