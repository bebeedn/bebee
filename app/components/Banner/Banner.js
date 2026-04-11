'use client';

import { useRef, useEffect } from 'react';
import styles from './Banner.module.css';

export default function Banner({ onOpenModal }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Агрессивная попытка запуска для Safari
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.playsInline = true;
    
    // Пробуем запустить сразу
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Если не получилось, пробуем еще раз через 100ms
          setTimeout(() => {
            video.play().catch(() => {});
          }, 100);
        });
      }
    };

    // Запускаем когда видео готово
    if (video.readyState >= 3) {
      attemptPlay();
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', attemptPlay);
    };
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <video 
              ref={videoRef}
              className={styles.video}
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            >
              <source src="/04.mp4" type="video/mp4" />
              Ваш браузер не підтримує відео.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
