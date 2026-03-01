'use client';

import Image from 'next/image';
import styles from './Banner.module.css';

export default function Banner({ onOpenModal }) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Баннер изображение */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/IMG_1884.JPG"
              alt="Be-Bee School"
              width={922}
              height={512}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
