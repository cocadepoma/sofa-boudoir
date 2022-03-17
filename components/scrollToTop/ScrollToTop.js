import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTop = ({ goTopScrolled, styles }) => {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`${styles.goTopButton} ${goTopScrolled ? styles.goTopScrolled : ''}`}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </div>
  );
};
