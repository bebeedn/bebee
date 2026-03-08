'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './InfoModal.module.css';

export default function InfoModal({ isOpen, onClose, title, content }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image 
            src="/images/close.png" 
            alt="Close" 
            width={24}
            height={24}
          />
        </button>
        
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          {content}
        </div>
      </div>
    </div>
  );
}
