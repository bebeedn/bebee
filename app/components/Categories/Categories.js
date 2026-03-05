'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Categories.module.css';

export default function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Включаем анимацию при входе в зону видимости
        // Выключаем при выходе
        setIsVisible(entry.isIntersecting);
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

  const categories = [
    {
      title: 'Садочок',
      href: '#kindergarten',
      image: '/categories_photo/2026-03-05 14.25.05.jpg',
      alt: 'Діти граються в садочку'
    },
    {
      title: 'Школа',
      href: '#school',
      image: '/categories_photo/2026-03-05 14.25.12.jpg',
      alt: 'Учні в класі'
    },
    {
      title: 'Додаткові заняття',
      href: '#sections',
      image: '/categories_photo/2026-03-05 14.36.51.jpg',
      alt: 'Діти на гуртках та секціях'
    }
  ];

  return (
    <div className={styles.categories} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.href} 
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className={styles.title}>{category.title}</h3>
              <div className={styles.imageWrapper}>
                <Image
                  src={category.image}
                  alt={category.alt}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
