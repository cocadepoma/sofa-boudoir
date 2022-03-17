import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const ResponsiveMenu = ({ navScrolled, styles }) => {
  return (
    <div className={styles.responsiveMenu}>
      <FontAwesomeIcon
        onClick={() => { console.log('click') }}
        className={`${styles.burger} ${navScrolled ? styles.burgerScrolled : ''}`}
        icon={faBars}
      />
    </div>
  );
};
