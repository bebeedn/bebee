'use client';

import { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, title = "Записатися до школи" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  if (!isOpen) return null;

  // Функції валідації
  const validateName = (name) => {
    if (!name.trim()) {
      return "Ім'я обов'язкове для заповнення";
    }
    if (name.trim().length < 2) {
      return "Ім'я повинно містити мінімум 2 символи";
    }
    if (!/^[а-яА-ЯіІїЇєЄґҐa-zA-Z\s'-]+$/.test(name)) {
      return "Ім'я може містити тільки літери";
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Телефон обов'язковий для заповнення";
    }
    // Видаляємо всі символи крім цифр
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return "Введіть коректний номер телефону";
    }
    if (!cleanPhone.startsWith('380') && cleanPhone.length === 12) {
      return "Номер повинен починатися з +380";
    }
    return '';
  };

  const validateEmail = (email) => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Введіть коректний email";
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Обробка поля імені
    if (name === 'name') {
      // Дозволяємо тільки літери, пробіли, апострофи та дефіси
      processedValue = value.replace(/[^а-яА-ЯіІїЇєЄґҐa-zA-Z\s'-]/g, '');
      
      // Перша буква з великої
      if (processedValue.length > 0) {
        processedValue = processedValue.charAt(0).toUpperCase() + processedValue.slice(1);
      }
    }

    // Обробка поля телефону
    if (name === 'phone') {
      // Дозволяємо тільки цифри, +, -, (, )
      processedValue = value.replace(/[^\d+\-()]/g, '');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Валідація при введенні
    if (touched[name]) {
      let error = '';
      if (name === 'name') error = validateName(processedValue);
      if (name === 'phone') error = validatePhone(processedValue);
      if (name === 'email') error = validateEmail(processedValue);

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Валідація при втраті фокусу
    let error = '';
    if (name === 'name') error = validateName(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'email') error = validateEmail(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валідація всіх полів перед відправкою
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);

    const newErrors = {
      name: nameError,
      phone: phoneError,
      email: emailError,
    };

    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });

    // Якщо є помилки, не відправляємо форму
    if (nameError || phoneError || emailError) {
      return;
    }

    setIsSubmitting(true);
    
    // Імітація відправки форми
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Скидання форми через 2 секунди
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setErrors({});
        setTouched({});
        setSubmitStatus(null);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрити">
            ✕
          </button>
        </div>

        <h2 className={styles.title}>{title}</h2>
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
                onBlur={handleBlur}
                className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                placeholder="Введіть ваше ім'я"
              />
              {errors.name && touched.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
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
                onBlur={handleBlur}
                className={`${styles.input} ${errors.phone && touched.phone ? styles.inputError : ''}`}
                placeholder="+38 (050) 111-22-33"
              />
              {errors.phone && touched.phone && (
                <span className={styles.errorMessage}>{errors.phone}</span>
              )}
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
                onBlur={handleBlur}
                className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                placeholder="example@email.com"
              />
              {errors.email && touched.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
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
    </div>
  );
}
