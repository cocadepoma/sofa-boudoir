import React, { useState, createContext, useEffect } from 'react';
import { blockScroll, unblockScroll } from "../../helpers/helpers";
import { useDimensions } from '../../hooks/useDimensions';

export const UIContext = createContext({});

export const UIContextProvider = ({ children }) => {
  const [isMenuResponsiveEnabled, setIsMenuResponsiveEnabled] = useState(false);
  const { windowWidth } = useDimensions();

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

  return (
    <UIContext.Provider value={{
      isMenuResponsiveEnabled,
      toggleMenu,
    }}>
      {children}
    </UIContext.Provider>
  );
};
