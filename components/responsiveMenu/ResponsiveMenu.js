import { useContext } from 'react';
import { UIContext } from '../../contexts/UIContext/UIContext';
import { TopMenu } from '../topMenu/TopMenu';

import styles from "./RespMenu.module.scss";

export const ResponsiveMenu = ({ navScrolled }) => {
  const { isMenuResponsiveEnabled, toggleMenu } = useContext(UIContext);

  return (
    <>
      {/* <div className={`${styles.responsiveMenu} ${isMenuResponsiveEnabled ? styles.active : ''}`}> */}
      <div
        className={`${styles.burger} ${navScrolled ? styles.burgerScrolled : ''} ${isMenuResponsiveEnabled ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <div className={`${styles.bar} ${isMenuResponsiveEnabled ? styles.toggledBar1 : ''}`} />
        <div className={`${styles.bar} ${styles.bar2} ${isMenuResponsiveEnabled ? styles.toggledBar2 : ''}`} />
        <div className={`${styles.bar} ${isMenuResponsiveEnabled ? styles.toggledBar3 : ''}`} />
      </div>
      {/* </div> */}

      <nav className={`${styles.menuClickArea} ${isMenuResponsiveEnabled ? styles.active : ''}`} >
        <TopMenu styles={styles} />
      </nav>
    </>
  );
};
