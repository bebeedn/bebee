'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const containerRef = useRef(null);

  // Определяем количество видимых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Включаем анимацию при входе в зону видимости
        // Выключаем при выходе
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Срабатывает когда 10% компонента видно
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Масив відгуків
  const reviews = [
    {
      name: 'Анатолій',
      date: '07/04/2025',
      rating: 5,
      text: 'Як батько учня, я хотів би поділитися своїми враженнями про приватну школу "Азбука Скул". Ця школа вразила мене своїм сучасним підходом до освіти та унікальною атмосферою.'
    },
    {
      name: 'Олена',
      date: '15/03/2025',
      rating: 5,
      text: 'Чудова школа! Мій син навчається тут вже другий рік і я бачу величезний прогрес. Вчителі дуже уважні та професійні. Рекомендую!'
    },
    {
      name: 'Марина',
      date: '22/02/2025',
      rating: 5,
      text: 'Дуже задоволена якістю освіти. Малі класи дозволяють приділяти увагу кожній дитині. Дочка з радістю йде до школи щодня!'
    },
    {
      name: 'Ігор',
      date: '10/01/2025',
      rating: 5,
      text: 'Сучасний підхід до навчання, досвідчені педагоги та чудова атмосфера. Син розвивається всебічно, що дуже важливо для нас.'
    },
    {
      name: 'Тетяна',
      date: '05/12/2024',
      rating: 5,
      text: 'Рекомендую цю школу всім батькам! Індивідуальний підхід, сучасні методики навчання та турбота про кожну дитину.'
    }
  ];

  const maxSlide = Math.max(0, reviews.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      return next >= maxSlide ? maxSlide : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  // Рассчитываем процент сдвига в зависимости от количества видимых слайдов
  const slidePercentage = 100 / slidesPerView;

  // Рендер звезд
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= count;

      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.star} ${isFilled ? styles.starFilled : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  return (
    <div className={styles.reviews}>
      <div 
        className={`${styles.container} ${isVisible ? styles.containerVisible : ''}`}
        ref={containerRef}
      >
        <h2 className={styles.title}>Відгуки наших клієнтів</h2>

        {/* Слайдер відгуків */}
        <div className={styles.sliderWrapper}>
          <button 
            onClick={prevSlide} 
            className={styles.sliderBtn}
            disabled={currentSlide === 0}
            aria-label="Попередній відгук"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className={styles.sliderContainer}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.avatar}>
                      {review.name.charAt(0)}
                    </div>
                    <div className={styles.reviewInfo}>
                      <h4 className={styles.reviewName}>{review.name}</h4>
                      <div className={styles.reviewRating}>
                        {renderStars(review.rating)}
                      </div>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                  </div>
                  <div className={styles.reviewContent}>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide} 
            className={styles.sliderBtn}
            disabled={currentSlide === maxSlide}
            aria-label="Наступний відгук"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
