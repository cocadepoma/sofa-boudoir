import React, { useState, createContext, useEffect } from 'react';
import { blockScroll, unblockScroll } from "../../helpers/helpers";
import { useDimensions } from '../../hooks/useDimensions';

export const UIContext = createContext({});

export const UIContextProvider = ({ children }) => {
  const { windowWidth } = useDimensions();

  const [isMenuResponsiveEnabled, setIsMenuResponsiveEnabled] = useState(false);
  const [isLightBoxModalOpened, setIsLightBoxModalOpened] = useState(false);

  useEffect(() => {
    isMenuResponsiveEnabled
      ? blockScroll()
      : unblockScroll();
  }, [isMenuResponsiveEnabled]);

  useEffect(() => {
    if (windowWidth > 768 && isMenuResponsiveEnabled) {
      setIsMenuResponsiveEnabled(false);
    }
  }, [windowWidth])

  const toggleMenu = () => {
    setIsMenuResponsiveEnabled(!isMenuResponsiveEnabled);
  };

  const toggleLightBoxModal = (value) => {
    setIsLightBoxModalOpened(value);
  };

  return (
    <UIContext.Provider value={{
      isMenuResponsiveEnabled,
      toggleMenu,
      isLightBoxModalOpened,
      toggleLightBoxModal
    }}>
      {children}
    </UIContext.Provider>
  );
};
