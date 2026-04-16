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
          Антигаджетна система в нашій школі — це свідомий крок до створення якісного освітнього середовища, 
          у якому кожна дитина має можливість максимально розкрити свій потенціал.
        </p>
        <p>
          Ми прагнемо не просто обмежити використання мобільних пристроїв, а сформувати культуру їх 
          відповідального та усвідомленого використання. У центрі нашого підходу — розвиток уваги, 
          критичного мислення, живого спілкування та емоційної зрілості учнів.
        </p>
        <p>
          У світі постійних цифрових відволікань школа стає простором зосередженості, взаємодії та 
          реального пізнання. Саме тут діти вчаться бути уважними, активними, відкритими до діалогу 
          та нових знань.
        </p>
        <p>
          Ми переконані, що такий підхід допомагає виховати не лише успішних учнів, а й гармонійних 
          особистостей, які вміють керувати технологіями, а не залежати від них.
        </p>
        <h3>Безпека дітей</h3>
        <p>
          Безпека дітей є одним із наших головних пріоритетів. Ми створили середовище, у якому кожна 
          дитина почувається захищено та комфортно протягом усього навчального дня.
        </p>
        <p>
          Усі учні перебувають на першому поверсі будівлі, що забезпечує швидкий і зручний доступ до 
          виходів у разі потреби. Приміщення обладнане захисними ролетами, які підвищують рівень 
          безпеки та надійності.
        </p>
        <p>
          Протягом усього часу діти знаходяться під постійним наглядом педагогів. Вчителі супроводжують 
          учнів як під час занять, так і на перервах, забезпечуючи контроль, підтримку та своєчасну 
          допомогу в будь-якій ситуації.
        </p>
        <p>
          Ми робимо все можливе, щоб батьки були впевнені: їхні діти знаходяться у безпечному та 
          турботливому середовищі.
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
            <h2>Розклад дня у BeBee</h2>
            <p className={styles.scheduleIntro}>
              У нашій школі день дитини проходить у комфортному, збалансованому ритмі — з турботою про навчання, розвиток і відпочинок 🤍
            </p>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>08:30</div>
                <div className={styles.scheduleActivity}>Школа відкриває свої двері та зустрічає дітей</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>09:00 – 09:20</div>
                <div className={styles.scheduleActivity}>Смачний та корисний сніданок</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>09:30 – 13:00</div>
                <div className={styles.scheduleActivity}>Навчальні заняття</div>
              </div>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>12:45 / 13:00</div>
                <div className={styles.scheduleActivity}>Обід під час великої перерви</div>
              </div>
            </div>
            <p className={styles.scheduleIntro} style={{ marginTop: '30px' }}>
              Після навчання ми дбаємо про розвиток талантів і відновлення енергії:
            </p>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>14:00</div>
                <div className={styles.scheduleActivity}>Творчі заняття: танці або вокал</div>
              </div>
              <div className={`${styles.scheduleItem} ${styles.scheduleItemNoBullet}`}>
                <div className={styles.scheduleActivity}>Прогулянка на свіжому повітрі</div>
              </div>
              <div className={`${styles.scheduleItem} ${styles.scheduleItemNoBullet}`}>
                <div className={styles.scheduleActivity}>Виконання домашніх завдань разом із вчителями (усе встигаємо зробити в школі)</div>
              </div>
            </div>
            <p className={styles.scheduleIntro} style={{ marginTop: '30px' }}>
              Далі — індивідуальний розвиток кожної дитини: додаткові гуртки, заняття та тренування за особистим розкладом
            </p>
            <div className={styles.scheduleList}>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>18:00</div>
                <div className={styles.scheduleActivity}>Батьки забирають щасливих, натхненних і впевнених у собі дітей 🐝 💛</div>
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
