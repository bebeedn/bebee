'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedBee.module.css';

export default function AnimatedBee() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bannerBottom, setBannerBottom] = useState(0);
  const beeRef = useRef(null);

  useEffect(() => {
    // Функция для получения позиции Banner
    const updateBannerPosition = () => {
      const banner = document.querySelector('[class*="Banner-module"]');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Позиция нижнего края Banner относительно документа
        setBannerBottom(rect.bottom + scrollTop);
      }
    };

    // Обновляем позицию при загрузке и изменении размера окна
    updateBannerPosition();
    window.addEventListener('resize', updateBannerPosition);

    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBannerPosition);
    };
  }, []);

  // Зигзагообразное движение
  let rightPosition;
  let topOffset;
  
  if (scrollPosition < 25) {
    // Первая фаза: движение вправо + вниз
    rightPosition = 5 - (scrollPosition * 0.4);
    topOffset = scrollPosition * 2;
  } else if (scrollPosition < 50) {
    // Вторая фаза: движение влево + вниз
    const phase2Progress = scrollPosition - 25;
    rightPosition = 5 - 10 + (phase2Progress * 0.4);
    topOffset = 50 + (phase2Progress * 2);
  } else {
    // После 50% скролла - остается на месте
    rightPosition = 5;
    topOffset = 100;
  }

  // Определяем, мобильная ли версия
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // На мобилке используем позицию относительно Banner
  const topPosition = isMobile && bannerBottom > 0
    ? `${bannerBottom - 70}px` // 70px - половина высоты пчелы (140px / 2)
    : `calc(20% + 600px + ${topOffset}px)`;

  return (
    <div 
      ref={beeRef}
      className={styles.beeContainer}
      style={{ 
        right: `${rightPosition}%`,
        top: topPosition
      }}
    >
      <video
        className={styles.beeVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/video_bee.webm" type="video/webm" />
      </video>
    </div>
  );
}
