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
      schedule: 'Понеділок, Середа | 16:00',
      image: '/gallery_photo/2026-03-05 15.41.11.jpg',
    },
    {
      id: 2,
      title: 'Таквандо',
      schedule: 'Вівторок, Четвер | 17:00',
      image: '/gallery_photo/2026-03-05 15.41.24.jpg',
    },
    {
      id: 3,
      title: 'Джиу-джитсу',
      schedule: 'Понеділок, П\'ятниця | 18:00',
      image: '/gallery_photo/2026-03-05 15.41.35.jpg',
    },
    {
      id: 4,
      title: 'Шиття',
      schedule: 'Середа, П\'ятниця | 16:00',
      image: '/gallery_photo/2026-03-05 15.40.56.jpg',
    }
  ];

  const individualClasses = [
    {
      id: 1,
      title: 'Англійська мова',
      schedule: 'Понеділок, Середа, П\'ятниця | 15:00',
      image: '/gallery_photo/2026-03-05 15.40.47.jpg',
    },
    {
      id: 2,
      title: 'Музика',
      schedule: 'Вівторок, Четвер | 16:00',
      image: '/gallery_photo/2026-03-05 15.41.19.jpg',
    },
    {
      id: 3,
      title: 'Логопед',
      schedule: 'За записом',
      image: '/gallery_photo/2026-03-07 17.58.47.jpg',
    },
    {
      id: 4,
      title: 'Психолог',
      schedule: 'За записом',
      image: '/gallery_photo/2026-03-07 17.58.58.jpg',
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
              <div className={styles.classesGrid}>
                {individualClasses.map((item) => (
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
          </div>
        </section>
      </main>

      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
