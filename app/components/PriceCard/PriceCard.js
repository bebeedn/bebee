'use client';

import styles from './PriceCard.module.css';

export default function PriceCard({ title, age, halfDay, fullDay, onDetailsClick }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title} data-price-card-title>{title}</h3>
      <p className={styles.age}>{age}</p>
      
      <div className={styles.priceSection}>
        <div className={styles.priceItem}>
          <p className={styles.priceLabel}>Півдня</p>
          <p className={styles.priceValue}>{halfDay}</p>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.priceItem}>
          <p className={styles.priceLabel}>Повний день</p>
          <p className={styles.priceValue}>{fullDay}</p>
        </div>
      </div>
      
      <p className={styles.note}>*Харчування сплачується окремо</p>
      
      <button className={styles.detailsButton} onClick={onDetailsClick}>
        Дізнатись деталі
      </button>
    </div>
  );
}
