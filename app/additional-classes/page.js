'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

const Modal = dynamic(() => import('../components/Modal/Modal'));
const InfoModal = dynamic(() => import('../components/InfoModal/InfoModal'));

export default function AdditionalClasses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('group'); // 'group' or 'individual'
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenInfoModal = (classItem) => {
    setSelectedClass(classItem);
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
    setSelectedClass(null);
  };

  const groupClasses = [
    {
      id: 1,
      title: 'Малювання',
      schedule: 'Понеділок, Середа | 17:00-18:00',
      image: '/additional_classes/pens.jpg',
      description: (
        <>
          <p>
            Творчі заняття з малювання для дітей різного віку. Ми допомагаємо розкрити художній потенціал 
            кожної дитини через різноманітні техніки та матеріали.
          </p>
          <h3>Що ми вивчаємо:</h3>
          <ul>
            <li>Основи композиції та кольорознавства</li>
            <li>Робота з різними матеріалами: акварель, гуаш, олівці, пастель</li>
            <li>Малювання з натури та за уявою</li>
            <li>Створення тематичних робіт</li>
          </ul>
          <h3>Результат:</h3>
          <p>
            Діти розвивають творче мислення, дрібну моторику, вчаться виражати свої емоції через мистецтво 
            та створюють власні художні роботи.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'Таеквон-до',
      schedule: 'Понеділок, Середа, П\'ятниця | 17:00',
      image: '/additional_classes/td.jpg',
      description: (
        <>
          <p>
            У нашому освітньому просторі є секція з TAEKWON-DO! 🥋
          </p>
          <p>
            Понеділок, середа та п'ятниця о 17:00 проходять заняття з тренером. 
            Запрошуємо всіх бажаючих долучитися!
          </p>
          <p>
            Це чудова можливість для діток розвивати спритність, координацію, увагу та впевненість у собі 💪
          </p>
          <p>
            Будемо раді бачити наших малюків!
          </p>
          <h3>Про тренерку:</h3>
          <p>
            Тренерка займається таеквон-до в найбільшому та найуспішнішому клубі «Фенікс». 
            За час занять стала чемпіонкою України та призеркою багатьох змагань.
          </p>
          <p>
            «У мене є велике прагнення до цього спорту, і тепер я хочу передати свій досвід дітям. 
            Моє завдання як тренера — навчити їх дисципліні, силі, впевненості та любові до таеквон-до.
          </p>
          <p>
            Я дуже люблю працювати з дітьми й щиро хочу, щоб вони відчули ту ж саму пристрасть і натхнення, 
            яке дала мені моя улюблена справа.»
          </p>
        </>
      )
    },
    {
      id: 3,
      title: 'Джиу-джитсу',
      schedule: 'Понеділок, Середа, П\'ятниця | 16:00-17:00',
      image: '/additional_classes/dj.jpg',
      description: (
        <>
          <p>
            Бразильське джиу-джитсу — ефективне бойове мистецтво, яке вчить техніці боротьби, 
            стратегічному мисленню та самоконтролю.
          </p>
          <h3>Програма тренувань:</h3>
          <ul>
            <li>Техніка захватів, кидків та больових прийомів</li>
            <li>Робота в партері та стійці</li>
            <li>Розвиток тактичного мислення</li>
            <li>Фізична підготовка та розтяжка</li>
            <li>Спаринги та практичні вправи</li>
          </ul>
          <h3>Переваги:</h3>
          <p>
            Джиу-джитсу розвиває не лише тіло, а й розум. Діти вчаться аналізувати ситуацію, 
            приймати швидкі рішення та долати труднощі.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: 'Шиття',
      schedule: 'Середа 14:00\nП\'ятниця 16:00',
      image: '/additional_classes/ch.jpg',
      description: (
        <>
          <p>
            Творчі заняття з шиття, де діти вчаться створювати власні вироби своїми руками. 
            Від простих проектів до складних творчих робіт.
          </p>
          <h3>Що ми робимо:</h3>
          <ul>
            <li>Основи роботи з тканиною та швейною машинкою</li>
            <li>Вивчення різних видів швів та технік</li>
            <li>Створення іграшок, аксесуарів та одягу</li>
            <li>Робота з викрійками та дизайн власних моделей</li>
            <li>Декорування та оздоблення виробів</li>
          </ul>
          <h3>Навички:</h3>
          <p>
            Діти розвивають дрібну моторику, просторове мислення, креативність та вчаться 
            доводити справу до кінця, створюючи корисні та красиві речі.
          </p>
        </>
      )
    }
  ];

  const individualClasses = [
    { 
      id: 1, 
      title: '🎤 Вокал',
      description: 'Розвиток голосу, слуху та артистичності. Діти вчаться співати впевнено та з задоволенням.'
    },
    { 
      id: 2, 
      title: '🥁 Барабани',
      description: 'Ритм, енергія та драйв! Заняття допомагають розвинути координацію та музичне відчуття.'
    },
    { 
      id: 3, 
      title: '🎹 Фортепіано',
      description: 'Класична музична освіта у легкій та цікавій формі. Розвиваємо слух, пам\'ять і увагу.'
    },
    { 
      id: 4, 
      title: '🎸 Гітара',
      description: 'Навчання грі у сучасному форматі — від перших акордів до улюблених пісень.'
    },
    { 
      id: 5, 
      title: '🗣 Логопед',
      description: 'Індивідуальна робота над правильним мовленням, звуками та впевненістю у спілкуванні.'
    },
    { 
      id: 6, 
      title: '📚 Швидкочитання та підготовка до школи',
      description: 'Розвиток навичок читання, мислення та концентрації. М\'яка та ефективна підготовка до навчання.'
    },
    { 
      id: 7, 
      title: '💻 Малювання на планшеті',
      description: 'Сучасна творчість для дітей — розвиток фантазії та навичок digital-малювання.'
    },
    { 
      id: 8, 
      title: '🇬🇧 Англійська мова (репетитор)',
      description: 'Індивідуальний підхід до кожної дитини: від бази до впевненого спілкування.'
    },
    { 
      id: 9, 
      title: '➕ Математика (репетитор)',
      description: 'Пояснюємо складне просто. Допомагаємо полюбити логіку та цифри.'
    },
    { 
      id: 10, 
      title: '📖 Читання (репетитор)',
      description: 'Покращення техніки читання, розуміння тексту та любові до книг.'
    }
  ];

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
                <h1 className={styles.title}>Додаткові заняття</h1>
                <div className={styles.beeBackground}>
                  <Image
                    src="/images/bee_1.png"
                    alt="BeBee School - логотип пчелы, символ додаткових занять"
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

        <section className={styles.classesSection}>
          <div className={styles.container}>
            {/* Tabs */}
            <div className={styles.tabs}>
              <button 
                className={`${styles.tab} ${activeTab === 'group' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('group')}
              >
                Групові
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'individual' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('individual')}
              >
                Індивідуальні
              </button>
            </div>

            {/* Group Classes */}
            {activeTab === 'group' && (
              <div className={styles.classesGrid}>
                {groupClasses.map((item) => (
                  <div 
                    key={item.id} 
                    className={styles.classCard}
                    onClick={() => handleOpenInfoModal(item)}
                  >
                    <div className={styles.cardLeft}>
                      <div>
                        <h3 className={styles.classTitle}>{item.title}</h3>
                        <p className={styles.classSchedule}>{item.schedule}</p>
                      </div>
                    </div>
                    <div className={styles.cardRight}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={item.image}
                          alt={`${item.title} - групові заняття для дітей у BeBee School`}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <span className={styles.arrowIcon}>→</span>
                  </div>
                ))}
              </div>
            )}

            {/* Individual Classes */}
            {activeTab === 'individual' && (
              <>
                <div className={styles.infoBlock}>
                  <p className={styles.infoBlockText} style={{ marginTop: '1rem' }}>
                    Заняття проходять поки ваша дитина знаходиться у школі чи садочку. Ми цінуємо Ваш час 
                    та розклад вашої дитини
                  </p>
                </div>

                <div className={styles.introText}>
                  <p>
                    У BeBee ми віримо, що кожна дитина - унікальна ✨
                  </p>
                  <p>
                    Тому пропонуємо широкий вибір індивідуальних занять, які допомагають розкрити таланти, 
                    зміцнити знання та впевненість у собі.
                  </p>
                </div>

                <div className={styles.descriptionBlock}>
                  <div className={styles.descriptionItem}>
                    <h4>🎤 Вокал</h4>
                    <p>Розвиток голосу, слуху та артистичності. Діти вчаться співати впевнено та з задоволенням.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>🥁 Барабани</h4>
                    <p>Ритм, енергія та драйв! Заняття допомагають розвинути координацію та музичне відчуття.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>🎹 Фортепіано</h4>
                    <p>Класична музична освіта у легкій та цікавій формі. Розвиваємо слух, пам'ять і увагу.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>🎸 Гітара</h4>
                    <p>Навчання грі у сучасному форматі — від перших акордів до улюблених пісень.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>🗣 Логопед</h4>
                    <p>Індивідуальна робота над правильним мовленням, звуками та впевненістю у спілкуванні.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>📚 Швидкочитання та підготовка до школи</h4>
                    <p>Розвиток навичок читання, мислення та концентрації. М'яка та ефективна підготовка до навчання.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>💻 Малювання на планшеті</h4>
                    <p>Сучасна творчість для дітей — розвиток фантазії та навичок digital-малювання.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>🇬🇧 Англійська мова (репетитор)</h4>
                    <p>Індивідуальний підхід до кожної дитини: від бази до впевненого спілкування.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>➕ Математика (репетитор)</h4>
                    <p>Пояснюємо складне просто. Допомагаємо полюбити логіку та цифри.</p>
                  </div>
                  <div className={styles.descriptionItem}>
                    <h4>📖 Читання (репетитор)</h4>
                    <p>Покращення техніки читання, розуміння тексту та любові до книг.</p>
                  </div>
                </div>

                <div className={styles.ctaBlock}>
                  <h3 className={styles.ctaTitle}>Записатися на заняття</h3>
                  <div className={styles.ctaButtons}>
                    <button className={styles.ctaButton} onClick={handleOpenModal}>
                      Залишити заявку
                    </button>
                    <a href="tel:+380509400770" className={styles.ctaButtonPhone}>
                      <span className={styles.phoneIcon}>📞</span>
                      Подзвонити
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} source="Додаткові заняття" />
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={handleCloseInfoModal}
        title={selectedClass?.title || ''}
        content={selectedClass?.description || null}
      />
    </div>
  );
}
