import React, { useCallback, useEffect, useState, useContext } from 'react';
import dynamic from "next/dynamic";

import Masonry from 'react-masonry-css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { ImagesPlaceholder } from '../components/imagesPlaceholder/ImagesPlaceholder';
import { AppLayout } from '../layouts/AppLayout';
import styles from '../styles/Home.module.scss';

import { Parallax } from 'react-scroll-parallax';
import ContentLoader from "react-content-loader";
import { waitFor } from '../helpers/helpers';
import { UIContext } from '../contexts/UIContext/UIContext';

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map/Map"), {
    ssr: false
  });
  const { toggleLightBoxModal } = useContext(UIContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [localImages, setLocalImages] = useState([]);
  const [ourImage, setOurImage] = useState({});


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
        await waitFor(300);

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
    toggleLightBoxModal(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    toggleLightBoxModal(false);
  };

  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <AppLayout>
        <Parallax>
          <div className={styles.headerContainer}>
            {/* <Carousel slides={slides} /> */}

            <h4>"La confianza es lo más <br />sexy que puedes ponerte"</h4>
            <br />
            <h5>El Sofá Rojo Boudoir</h5>
          </div>
        </Parallax>

        <section className={styles.gallerySection}>
          <h3>
            Galería
          </h3>

          {/* Grid Gallery */}
          {
            localImages.length > 0
              ? (
                <Gallery>
                  <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >

                    {
                      localImages.map((image, index) => (
                        <Item
                          key={index}
                          original={image.src}
                          thumbnail={image.src}
                          width={image.width / 2}
                          height={image.height / 2}
                        >
                          {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={image.src} />
                          )}
                        </Item>
                      ))
                    }
                  </Masonry>

                </Gallery>
              )
              : <ImagesPlaceholder />
          }

          {/* Modal Image Gallery */}
          {/* <ModalGateway>
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
          </ModalGateway> */}
        </section>

        <section className={styles.aboutSection} >
          <h3>Sobre Nosotros</h3>
          <div className={styles.aboutUs}>
            {
              ourImage?.src
                ? (
                  <div className={styles.ourImageContainer}>
                    <img src={ourImage.src} alt="image-about-us" />
                  </div>
                )
                : (
                  <div className={styles.ourImagePlaceholder}>
                    <ContentLoader
                      uniqueKey="raulyfany"
                      width="100%"
                      height={"74rem"}
                      backgroundColor="#f3f3f3"
                      foregroundColor="#ecebeb"
                    >
                      <rect x="2" y="2" rx="0" ry="0" width="100%" height="74rem" />
                    </ContentLoader>
                  </div>
                )
            }

            <div className={styles.ourMessage}>
              <h4>
                Encantados de conocerte
              </h4>
              <p>
                ¡Hola! Llegó el momento de conocernos. Somos elsofarojo, Raúl y Estefanía.
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
            {/* Info contact */}
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactInfoWrapper}>

                <div className={styles.contactIconHeader}>
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                  <h4>Teléfonos</h4>
                </div>

                <div className={styles.contactLinks}>
                  <a href="tel:+34696666456">Raúl - 696 666 456</a>
                  <a href="tel:+34622024247">Estefanía - 622 024 247</a>
                </div>
              </div>

              <div className={styles.contactInfoWrapper}>

                <div className={styles.contactIconHeader}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h4>Email</h4>
                </div>

                <div className={styles.contactLinks}>
                  <a href="mailto: raul.lemos@elsofarojo.es" target="_blank" rel="noreferrer">raul.lemos@elsofarojo.es</a>
                </div>
              </div>

              <div className={styles.contactInfoWrapper}>
                <div className={styles.contactIconHeader}>
                  <FontAwesomeIcon icon={faMap} />
                  <h4>Dirección</h4>
                </div>

                <div className={styles.contactLinks}>
                  <a href="https://goo.gl/maps/ipm3XBom5ESprE6D8" target="_blank" rel="noreferrer">Plaza de los Ejércitos Españoles, 9 Bajo, Ubrique (Cádiz)</a>
                </div>
              </div>
            </div>

            {/* MAP */}
            <MapWithNoSSR className={styles.contactMap} />
          </div>
        </section>

      </AppLayout>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .my-masonry-grid {
            display: flex;
           
          }

          .my-masonry-grid_column {
            padding-left: 3px; /* gutter size */
            background-clip: padding-box;
          }

          .my-masonry-grid_column span {
            width: 100% !important;
          }

          .next-image {
            object-fit: cover;
          }
      `}
      </style>
    </>
  )
}
