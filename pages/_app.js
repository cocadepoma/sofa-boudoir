import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/globals.scss'
import { ParallaxProvider } from "react-scroll-parallax";
import { UIContextProvider } from "../contexts/UIContext/UIContext";
import { ToastContextProvider } from '../contexts/toastContext/ToastContext';

function MyApp({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <ToastContextProvider>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ToastContextProvider>
    </UIContextProvider>
  )
}

export default MyApp
