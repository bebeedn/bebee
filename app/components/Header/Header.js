'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  // Обработка скролла для sticky header
  useEffect(() => {
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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
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
    { href: '/#about_us', label: 'Про нас', isExternal: false },
    { href: '/kindergarten', label: 'Садочок', isExternal: true },
    { href: '/school', label: 'Школа', isExternal: true },
    { href: '/additional-classes', label: 'Додаткові заняття', isExternal: true },
    { href: '/#contacts', label: 'Контакти', isExternal: false },
  ];

  return (
    <>
      {/* Основной header */}
      <header className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo_1.png" 
              alt="BeBee School - приватна школа та садочок у Києві, логотип" 
              width={194}
              height={58}
              priority
              quality={75}
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>

          {/* Переключатель темы и телефон для десктопа */}
          <div className={styles.rightControls}>
            <ThemeToggle />
            <a href="tel:+380509400770" className={styles.phoneDesktop}>
              <Image 
                src="/images/phone.png" 
                alt="Телефон BeBee School - зателефонувати" 
                width={16}
                height={16}
                quality={85}
                loading="lazy"
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
                alt="Закрити меню" 
                width={32}
                height={32}
                quality={85}
                loading="lazy"
              />
            </button>

            <ul className={styles.menu}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  {item.isExternal ? (
                    <Link href={item.href} className={styles.menuLink} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={styles.menuLink} onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  )}
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
                <a href="tel:+380509400770" className={styles.phoneLink}>
                  <Image 
                    src="/images/phone.png" 
                    alt="Телефон BeBee School" 
                    width={16}
                    height={16}
                  />
                  <span>+38 (050) 940-07-70</span>
                </a>
              </li>

              {/* Телефон иконка для мобилки */}
              <li className={styles.menuItemPhoneMobile}>
                <a href="tel:+380509400770" className={styles.phoneMobile}>
                  <Image 
                    src="/images/phone.png" 
                    alt="Зателефонувати до BeBee School" 
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
          <Link href="/" className={styles.logoSmall}>
            <Image 
              src="/images/logo_1.png" 
              alt="BeBee School - логотип" 
              width={141}
              height={42}
              quality={75}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>

          {/* Правые контролы для мобилки в sticky */}
          <div className={styles.stickyRightControls}>
            <ThemeToggle />
            <a href="tel:+380509400770" className={styles.stickyPhoneMobile}>
              <Image 
                src="/images/phone.png" 
                alt="Телефон BeBee School" 
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
                {item.isExternal ? (
                  <Link href={item.href} className={styles.stickyMenuLink}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className={styles.stickyMenuLink}>
                    {item.label}
                  </a>
                )}
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
