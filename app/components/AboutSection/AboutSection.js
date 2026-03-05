'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Включаем анимацию при входе в зону видимости
        // Выключаем при выходе
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Срабатывает когда 10% компонента видно
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

        {/* Видео слева */}
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video}
            controls
            poster="/images/main.png"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Ваш браузер не підтримує відео.
          </video>
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
