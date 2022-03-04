import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";

import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery-next';


import { ImagesPlaceholder } from '../components/imagesPlaceholder/ImagesPlaceholder';
import { AppLayout } from '../layouts/AppLayout';
// import Carousel from '../components/carousel/Carousel';
import styles from '../styles/Home.module.scss';
import { useDimensions } from '../hooks/useDimensions';

import { useParallax } from 'react-scroll-parallax';
export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
    ssr: false
  });

  const { windowWidth } = useDimensions();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [localImages, setLocalImages] = useState([]);
  const [ourImage, setOurImage] = useState({});

  const { ref } = useParallax({ speed: 5 });

  useEffect(() => {
    fetchImages();
    fetchOurImage();
  }, []);

  const fetchImages = useCallback(async () => {
    try {
      const resp = await fetch('/api/gallery');
      const { images, status, error } = await resp.json();

      if (status === 200) {
        setLocalImages(images);
        return;
      }

      throw new Error(error);
    } catch (error) {
      console.log('Error fetching images', error);
    }
  }, []);

  const fetchOurImage = useCallback(async () => {
    try {
      const resp = await fetch(`/api/gallery/us`);
      const { images, status, error } = await resp.json();
      if (status === 200) {
        setOurImage(images[0]);
        return;
      }
      throw new Error(error);
    } catch (error) {
      console.log('Error fetching our image', error);
    }
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <AppLayout>
        <div className={styles.headerContainer} ref={ref}>
          {/* <Carousel slides={slides} /> */}

          <h4>"La confianza es lo más <br />sexy que puedes ponerte"</h4>
          <br />
          <h5>El Sofá Rojo Boudoir</h5>
        </div>

        <section className={styles.gallerySection}>
          <h3>
            Galería
          </h3>

          {/* Grid Gallery */}
          {
            localImages.length > 0
              ? <Gallery photos={localImages} onClick={openLightbox} margin={7} />
              : <ImagesPlaceholder />
          }

          {/* Modal Image Gallery */}
          <ModalGateway>
            {viewerIsOpen && (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={localImages.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            )}
          </ModalGateway>
        </section>

        <section className={styles.aboutSection}>
          <h3>Sobre Nosotros</h3>
          {/* <div className={styles.aboutUs}>
            {
              ourImage?.src && (
                <div className={styles.ourImageContainer}>
                  <div className={styles.ourImage} style={{
                    backgroundImage: `url(${ourImage.src})`,
                  }}>

                  </div>
                </div>
              )
            }

            <div className={styles.ourMessage}>
              <h4>
                Encantados de conocerte
              </h4>
              <p>
                ¡ Hola ! Llegó el momento de conocernos. Somos elsofarojo, Raúl y Estefanía.
              </p>
              <p>
                Quizás no somos las personas indicadas para hablar de nosotros mismos, pero… si estamos de acuerdo en algo es que nos conoceréis mejor porque amamos nuestro trabajo.
              </p>
              <p>
                Disfrutamos sobre todo, en el proceso al preparar una sesión, un paseo por el campo o un bonito atardecer.
              </p>
              <p>
                Buscamos espontaneidad, caricias, una sonrisa a medias, unos ojos que brillan, un perfume que recordarás cuando pasen 5 años.
              </p>
              <p>
                Recuerdos, vivimos obsesionados con captar vuestra esencia y que perduren en el tiempo.
              </p>
              <p>
                Ver una fotografía y revivir una y otra vez ese momento durante toda la vida.
              </p>
              <p>
                Lo verdaderamente importante es disfrutar, ser feliz y por supuesto llevarte parte de nuestro trabajo a casa para disfrutarlo durante mucho tiempo.
              </p>


            </div>
          </div> */}

          <div className={styles.aboutUs}>
            {
              ourImage?.src && (
                <div className={styles.ourImageContainer}>
                  <img src={ourImage.src} />
                  {/* <div className={styles.ourImage} style={{
                    backgroundImage: `url(${ourImage.src})`,
                  }}>

                  </div> */}
                </div>
              )
            }

            <div className={styles.ourMessage}>
              <h4>
                Encantados de conocerte
              </h4>
              <p>
                ¡ Hola ! Llegó el momento de conocernos. Somos elsofarojo, Raúl y Estefanía.
              </p>
              <p>
                Quizás no somos las personas indicadas para hablar de nosotros mismos, pero… si estamos de acuerdo en algo es que nos conoceréis mejor porque amamos nuestro trabajo.
              </p>
              <p>
                Disfrutamos sobre todo, en el proceso al preparar una sesión, un paseo por el campo o un bonito atardecer.
              </p>
              <p>
                Buscamos espontaneidad, caricias, una sonrisa a medias, unos ojos que brillan, un perfume que recordarás cuando pasen 5 años.
              </p>
              <p>
                Recuerdos, vivimos obsesionados con captar vuestra esencia y que perduren en el tiempo.
              </p>
              <p>
                Ver una fotografía y revivir una y otra vez ese momento durante toda la vida.
              </p>
              <p>
                Lo verdaderamente importante es disfrutar, ser feliz y por supuesto llevarte parte de nuestro trabajo a casa para disfrutarlo durante mucho tiempo.
              </p>


            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h3>Contacto</h3>
          <div className={styles.contactContainer}>
            <MapWithNoSSR />
            <div><h5>964323543</h5></div>
          </div>
        </section>

      </AppLayout>

    </>
  )
}
