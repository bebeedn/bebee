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

export default function Kindergarten() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
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

  const handleOpenInfoModal = (group) => {
    setSelectedGroup(group);
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
    setSelectedGroup(null);
  };

  const ageGroups = [
    {
      id: 1,
      title: 'Ясла',
      age: '1.5-2 роки',
      subtitle: '1р/2кг',
      content: (
        <>
          <p>Найменша група нашого садочка для малюків від 1.5 до 2 років.</p>
          <h3>Особливості групи:</h3>
          <ul>
            <li>М'яка адаптація до садочка</li>
            <li>Індивідуальний підхід до кожної дитини</li>
            <li>Розвиток сенсорики та дрібної моторики</li>
            <li>Формування навичок самообслуговування</li>
            <li>Музичні та ігрові заняття</li>
          </ul>
          <h3>Режим дня:</h3>
          <p>Гнучкий режим з урахуванням індивідуальних потреб малюків, денний сон 2-3 години.</p>
        </>
      )
    },
    {
      id: 2,
      title: 'Ранки',
      age: '2.5-3.5 роки',
      content: (
        <>
          <p>Група для активних малюків, які активно пізнають світ.</p>
          <h3>Програма розвитку:</h3>
          <ul>
            <li>Розвиток мовлення та комунікації</li>
            <li>Творчі заняття: малювання, ліплення</li>
            <li>Музика та ритміка</li>
            <li>Перші кроки в англійській мові</li>
            <li>Фізичний розвиток та рухливі ігри</li>
            <li>Соціалізація в колективі</li>
          </ul>
          <h3>Харчування:</h3>
          <p>4-разове збалансоване харчування з урахуванням вікових особливостей.</p>
        </>
      )
    },
    {
      id: 3,
      title: 'Середня група',
      age: '4-5 років',
      content: (
        <>
          <p>Активний розвиток пізнавальних здібностей та підготовка до навчання.</p>
          <h3>Освітня програма:</h3>
          <ul>
            <li>Математика та логіка</li>
            <li>Розвиток мовлення та грамота</li>
            <li>Англійська мова з носієм</li>
            <li>Творчість: малювання, музика, театр</li>
            <li>Природознавство та експерименти</li>
            <li>Фізкультура та хореографія</li>
          </ul>
          <h3>Додатково:</h3>
          <p>Екскурсії, тематичні тижні, святкові заходи.</p>
        </>
      )
    },
    {
      id: 4,
      title: 'Старша група',
      age: '5-6 років',
      content: (
        <>
          <p>Комплексна підготовка до школи з акцентом на розвиток самостійності.</p>
          <h3>Підготовка до школи:</h3>
          <ul>
            <li>Читання та письмо</li>
            <li>Математика та логічне мислення</li>
            <li>Англійська мова (розширена програма)</li>
            <li>Розвиток уваги та пам'яті</li>
            <li>Проектна діяльність</li>
            <li>Соціально-емоційний інтелект</li>
          </ul>
          <h3>Результат:</h3>
          <p>Дитина готова до навчання в школі психологічно, інтелектуально та соціально.</p>
        </>
      )
    },
    {
      id: 5,
      title: '0 клас',
      age: '6-7 років',
      content: (
        <>
          <p>Інтенсивна підготовка до першого класу за програмою НУШ.</p>
          <h3>Програма навчання:</h3>
          <ul>
            <li>Читання та розуміння тексту</li>
            <li>Письмо та каліграфія</li>
            <li>Математика та геометрія</li>
            <li>Англійська мова (просунутий рівень)</li>
            <li>Природознавство та дослідження</li>
            <li>Критичне мислення</li>
          </ul>
          <h3>Особливості:</h3>
          <p>Формат занять максимально наближений до шкільного, але зі збереженням ігрової складової.</p>
        </>
      )
    }
  ];

  const noSubscriptionInfo = {
    title: 'Без абонементів',
    content: (
      <>
        <p>Ми пропонуємо гнучку систему оплати без обов'язкових абонементів.</p>
        <h3>Переваги:</h3>
        <ul>
          <li>Оплата тільки за фактично відвідані дні</li>
          <li>Немає необхідності оплачувати весь місяць наперед</li>
          <li>Можливість відвідувати садочок за зручним графіком</li>
          <li>Прозора система розрахунків</li>
          <li>Знижки при регулярному відвідуванні</li>
        </ul>
        <h3>Як це працює:</h3>
        <p>Ви оплачуєте тільки ті дні, коли дитина відвідує садочок. Розрахунок проводиться в кінці місяця на основі фактичного відвідування.</p>
        <h3>Вартість:</h3>
        <p>Вартість одного дня залежить від обраної вікової групи та додаткових послуг. Детальну інформацію можна отримати за телефоном або при особистій зустрічі.</p>
      </>
    )
  };

  const features = [
    {
      title: 'Малокомплектні групи',
      description: 'До 12 дітей у групі для індивідуального підходу',
      icon: '👥'
    },
    {
      title: 'Розвиваюча програма',
      description: 'Комплексний розвиток: інтелект, творчість, фізична активність',
      icon: '🎨'
    },
    {
      title: 'Англійська мова',
      description: 'Щоденні заняття з носіями мови',
      icon: '🗣️'
    },
    {
      title: 'Здорове харчування',
      description: '4-разове збалансоване харчування',
      icon: '🍎'
    },
    {
      title: 'Безпечне середовище',
      description: 'Сучасне обладнання та відеоспостереження',
      icon: '🛡️'
    },
    {
      title: 'Досвідчені педагоги',
      description: 'Професійна команда з любов\'ю до дітей',
      icon: '👩‍🏫'
    }
  ];

  const schedule = [
    { time: '8:00 - 9:00', activity: 'Прийом дітей, ранкова зустріч' },
    { time: '9:00 - 9:30', activity: 'Сніданок' },
    { time: '9:30 - 10:30', activity: 'Розвиваючі заняття' },
    { time: '10:30 - 12:00', activity: 'Прогулянка на свіжому повітрі' },
    { time: '12:00 - 12:30', activity: 'Обід' },
    { time: '12:30 - 15:00', activity: 'Денний сон' },
    { time: '15:00 - 15:30', activity: 'Полудень' },
    { time: '15:30 - 17:00', activity: 'Творчі заняття, ігри' },
    { time: '17:00 - 18:00', activity: 'Вечірня прогулянка' }
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
                <h1 className={styles.title}>Садочок BE-BEE</h1>
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
                Турбота, розвиток та щастя вашої дитини
              </p>
            </div>
          </div>
        </div>

        <section className={`${styles.aboutSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[0] = el}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2>Про наш садочок</h2>
                <p>
                  BE-BEE - це сучасний приватний садочок, де кожна дитина отримує індивідуальну увагу 
                  та можливість розвиватися у комфортному темпі. Ми створили простір, де діти почуваються 
                  безпечно, щасливо та з радістю пізнають світ.
                </p>
                <p>
                  Наша програма поєднує класичні методики дошкільної освіти з сучасними підходами, 
                  що дозволяє гармонійно розвивати всі сфери особистості дитини.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/categories_photo/2026-03-05 14.25.05.jpg"
                  alt="Діти в садочку"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.ageGroupsSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[1] = el}>
          <div className={styles.container}>
            <h2>Вікові групи</h2>
            <div className={styles.ageGroupsGrid}>
              <div className={styles.ageGroupsLeft}>
                {ageGroups.map((group) => (
                  <div 
                    key={group.id} 
                    className={styles.ageGroupCard}
                    onClick={() => handleOpenInfoModal(group)}
                  >
                    <h3>{group.title}</h3>
                    <p className={styles.ageGroupAge}>{group.age}</p>
                    {group.subtitle && <p className={styles.ageGroupSubtitle}>{group.subtitle}</p>}
                  </div>
                ))}
              </div>
              <div className={styles.ageGroupsRight}>
                <div 
                  className={styles.noSubscriptionCard}
                  onClick={() => handleOpenInfoModal(noSubscriptionInfo)}
                >
                  <h3>Без абонементів</h3>
                  <p>Сплата за дні коли дитина у садочку</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.ctaSection} ${styles.fadeIn}`} ref={el => sectionsRef.current[2] = el}>
          <div className={styles.container}>
            <h2>Запис відкрито</h2>
            <p>Завітайте до нас, познайомтеся з педагогами та подивіться на наш садочок</p>
            <button className={styles.ctaButton} onClick={handleOpenModal}>
              Записатися в садочок
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Записатися до садочка" />
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={handleCloseInfoModal}
        title={selectedGroup?.title || ''}
        content={selectedGroup?.content || null}
      />
    </div>
  );
}
