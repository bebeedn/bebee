'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

const Modal = dynamic(() => import('../components/Modal/Modal'));
const InfoModal = dynamic(() => import('../components/InfoModal/InfoModal'));

export default function School() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
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

  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const noGadgetsInfo = {
    title: '🚫 Антигаджетна школа',
    content: (
      <>
        <p>
          У BeBee School ми створили простір, вільний від цифрових відволікань. 
          З 8:30 до 18:00 діти не користуються телефонами та планшетами.
        </p>
        <h3>Чому це важливо?</h3>
        <p>
          Сучасні дослідження показують, що постійне використання гаджетів негативно впливає 
          на концентрацію уваги, якість навчання та соціальні навички дітей.
        </p>
        <h3>Що ми пропонуємо замість гаджетів:</h3>
        <ul>
          <li><strong>Живе спілкування</strong> — діти вчаться взаємодіяти один з одним, розвивають емпатію та комунікативні навички</li>
          <li><strong>Творчість</strong> — малювання, музика, конструювання розвивають уяву та креативне мислення</li>
          <li><strong>Активні ігри</strong> — рухливі заняття на свіжому повітрі зміцнюють здоров'я та підвищують настрій</li>
          <li><strong>Читання книг</strong> — розвиток уяви, словникового запасу та любові до літератури</li>
          <li><strong>Дослідження світу</strong> — експерименти, екскурсії, практичні заняття</li>
        </ul>
        <h3>Результати нашого підходу:</h3>
        <p>
          Діти стають більш уважними, краще засвоюють матеріал, активніше спілкуються 
          з однокласниками та вчителями. Вони вчаться знаходити радість у реальному житті, 
          а не у віртуальному світі.
        </p>
        <p>
          <strong>Ми віримо:</strong> дитинство — це час для справжніх відкриттів, дружби та розвитку, 
          а не для екранів та нескінченного скролінгу.
        </p>
      </>
    )
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
                    alt="BeBee School - логотип пчелы, символ приватної школи"
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
                <h2>ВеВее — це не просто навчання</h2>
                <p>
                  Це простір, де формуються характер, емоційна стійкість, допитливість і вміння мислити.
                </p>
                <p>
                  Ми поєднуємо українську програму з сучасними освітніми практиками, щоб дати дітям не лише знання, а й внутрішню опору.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/categories_photo/2026-03-05 14.25.12.jpg"
                  alt="Учні BeBee School в класі - приватна початкова школа Київ"
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

        <section className={`${styles.scheduleSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[4] = el}>
          <div className={styles.container}>
            <h2>Розклад дня</h2>
            <p className={styles.scheduleIntro}>
              <span className={styles.scheduleIntroLine}>Школа працює з 8:30. </span>
              <span className={styles.scheduleIntroLine}> Уроки починаються о 9:30</span>
            </p>
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

        <section className={`${styles.safetySection} ${styles.fadeIn}`} ref={el => sectionsRef.current[5] = el}>
          <div className={styles.container}>
            <h2>🛡️ Безпека</h2>
            <div className={styles.safetyFeatures}>
              <div className={styles.safetyItem}>Безперервний процес навчання</div>
              <div className={styles.safetyItem}>Класи обладнані захисними ролетами</div>
              <div className={styles.safetyItem}>Є найпростіше укриття на 0 поверсі</div>
            </div>
          </div>
        </section>

        <section className={`${styles.ctaSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[6] = el}>
          <div className={styles.container}>
            <h2>Запис відкрито</h2>
            <p>У 1, 2, 3, 4 класи нашої школи</p>
            <button className={styles.ctaButton} onClick={handleOpenModal}>
              Записатися до школи
            </button>
          </div>
        </section>
      </main>

      {isNoticeVisible && (
        <div className={styles.noticeCard} role="status" aria-live="polite">
          <div className={styles.noticeHeader}>
            <span className={styles.noticeBadge}>АНТИГАДЖЕТНА ШКОЛА</span>
            <button
              className={styles.noticeClose}
              type="button"
              onClick={() => setIsNoticeVisible(false)}
              aria-label="Закрити повідомлення"
            >
              ×
            </button>
          </div>
          <p className={styles.noticeText}>
            З 8:30 до 18:00 зовсім не можна користуватись телефонами та планшетами.
          </p>
          <p className={styles.noticeSubtext}>
            Ми маємо впевненість, що це корисно для діточок, та відсутність гаджетів допомагає їм навчатись.
          </p>
          <button
            className={styles.noticeButton}
            type="button"
            onClick={handleOpenInfoModal}
          >
            Дізнатись більше
          </button>
        </div>
      )}

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={handleCloseInfoModal}
        title={noGadgetsInfo.title}
        content={noGadgetsInfo.content}
      />
    </div>
  );
}
