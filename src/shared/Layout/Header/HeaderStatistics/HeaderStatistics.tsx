
import styles from './headerstatistics.module.css';
import { HeaderDiagram } from '../../../icons/headerDiagram';
import { Break } from '../../../Break';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon } from '../../../icons/moon';
import { Sun } from '../../../icons/sun';
import React from 'react';

export function HeaderStatistics() {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  function handleDay() {
    setTheme('light')
  }

  function handleNight() {
    setTheme('dark')
  }
  return (
    <div className={styles.headerStatistics}>
      {theme == 'dark'
        ? <button className={styles.btnTheme} onClick={handleDay}><Sun /></button>
        : <button className={styles.btnTheme} onClick={handleNight}><Moon /></button>
      }
      <HeaderDiagram />
      <Break size={8} />
      <Link className={styles.headerStatisticsDescr} to='React_project/stat'>Статистика</Link>
    </div>
  );
}
