import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../assets/media";

const Carousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    let interval;

    if (embla) {
      interval = setInterval(() => {
        scrollNext()
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [embla]);


  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index).src}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
