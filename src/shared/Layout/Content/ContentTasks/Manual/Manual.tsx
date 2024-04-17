import React from 'react';
import styles from './manual.module.css';

export function Manual() {
  return (
    <div className={styles.manualContent}>
      <h2 className={styles.manualTitle}>
        Ура! Теперь можно начать работать:
      </h2>
      <ul className={styles.manualList}>
        <li className={styles.manualItem}><span>Выберите категорию и напишите название текущей задачи</span></li>
        <li className={styles.manualItem}><span>Запустите таймер («помидор»)</span></li>
        <li className={styles.manualItem}><span>Работайте пока «помидор» не прозвонит</span></li>
        <li className={styles.manualItem}><span>Сделайте короткий перерыв (3-5 минут)</span></li>
        <li className={styles.manualItem}><span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</span></li>
      </ul>
    </div>
  );
}
