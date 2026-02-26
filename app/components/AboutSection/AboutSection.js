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

        {/* Текст справа */}
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            BE-BEE-SCHOOL- освітній комплекс, у якому дитина навчається в цілісному середовищі, де поєднані:
            <br />• якісна академічна освіта;
            <br />• розвиток здібностей і інтересів;
            <br />• продуманий режим дня;
            <br />• фізична активність і здоров'я;
            <br />• зручна інфраструктура для дитини й родини
          </p>
        </div>
      </div>
    </section>
  );
}
