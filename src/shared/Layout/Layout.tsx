import React from 'react';
import styles from './layout.module.css';
import { Header } from './Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}