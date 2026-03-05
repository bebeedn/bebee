'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Обработка скролла для sticky header
  useEffect(() => {
    // Создаем элемент-триггер
    const trigger = document.createElement('div');
    trigger.style.position = 'absolute';
    trigger.style.top = '200px';
    trigger.style.height = '1px';
    trigger.style.width = '100%';
    trigger.style.pointerEvents = 'none';
    document.body.appendChild(trigger);

    // Используем Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);

    // Также оставляем scroll listener как fallback
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollThreshold = 200;
          const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          
          setIsStickyVisible(currentScroll > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      document.body.removeChild(trigger);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '#about', label: 'Про нас' },
    { href: '#kindergarten', label: 'Садочок' },
    { href: '#school', label: 'Школа' },
    { href: '#sections', label: 'Додаткові заняття' },
    { href: '#contacts', label: 'Контакти' },
  ];

  return (
    <>
      {/* Основной header */}
      <header className={styles.mainHeader}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <Image 
              src="/images/logo_1.png" 
              alt="BE-BEE Logo" 
              width={194}
              height={58}
              priority
            />
          </a>

          {/* Переключатель темы и телефон для десктопа */}
          <div className={styles.rightControls}>
            <ThemeToggle />
            <a href="tel:+380991924620" className={styles.phoneDesktop}>
              <Image 
                src="/images/phone.png" 
                alt="Phone" 
                width={16}
                height={16}
              />
            </a>
          </div>

          {/* Бургер кнопка для мобилки */}
          <button 
            className={styles.burgerBtn} 
            onClick={toggleMobileMenu}
            aria-label="Открыть меню"
          >
            <div className={styles.burgerIcon}>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
            </div>
          </button>

          {/* Навигационное меню */}
          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <button 
              className={styles.closeBtn} 
              onClick={closeMobileMenu}
              aria-label="Закрыть меню"
            >
              <Image 
                src="/images/close.png" 
                alt="Close" 
                width={32}
                height={32}
              />
            </button>

            <ul className={styles.menu}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  <a href={item.href} className={styles.menuLink} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
              
              <li className={styles.menuItem}>
                <button 
                  className={styles.ctaButton} 
                  onClick={() => {
                    closeMobileMenu();
                    onOpenModal();
                  }}
                >
                  Записатися до нас
                </button>
              </li>

              {/* Телефон в меню для десктопа */}
              <li className={styles.menuItemPhone}>
                <a href="tel:+380964324325" className={styles.phoneLink}>
                  <Image 
                    src="/images/phone.png" 
                    alt="Phone" 
                    width={16}
                    height={16}
                  />
                  <span>+38 (099) 192 46 20</span>
                </a>
              </li>

              {/* Телефон иконка для мобилки */}
              <li className={styles.menuItemPhoneMobile}>
                <a href="tel:+380964324325" className={styles.phoneMobile}>
                  <Image 
                    src="/images/phone.png" 
                    alt="Phone" 
                    width={16}
                    height={16}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sticky header */}
      <header className={`${styles.stickyHeader} ${isStickyVisible ? styles.stickyVisible : ''}`}>
        <div className={styles.container}>
          <a href="#" className={styles.logoSmall}>
            <Image 
              src="/images/logo_1.png" 
              alt="BE-BEE School Logo" 
              width={141}
              height={42}
            />
          </a>

          {/* Правые контролы для мобилки в sticky */}
          <div className={styles.stickyRightControls}>
            <ThemeToggle />
            <a href="tel:+380991924620" className={styles.stickyPhoneMobile}>
              <Image 
                src="/images/phone.png" 
                alt="Phone" 
                width={16}
                height={16}
              />
            </a>
          </div>

          {/* Бургер для sticky */}
          <button 
            className={styles.burgerBtnSticky} 
            onClick={toggleMobileMenu}
            aria-label="Открыть меню"
          >
            <div className={styles.burgerIcon}>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
              <span className={styles.burgerDot}></span>
            </div>
          </button>

          {/* Меню для десктопа в sticky */}
          <ul className={styles.stickyMenu}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className={styles.stickyMenuLink}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className={styles.ctaButton} onClick={onOpenModal}>
                Записатися до нас
              </button>
            </li>
            <li className={styles.stickyThemeToggle}>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
