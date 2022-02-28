import React, { useState } from 'react'
import { ImagePH } from './ImagePH';
import styles from './ImagesPH.module.scss';
import { useEffect } from 'react';

export const ImagesPlaceholder = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', widthListener);
    return () => {
      window.removeEventListener('resize', widthListener);
    };

  }, []);

  const widthListener = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className={styles.mainContainer}>
      {windowWidth >= 768 ? (
        <>
          <div className={styles.loadWrapper}>
            <ImagePH sizes={{ one: '15%', two: '25%', three: '15%', four: '15%', five: '30%' }} />
          </div>
          <div className={styles.loadWrapper}>
            <ImagePH sizes={{ one: '30%', two: '15%', three: '15%', four: '15%', five: '25%' }} />
          </div>
          <div className={styles.loadWrapper}>
            <ImagePH sizes={{ one: '25%', two: '25%', three: '40%', four: '10%' }} />
          </div>
          <div className={styles.loadWrapper}>
            <ImagePH sizes={{ one: '45%', two: '15%', three: '15%', four: '25%' }} />
          </div>
        </>
      )
        : (
          <>
            <div className={styles.loadWrapper}>
              <ImagePH sizes={{ one: '50%', two: '50%' }} />
            </div>
            <div className={styles.loadWrapper}>
              <ImagePH sizes={{ one: '50%', two: '50%' }} />
            </div>
            <div className={styles.loadWrapper}>
              <ImagePH sizes={{ one: '50%', two: '50%' }} />
            </div>
          </>
        )
      }

    </div >
  );
};
