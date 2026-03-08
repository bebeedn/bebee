'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

const Modal = dynamic(() => import('../components/Modal/Modal'));

export default function School() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observers = [];
    
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      
      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <Header onOpenModal={handleOpenModal} />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
              <span className={styles.backCircle}>←</span>
            </Link>
            <div className={styles.heroContent}>
              <div className={styles.titleWrapper}>
                <h1 className={styles.title}>BeBee School</h1>
                <div className={styles.beeBackground}>
                  <Image
                    src="/images/bee_1.png"
                    alt="Bee"
                    fill
                    className={styles.beeImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <p className={styles.subtitle}>
                Це простір сильного дитинства
              </p>
            </div>
          </div>
        </div>

        <section className={`${styles.aboutSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[0] = el}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2>BeBee School — це простір сильного дитинства</h2>
                <p>
                  Приватна школа і сад нового формату, де дитина не просто вчиться — а розкривається.
                </p>
                <p>
                  Ми створили середовище, в якому поєднуються академічна база, повага до особистості дитини 
                  та розвиток її природних талантів.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/categories_photo/2026-03-05 14.25.12.jpg"
                  alt="Учні в класі"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.approachSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[1] = el}>
          <div className={styles.container}>
            <h2>Наш підхід</h2>
            <div className={styles.approachList}>
              <div className={styles.approachItem}>Малочисельні класи — до 15 учнів</div>
              <div className={styles.approachItem}>Повний день з 8:30 до 18:00</div>
              <div className={styles.approachItem}>Академічне навчання + творчість + кругозір</div>
              <div className={styles.approachItem}>Музика, інструменти, сцена, виступи</div>
              <div className={styles.approachItem}>Екскурсії, тематичні тижні, живий формат навчання</div>
            </div>
            <div className={styles.philosophyText}>
              <p>
                Ми віримо, що освіта — це не тільки знання.<br/>
                Це впевненість, мислення, свобода виражати себе та вміння бути чесним, добрим і сильним людиною.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.missionSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[2] = el}>
          <div className={styles.container}>
            <h2>BeBee — це більше, ніж школа</h2>
            <div className={styles.missionText}>
              <p>Це простір, де дитину бачать.</p>
              <p>Де її чують.</p>
              <p>Де її підтримують.</p>
              <p className={styles.highlight}>
                BeBee — це сім'я, в якій діти ростуть сміливими, талановитими та щасливими.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.programSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[3] = el}>
          <div className={styles.container}>
            <h2>Освітня програма НУШ (ОДМ)</h2>
            <p className={styles.programIntro}>
              Чому саме ОДМ? Ми впевнені, що нове покоління дітей повинно навчатись за сучасною програмою, 
              де надається можливість творити, фантазувати та проявляти себе.
            </p>
            <div className={styles.programFeatures}>
              <div className={styles.programFeature}>
                <h3>📚 Без підручників</h3>
                <p>
                  Дитині видається 2 зошити на місяць, в яких є завдання, QR код на інтерактивні завдання 
                  та місце для рішення задач.
                </p>
              </div>
              <div className={styles.programFeature}>
                <h3>👨‍👩‍👧 Прозора система</h3>
                <p>
                  Батьківський контроль та допомога у навчанні — ви завжди в курсі успіхів вашої дитини.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.noGadgetsSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[4] = el}>
          <div className={styles.container}>
            <h2>🚫 Антигаджетна школа</h2>
            <p className={styles.noGadgetsText}>
              З 8:30 до 18:00 зовсім не можна користуватись телефонами та планшетами.
            </p>
            <p>
              Ми маємо впевненість, що це корисно для діточок, та відсутність гаджетів допомагає їм навчатись.
            </p>
          </div>
        </section>

        <section className={`${styles.scheduleSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[5] = el}>
          <div className={styles.container}>
            <h2>Розклад дня</h2>
            <p className={styles.scheduleIntro}>Школа працює з 8:30. Уроки починаються о 9:30</p>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>9:00 - 9:30</div>
                <div className={styles.scheduleActivity}>Сніданок</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>9:30 - 12:30</div>
                <div className={styles.scheduleActivity}>Уроки</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>12:30 - 13:00</div>
                <div className={styles.scheduleActivity}>Обід</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>Після обіду</div>
                <div className={styles.scheduleActivity}>Кругозори, екскурсії та кулінарія</div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.safetySection} ${styles.fadeIn}`} ref={el => sectionsRef.current[6] = el}>
          <div className={styles.container}>
            <h2>🛡️ Безпека</h2>
            <div className={styles.safetyFeatures}>
              <div className={styles.safetyItem}>Безперервний процес навчання</div>
              <div className={styles.safetyItem}>Класи обладнані захисними ролетами</div>
              <div className={styles.safetyItem}>Є найпростіше укриття на 0 поверсі</div>
            </div>
          </div>
        </section>

        <section className={`${styles.ctaSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[7] = el}>
          <div className={styles.container}>
            <h2>Запис відкрито</h2>
            <p>У 1, 2, 3, 4 класи нашої школи</p>
            <button className={styles.ctaButton} onClick={handleOpenModal}>
              Записатися до школи
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
