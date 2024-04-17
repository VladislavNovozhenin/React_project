import React from 'react';
import styles from './headerlogo.module.css';
import { Break } from '../../../Break';
import { HeaderSvg } from '../../../icons/headerSvg';
import { Link } from 'react-router-dom';


export function HeaderLogo() {
  return (
    <div className={styles.headerLogo}>
      <HeaderSvg />
      <Break size={8} />
      <Link className={styles.headerLogoDescr} to='React_project/'>pomodoro_box</Link>
      

    </div>
  );
}
