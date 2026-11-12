'use client';

import styles from './PriceCard.module.css';

export default function PriceCard({
  title,
  age,
  halfDay,
  fullDay,
  workingHours,
  paymentTitle,
  paymentSubtitle,
  additionalPrices,
  onDetailsClick
}) {
  const hasUpdatedPricing = Boolean(workingHours && paymentTitle && additionalPrices?.length);
  const hasHalfDayPrice = Boolean(halfDay);

  return (
    <div className={`${styles.card} ${hasUpdatedPricing ? styles.expandedCard : ''}`}>
      <h3 className={styles.title} data-price-card-title>{title}</h3>
      <p className={styles.age}>{age}</p>

      {hasUpdatedPricing && (
        <div className={styles.detailsSection}>
          <div className={styles.scheduleBlock}>
            <p className={styles.detailsLabel}>Ми працюємо</p>
            <p className={styles.detailsValue}>{workingHours}</p>
          </div>

          <div className={styles.paymentBlock}>
            <p className={styles.paymentTitle}>{paymentTitle}</p>
            <p className={styles.paymentSubtitle}>{paymentSubtitle}</p>
          </div>
        </div>
      )}

      <div className={`${styles.priceSection} ${!hasHalfDayPrice ? styles.singlePriceSection : ''}`}>
        {hasHalfDayPrice && (
          <>
            <div className={styles.priceItem}>
              <p className={styles.priceLabel}>Півдня</p>
              <p className={styles.priceValue}>{halfDay}</p>
            </div>

            <div className={styles.divider}></div>
          </>
        )}

        <div className={styles.priceItem}>
          <p className={styles.priceLabel}>Повний день</p>
          <p className={styles.priceValue}>{fullDay}</p>
        </div>
      </div>

      {hasUpdatedPricing && (
        <div className={styles.additionalBlock}>
          <p className={styles.additionalTitle}>Додатково</p>
          <ul className={styles.additionalList}>
            {additionalPrices.map((item) => (
              <li className={styles.additionalItem} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <p className={styles.note}>*Харчування сплачується окремо</p>
      
      <button className={styles.detailsButton} onClick={onDetailsClick}>
        Дізнатись деталі
      </button>
    </div>
  );
}
