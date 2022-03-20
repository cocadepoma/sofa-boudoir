import Image from 'next/image';

import imageLogo from '../../assets/images/logo.png';
import imageLogoBlack from '../../assets/images/logo_black.png';

export const TopBarLogo = ({ navScrolled, styles }) => {
  return (
    <div className={`${styles.logo} ${navScrolled ? styles.logoScrolled : ''}`}>
      {
        navScrolled
          ? <Image src={imageLogoBlack} alt="el-sofa-boudoir-logo-black" />
          : <Image src={imageLogo} alt="el-sofa-boudoir-logo" />
      }
    </div>
  );
};
