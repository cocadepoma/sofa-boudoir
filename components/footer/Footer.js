import React from 'react';
import styles from './footer.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h5>¡Hola, Preciosa!</h5>
        <p>
          ¡Es hora de mimarte porque te lo mereces! No importa quién eres, qué haces, tu forma / tamaño / color / ect. Eres hermosa, sexy y absolutamente impresionante. Tomaremos tu foto y te lo demostraremos.
        </p>
      </div>
      <div className={styles.socialMediaContainer}>
        <h5>Síguenos en nuestra redes</h5>

        <div className={styles.socialMedia}>
          <FontAwesomeIcon
            onClick={() => window.open('https://es-es.facebook.com/elsofarojo.es/', '_blank')}
            className={`${styles.socialButton} ${styles.facebook}`}
            icon={faFacebookF}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.instagram.com/elsofarojo.es/?hl=es', '_blank')}
            className={`${styles.socialButton} ${styles.instagram}`}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            onClick={() => window.open('https://www.facebook.com/elsofarojoboudoir/', '_blank')}
            className={`${styles.socialButton} ${styles.twitter}`}
            icon={faTwitter}
          />
        </div>
      </div>
      <div className={styles.contact}>
        <h5>¡Hola, Preciosa!</h5>
        <p>
          ¡Es hora de mimarte porque te lo mereces! No importa quién eres, qué haces, tu forma / tamaño / color / ect. Eres hermosa, sexy y absolutamente impresionante. Tomaremos tu foto y te lo demostraremos.
        </p>
      </div>
    </footer>
  )
}
