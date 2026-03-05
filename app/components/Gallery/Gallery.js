'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);
  const autoPlayTimeoutRef = useRef(null);

  const images = [
    
    { src: '/gallery_photo/2026-03-05 15.40.47.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.40.56.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.41.11.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.41.19.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.41.24.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.41.35.jpg', alt: 'Be-Bee School - Галерея' },
    { src: '/gallery_photo/2026-03-05 15.41.41.jpg', alt: 'Be-Bee School - Галерея' },
  ];

  // Проверка мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  // Автопрокрутка - работает только если isAutoPlayActive === true
  useEffect(() => {
    if (!isAutoPlayActive) return;

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length, isAutoPlayActive]);

  // Функция для остановки автопрокрутки на 10 секунд после ручного управления
  const pauseAutoPlay = () => {
    setIsAutoPlayActive(false);
    
    // Очищаем предыдущий таймаут если он есть
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    
    // Возобновляем автопрокрутку через 10 секунд
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayActive(true);
    }, 10000);
  };

  const goToPrevSlide = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNextSlide = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index, e) => {
    e.stopPropagation(); // Останавливаем всплытие события
    pauseAutoPlay();
    setCurrentSlide(index);
  };

  const handleImageClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section 
        className={`${styles.gallery} ${isVisible ? styles.galleryVisible : ''}`} 
        id="gallery"
        ref={galleryRef}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>Галерея</h2>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.imageWrapper} onClick={handleImageClick}>
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                  aria-hidden={index !== currentSlide}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1440px"
                    className={styles.image}
                    priority={index === 0}
                    quality={75}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}

              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={goToPrevSlide}
                aria-label="Попереднє фото"
              >
                &#10094;
              </button>
              <button
                type="button"
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={goToNextSlide}
                aria-label="Наступне фото"
              >
                &#10095;
              </button>

              <div className={styles.dots} role="tablist" aria-label="Навігація галереї">
                {images.map((image, index) => (
                  <button
                    key={`${image.src}-dot`}
                    type="button"
                    className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                    onClick={(e) => goToSlide(index, e)}
                    aria-label={`Перейти до фото ${index + 1}`}
                    aria-selected={index === currentSlide}
                    role="tab"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно для мобильных устройств - вне секции галереи */}
      {isModalOpen && isMobile && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className={styles.closeButton}>
              <svg className={styles.closeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className={styles.modalImageWrapper}>
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
