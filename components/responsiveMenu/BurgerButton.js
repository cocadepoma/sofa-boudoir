import { useContext } from 'react';
import { UIContext } from '../../contexts/UIContext/UIContext';
import styles from "./RespMenu.module.scss";

export const BugerButton = ({ navScrolled }) => {
  const { isMenuResponsiveEnabled, toggleMenu } = useContext(UIContext);

  return (
    <div className={`${styles.responsiveMenu} ${isMenuResponsiveEnabled ? styles.active : ''}`}>
      <div
        className={`${styles.burger} ${navScrolled ? styles.burgerScrolled : ''}`}
        onClick={toggleMenu}
      >
        <div className={`${styles.bar} ${isMenuResponsiveEnabled ? styles.toggledBar1 : ''}`} />
        <div className={`${styles.bar} ${isMenuResponsiveEnabled ? styles.toggledBar2 : ''}`} />
        <div className={`${styles.bar} ${isMenuResponsiveEnabled ? styles.toggledBar3 : ''}`} />
      </div>
    </div>
  );
};
