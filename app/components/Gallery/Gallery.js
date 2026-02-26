'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const galleryRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Определяем направление скролла
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const images = [
    { src: '/images/3037_MyshkoAlex_R62_0495.jpg', alt: 'Be-Bee School - Учень за партою' },
    { src: '/images/3094_MyshkoAlex_R62_0705.jpg', alt: 'Be-Bee School - Групове фото учнів' },
    { src: '/images/3291_MyshkoAlex_MR6_3916.jpg', alt: 'Be-Bee School - Святкування в школі' },
    { src: '/images/IMG_1884.JPG', alt: 'Be-Bee School - Шкільні моменти' },
    { src: '/images/IMG_2174.JPG', alt: 'Be-Bee School - Навчальний процес' },
    { src: '/images/IMG_2176.JPG', alt: 'Be-Bee School - Учні школи' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsLoading(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsLoading(false);
  };

  return (
    <section 
      className={`${styles.gallery} ${isVisible ? styles.galleryVisible : ''} ${scrollDirection === 'up' ? styles.scrollUp : ''}`} 
      id="gallery"
      ref={galleryRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Галерея</h2>
        
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={styles.imageCard}
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно для просмотра фото */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className={styles.closeButton}>
              <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Индикатор загрузки */}
            {isLoading && (
              <div className={styles.loader}>
                <div className={styles.spinner}></div>
              </div>
            )}
            
            <div className={styles.modalImageWrapper}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className={styles.modalImage}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
