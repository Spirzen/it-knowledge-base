import React, { useEffect, useRef } from 'react';

const HIGHLIGHT_RADIUS = '20rem';

export default function HomepageFeaturesOverlay() {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = cardsWrapperRef.current;
    const overlay = overlayRef.current;
    if (!wrapper || !overlay) return;

    // Clone feature cards into overlay
    const featureCards = wrapper.querySelectorAll<HTMLElement>('.featureCard');
    featureCards.forEach((card, idx) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      clone.style.position = 'absolute';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.width = '100%';
      clone.style.height = '100%';
      clone.style.pointerEvents = 'none';

      // Hide cloned CTAs by default; they toggle in CSS
      const cta = clone.querySelector('.featureCta') as HTMLElement | null;
      if (cta) {
        cta.style.setProperty('display', 'none', 'important');
      }

      overlay.appendChild(clone);
    });

    const onMouseMove = (e: MouseEvent) => {
      if (!wrapper || !overlay) return;
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
      overlay.style.setProperty('--opacity', '1');
    };

    const onMouseLeave = () => {
      if (overlay) overlay.style.setProperty('--opacity', '0');
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardsWrapperRef}
      className="cardsWrapper"
      style={{ position: 'relative' }}>
      <div className="cards">
      </div>
      <div
        ref={overlayRef}
        className="overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}