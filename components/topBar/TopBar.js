import { TopBarLogo } from '../topBarLogo/TopBarLogo';
import { TopMenu } from '../topMenu/TopMenu';

export const TopBar = ({ styles, navScrolled }) => {
  return (
    <nav className={`${styles.nav} ${navScrolled ? styles.navScrolled : ''}`} >
      {/* Topbar Logo */}
      <TopBarLogo navScrolled={navScrolled} styles={styles} />

      {/* Top Menu */}
      <TopMenu styles={styles} />
    </nav>
  );
};
