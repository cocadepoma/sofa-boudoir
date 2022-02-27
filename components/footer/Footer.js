import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gracias por elegirnos
      </a>
    </footer>
  )
}
