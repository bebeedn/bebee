'use client';

import styles from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.infoItem}>
        <h3 className={styles.infoTitle}>Харчування</h3>
        <p className={styles.infoText}>300 грн/день (оплачується окремо)</p>
      </div>
      
      <div className={`${styles.infoItem} ${styles.infoItemSecond}`}>
        <h3 className={styles.infoTitle}>Чергова група до 19:00</h3>
        <p className={styles.infoText}>+100 грн</p>
      </div>
      
      <div className={`${styles.infoItem} ${styles.infoItemThird}`}>
        <h3 className={styles.infoTitle}>Додаткові заняття</h3>
        <p className={styles.infoText}>Спортивна секція • Малювання • Вокал • Фортепіано • Логопед</p>
      </div>
    </div>
  );
}
