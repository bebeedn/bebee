'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

export default function Banner({ onOpenModal }) {
  const slides = [
    '/main_carousel/IMG_9176.JPG',
    '/main_carousel/IMG_9177.JPG',
    '/main_carousel/IMG_9178.JPG',
    '/main_carousel/IMG_9180.JPG',
    '/main_carousel/IMG_9181.JPG',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                aria-hidden={index !== currentSlide}
              >
                <Image
                  src={slide}
                  alt={`Be-Bee School slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.image}
                  priority={index === 0}
                />
              </div>
            ))}

            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={goToPrevSlide}
              aria-label="Попередній слайд"
            >
              &#10094;
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={goToNextSlide}
              aria-label="Наступний слайд"
            >
              &#10095;
            </button>

            <div className={styles.dots} role="tablist" aria-label="Навігація каруселі">
              {slides.map((slide, index) => (
                <button
                  key={`${slide}-dot`}
                  type="button"
                  className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Перейти до слайду ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
