'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Олена Петренко',
      rating: 5,
      date: '15.02.2024',
      text: 'Чудовий садочок! Дитина з радістю йде щодня. Вихователі дуже уважні та професійні. Дякуємо за турботу!'
    },
    {
      id: 2,
      name: 'Андрій Коваленко',
      rating: 5,
      date: '10.02.2026',
      text: 'Дуже задоволені школою! Індивідуальний підхід до кожної дитини, цікаві заняття та чудова атмосфера.'
    },
    {
      id: 3,
      name: 'Марина Іваненко',
      rating: 5,
      date: '05.02.2025',
      text: 'Найкращий вибір для нашої дитини! Професійні педагоги, сучасні методики навчання. Рекомендуємо!'
    },
    {
      id: 4,
      name: 'Вероніка',
      rating: 5,
      date: '25.02.2026',
      text: 'Ходимо в центрі майже два роки і що можу сказати - Ви найкращі! Ми задоволені'
    },
    {
      id: 5,
      name: 'Манюля',
      rating: 5,
      date: '1 рік',
      text: 'Відмінний садик! Малому подобається і вихователей цілує, ну кайф же'
    },
    {
      id: 6,
      name: 'Дар\'я Хотлубей',
      rating: 5,
      date: '07.08.2024',
      text: 'Садочок найкраще, що сталось в житті моєї дитини з 2022 року! Дякую за щасливе дитинство!'
    },
    {
      id: 7,
      name: 'Юлія Кусик',
      rating: 5,
      date: '11.02.2026',
      text: 'Перевела з другого садочка. Дитина з радістю йде, та чекає наступного дня. У дітей насичений та цікавий день!'
    },
    {
      id: 8,
      name: 'Лапіна',
      rating: 5,
      date: '21.05.2025',
      text: 'Ходимо в Бі-Бі на Європейській з 2 років (із 2023-го), все Гуд. Вихователі чудові! Малому дуже подобається!'
    },
    {
      id: 9,
      name: 'Анна Мартинова',
      rating: 5,
      date: '02.11.2025',
      text: 'Це садочок, де дитина буде знаходитись в просторі розуміння, турботи та розвитку. Рекомендую!'
    },
    {
      id: 10,
      name: 'Сергій Мельник',
      rating: 5,
      date: '28.01.2024',
      text: 'Відмінна школа з чудовими вчителями. Дитина розвивається всебічно, з задоволенням відвідує заняття.'
    },
    {
      id: 11,
      name: 'Наталія Бондаренко',
      rating: 5,
      date: '20.01.2024',
      text: 'Дякуємо за турботу та професіоналізм! Дитина навчилася багато нового, стала більш самостійною.'
    },
    {
      id: 12,
      name: 'Ігор Савченко',
      rating: 5,
      date: '15.01.2024',
      text: 'Чудовий колектив, затишна атмосфера. Дитина з радістю йде до школи кожного дня!'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 767) {
        setItemsPerView(1);
        return;
      }

      if (window.innerWidth <= 1023) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxSlide = Math.max(0, reviews.length - itemsPerView);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className={`${styles.container} ${isVisible ? styles.containerVisible : ''}`} id="reviews" ref={containerRef}>
      <h2 className={styles.title}>Відгуки</h2>

      <div className={styles.sliderWrapper}>
        <button
          className={styles.sliderBtn}
          onClick={goToPrev}
          disabled={currentSlide === 0}
          aria-label="Попередні відгуки"
        >
          &#10094;
        </button>

        <div className={styles.sliderContainer}>
          <div
            className={styles.sliderTrack}
            style={{
              '--items-per-view': itemsPerView,
              transform: `translateX(calc(-${currentSlide} * ((100% - (${itemsPerView} - 1) * var(--card-gap)) / ${itemsPerView} + var(--card-gap))))`
            }}
          >
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.avatar}>
                    {getInitials(review.name)}
                  </div>
                  <div className={styles.reviewInfo}>
                    <h3 className={styles.reviewName}>{review.name}</h3>
                    <div className={styles.reviewRating}>
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`${styles.star} ${index < review.rating ? styles.starFilled : ''}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className={styles.reviewDate}>{review.date}</p>
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
          className={styles.sliderBtn}
          onClick={goToNext}
          disabled={currentSlide >= maxSlide}
          aria-label="Наступні відгуки"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
