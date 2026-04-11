'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      {/* Google карта на всю ширину */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4259926894133!2d35.04553357684496!3d48.467542028131575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e86c73ac0d%3A0x5abd31d069ae332e!2z0JXQstGA0L7Qv9C10LnRgdC60LDRjyDRg9C7LiwgN9CQLCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1775926414654!5m2!1sru!2sua"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Розташування BeBee School та Садочок"
        ></iframe>
        
        {/* Кнопки для маршрутів */}
        <div className={styles.routeButtons}>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Дніпро,+вул.+Європейська+7а"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.routeButton}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            Школа
          </a>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Дніпро,+вул.+Європейська+20а"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.routeButton}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            Садочок
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <h3 className={styles.title}>BeBee</h3>
              <p className={styles.text}>
                Приватна школа<br />
                Якісна освіта для вашої дитини
              </p>
            </div>
            <a 
              href="/images/Договір 2026 новий.docx" 
              download="Договір оферти BeBee.docx"
              className={styles.contractButton}
            >
              📄 Договір оферти
            </a>
          </div>

          <div className={styles.contacts}>
            <h4 className={styles.subtitle}>Контакти</h4>
            <p className={styles.contact}>
              <span>📞</span> <a href="tel:+380509400770">+38 (050) 940-07-70</a>
            </p>
            <p className={styles.contact}>
              <span>📍</span> Дніпро, вул. Європейська 7а (Школа)
            </p>
            <p className={styles.contact}>
              <span>📍</span> Дніпро, вул. Європейська 20а (Сад)
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/bebee.school?igsh=MXFrazI0Y3l6aDBoMA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram Школа"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Школа</span>
              </a>
              <a 
                href="https://www.instagram.com/be.bee_sadik?igsh=MTJtazZhZTBmMzRxaA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram Садочок"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Садочок</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BeBee. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
