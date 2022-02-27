import media1 from "./slide1.jpg";
import media2 from "./slide2.jpg";
import media3 from "./slide3.jpg";
import media4 from "./slide4.jpg";
import media5 from "./slide5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];
