import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTop = ({ goTopScrolled, styles, disabled }) => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`${styles.goTopButton} ${goTopScrolled ? styles.goTopScrolled : ''} ${disabled ? styles.disabled : ''}`}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </div>
  );
};
