'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const slides = [
    '/main_carousel/IMG_9176.JPG',
    '/main_carousel/IMG_9177.JPG',
    '/main_carousel/IMG_9178.JPG',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section 
      className={`${styles.about} ${isVisible ? styles.aboutVisible : ''}`} 
      id="about_us"
      ref={sectionRef}
    >
      <h2 className={styles.title}>Про нас</h2>
      
      <div className={styles.content}>
        {/* Первый пункт - показывается сверху на средних экранах */}
        <div className={styles.topText}>
          <ul className={styles.list}>
            <li className={styles.listItem}>BeBee - сучасний освітній простір для дітей дошкільного та молодшого шкільного віку. Ми об'єднуємо приватний садочок, початкову школу та систему додаткових занять в єдину цілісну освітню екосистему.</li>
          </ul>
        </div>

        {/* Карусель слева */}
        <div className={styles.videoWrapper}>
          <div className={styles.carouselWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                aria-hidden={index !== currentSlide}
              >
                <Image
                  src={slide}
                  alt={`BeBee School slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className={styles.image}
                  priority={index === 0}
                  quality={80}
                  loading={index === 0 ? 'eager' : 'lazy'}
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

        {/* Текст справа - средние пункты */}
        <div className={styles.textWrapper}>
          <ul className={styles.list}>
            <li className={`${styles.listItem} ${styles.firstItem}`}>BeBee - сучасний освітній простір для дітей дошкільного та молодшого шкільного віку. Ми об'єднуємо приватний садочок, початкову школу та систему додаткових занять в єдину цілісну освітню екосистему.</li>
            <li className={styles.listItem}>Наша мета - дати дитині не лише знання, а й міцний фундамент: самостійність, критичне мислення, впевненість у собі та повагу до інших.</li>
            <li className={styles.listItem}>Малокомплектні класи, професійна команда педагогів, продумана освітня програма та безпечне середовище - основа нашого підходу.</li>
            <li className={`${styles.listItem} ${styles.lastItem}`}>BeBee - якісна освіта з турботою про особистість.</li>
          </ul>
        </div>

        {/* Последний пункт - показывается снизу на средних экранах */}
        <div className={styles.bottomText}>
          <ul className={styles.list}>
            <li className={styles.listItem}>BeBee - якісна освіта з турботою про особистість.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
