import { useRouter } from 'next/router';
import Link from 'next/link';

export const TopMenu = ({ styles }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.menu}>
      <Link legacyBehavior href='/'>
        <a className={`${styles.links} ${pathname === '/' ? styles.active : ''}`}>Home</a>
      </Link>

      <Link legacyBehavior href='/photoshoots'>
        <a className={`${styles.disabled} ${styles.links} ${pathname.startsWith('/photoshoots') ? styles.active : ''}`}>Galería</a>
      </Link>

      <Link legacyBehavior href='/about'>
        <a className={`${styles.disabled} ${styles.links} ${pathname.startsWith('/about') ? styles.active : ''}`}>Sobre nosotros</a>
      </Link>

      <Link legacyBehavior href='/blog'>
        <a className={`${styles.disabled} ${styles.links} ${pathname.startsWith('/blog') ? styles.active : ''}`}>Blog</a>
      </Link>

      <Link legacyBehavior href='/contact'>
        <a className={`${styles.disabled} ${styles.links} ${pathname.startsWith('/contact') ? styles.active : ''}`}>Contacto</a>
      </Link>
    </div>
  );
};
