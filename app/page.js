'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import AboutSection from './components/AboutSection/AboutSection';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';

const Modal = dynamic(() => import('./components/Modal/Modal'));
const AnimatedBee = dynamic(() => import('./components/AnimatedBee/AnimatedBee'), {
  ssr: false,
});

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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} source="Головна сторінка" />
      
      {/* Анимированная пчела */}
      <AnimatedBee />
    </div>
  );
}
