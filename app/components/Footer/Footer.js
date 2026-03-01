import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      {/* Google карта на всю ширину */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.637739718634!2d30.523398776950654!3d50.450441071593394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50d0c8e3c1%3A0x2e3e3e3e3e3e3e3e!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Розташування Be-Bee School"
        ></iframe>
        
        {/* Кнопка проложить маршрут */}
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=50.450441,30.523399"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.routeButton}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          Проложити маршрут
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.title}>Be-Bee School</h3>
            <p className={styles.text}>
              Приватна школа<br />
              Якісна освіта для вашої дитини
            </p>
          </div>

          <div className={styles.contacts}>
            <h4 className={styles.subtitle}>Контакти</h4>
            <p className={styles.contact}>
              <span>📞</span> <a href="tel:+380991924620">+38 (099) 192 46 20</a>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Be-Bee School. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
