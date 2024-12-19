// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleMenu } from './modules/burger-menu';
import { initializeHeroSwiper } from './modules/swiper-hero';
import { initializeToursSwiper } from './modules/swiper-tours';
import { initializeTrainingSwiper } from './modules/swiper-trainers';


toggleMenu();
initializeHeroSwiper();
initializeToursSwiper();
initializeTrainingSwiper();
