import React from 'react';
import styles from '../styles/card.module.css';

export default function AlgorithmCard({ name, isSelected, onClick }) {
  return (
    <div
      className={`${styles.main} ${isSelected ? styles.sel : styles.desel}`}
      onClick={onClick}
    >
      <div className={styles.Card}>{name}</div>
    </div>
  );
}
