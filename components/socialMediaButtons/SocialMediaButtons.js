import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const SocialMediaButtons = ({ navScrolled, styles }) => {
  return (
    <div className={styles.socialMedia}>
      <FontAwesomeIcon
        onClick={() => window.open('https://es-es.facebook.com/elsofarojo.es/', '_blank')}
        className={`${styles.socialButton} ${styles.facebook} ${navScrolled ? styles.facebookScrolled : ''}`}
        icon={faFacebookF}
      />
      <FontAwesomeIcon
        onClick={() => window.open('https://www.instagram.com/elsofarojo.es/?hl=es', '_blank')}
        className={`${styles.socialButton} ${styles.instagram} ${navScrolled ? styles.instagramScrolled : ''}`}
        icon={faInstagram}
      />
      <FontAwesomeIcon
        onClick={() => window.open('https://www.facebook.com/elsofarojoboudoir/', '_blank')}
        className={`${styles.socialButton} ${styles.twitter} ${navScrolled ? styles.twitterScrolled : ''}`}
        icon={faTwitter}
      />
    </div>
  );
};
