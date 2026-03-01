'use client';

import { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Сброс формы через 2 секунды
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setSubmitStatus(null);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрити">
          ✕
        </button>

        <h2 className={styles.title}>Записатися до школи</h2>
        <p className={styles.subtitle}>
          Заповніть форму і ми зв'яжемося з вами найближчим часом
        </p>

        {submitStatus === 'success' ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <p>Дякуємо! Ваша заявка прийнята.</p>
            <p>Ми зв'яжемося з вами найближчим часом.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Ім'я <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Введіть ваше ім'я"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Телефон <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="+38 (099) 123 45 67"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="example@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Повідомлення
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="4"
                placeholder="Розкажіть про вашу дитину та ваші побажання..."
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Відправка...' : 'Відправити заявку'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
