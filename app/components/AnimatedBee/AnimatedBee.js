'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AnimatedBee.module.css';

export default function AnimatedBee() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bannerBottom, setBannerBottom] = useState(0);
  const [isSafari, setIsSafari] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const beeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const ua = navigator.userAgent;
    const safari = /^((?!chrome|android).)*safari/i.test(ua);
    setIsSafari(safari);
  }, []);

  useEffect(() => {
    if (isSafari !== false) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    const setupAndTryPlay = () => {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.play().catch(() => {});
    };

    setupAndTryPlay();
    video.addEventListener('loadedmetadata', setupAndTryPlay);
    video.addEventListener('canplay', setupAndTryPlay);

    return () => {
      video.removeEventListener('loadedmetadata', setupAndTryPlay);
      video.removeEventListener('canplay', setupAndTryPlay);
    };
  }, [isSafari]);

  // Скролл и позиционирование
  useEffect(() => {
    const updateBannerPosition = () => {
      const banner = document.querySelector('[class*="Banner-module"]');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setBannerBottom(rect.bottom + scrollTop);
      }
    };

    let frameId = null;
    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const position = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = maxScroll > 0 ? (position / maxScroll) * 100 : 0;
        setScrollPosition(scrollPercentage);
        frameId = null;
      });
    };

    updateBannerPosition();
    handleScroll();
    window.addEventListener('resize', updateBannerPosition, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBannerPosition);
    };
  }, []);

  // Зигзагообразное движение
  let rightPosition;
  let topOffset;
  
  const isMobile = isMounted && typeof window !== 'undefined' && window.innerWidth <= 768;
  
  if (scrollPosition < 25) {
    rightPosition = Math.max(1, 5 - (scrollPosition * 0.4)); // Минимум 1%
    topOffset = scrollPosition * 2;
  } else if (scrollPosition < 50) {
    const phase2Progress = scrollPosition - 25;
    rightPosition = Math.max(1, 5 - 10 + (phase2Progress * 0.4)); // Минимум 1%
    topOffset = 50 + (phase2Progress * 2);
  } else {
    rightPosition = Math.max(1, 5); // Минимум 1%
    topOffset = 100;
  }

  // На мобильных устройствах смещаем пчелу правее
  if (isMobile) {
    rightPosition = Math.max(rightPosition - 8, -3); 
  }

  const topPosition = bannerBottom > 0
    ? `${bannerBottom - (isMobile ? 70 : 120)}px`
    : `calc(20% + 600px + ${topOffset}px)`;

  // Не рендерим до монтирования на клиенте
  if (!isMounted) {
    return null;
  }

  return (
    <div 
      ref={beeRef}
      className={styles.beeContainer}
      style={{ 
        right: `${rightPosition}%`,
        top: topPosition
      }}
    >
      {isSafari === true ? (
        <Image
          src="/images/bee_1.png"
          alt="Bee"
          width={230}
          height={230}
          className={`${styles.beeImage} ${styles.beeImageAnimated}`}
          loading="lazy"
        />
      ) : isSafari === false ? (
        <video
          ref={videoRef}
          className={styles.beeVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/images/video_bee.webm" type="video/webm" />
          <source src="/images/video_bee.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
