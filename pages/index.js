import { AppLayout } from '../layouts/AppLayout';
// import Carousel from '../components/carousel/Carousel';
import styles from '../styles/Home.module.scss';

import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery-next';

import { ImagesPlaceholder } from '../components/imagesPlaceholder/ImagesPlaceholder';


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = useCallback(async () => {
    const resp = await fetch('/api/gallery');
    const { images } = await resp.json();
    setLocalImages(images);
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
        <div className={styles.headerContainer}>
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

        <section className={styles.contactSection}>
          <h3>Contacto</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

      </AppLayout>

    </>
  )
}
