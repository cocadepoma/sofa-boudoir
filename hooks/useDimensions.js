import { useEffect, useState } from "react";

export const useDimensions = () => {
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

  return {
    windowWidth
  }
}
