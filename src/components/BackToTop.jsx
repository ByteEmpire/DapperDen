// BackToTop.jsx
import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // read the true scroll position
  const getScrollTop = () => {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const pos = getScrollTop();
      console.log('Scroll position:', pos);
      setVisible(pos > 300);
    };

    // initial check in case you're reloading mid-page
    handleScroll();

    // listen on the window
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md
        bg-orange-500 text-white transition-opacity duration-300
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      ↑
    </button>
  );
};

export default BackToTop;
