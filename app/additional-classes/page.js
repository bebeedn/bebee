'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './page.module.css';

const Modal = dynamic(() => import('../components/Modal/Modal'));

export default function AdditionalClasses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('group'); // 'group' or 'individual'

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const groupClasses = [
    {
      id: 1,
      title: 'Малювання',
      schedule: 'Понеділок, Середа | 17:00-18:00',
      image: '/additional_classes/pens.jpg',
    },
    {
      id: 2,
      title: 'Таквандо',
      schedule: '17:00',
      image: '/additional_classes/td.jpg',
    },
    {
      id: 3,
      title: 'Джиу-джитсу',
      schedule: 'Понеділок, Середа, П\'ятниця | 16:00-17:00',
      image: '/additional_classes/dj.jpg',
    },
    {
      id: 4,
      title: 'Шиття',
      schedule: 'Середа 14:00\nП\'ятниця 16:00',
      image: '/additional_classes/ch.jpg',
    }
  ];

  const individualClasses = [
    { id: 1, title: 'Вокал' },
    { id: 2, title: 'Барабани' },
    { id: 3, title: 'Фортепіано' },
    { id: 4, title: 'Гітара' },
    { id: 5, title: 'Англійська мова' },
    { id: 6, title: 'Клуб української мови' },
    { id: 7, title: 'Логопед' },
    { id: 8, title: 'Швидкочитання' },
    { id: 9, title: 'Малювання на планшеті' }
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
                  <div key={item.id} className={styles.classCard}>
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
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className={styles.image}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Individual Classes */}
            {activeTab === 'individual' && (
              <>
                <div className={styles.infoBlock}>
                  <p className={styles.infoBlockText}>
                    Всі заняття відбуваються на поверсі школи/садочка, вчитель сам забирає дитину
                  </p>
                </div>
                
                <div className={styles.individualGrid}>
                  {individualClasses.map((item) => (
                    <div key={item.id} className={styles.individualCard}>
                      <h3 className={styles.individualTitle}>{item.title}</h3>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
