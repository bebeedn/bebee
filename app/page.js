'use client';

import { useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import AboutSection from './components/AboutSection/AboutSection';
import AchievementSection from './components/AchievementSection/AchievementSection';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import AnimatedBee from './components/AnimatedBee/AnimatedBee';
import styles from './page.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Banner onOpenModal={handleOpenModal} />
        <Categories />
        <AboutSection />
        {/* <AchievementSection /> */}
        <Gallery />
        <Reviews />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      
      {/* Анимированная пчела */}
      <AnimatedBee />
    </div>
  );
}
