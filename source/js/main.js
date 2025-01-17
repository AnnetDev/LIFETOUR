import { toggleMenu } from './modules/burger-menu';
import { initializeHeroSwiper } from './modules/swiper-hero';
import { initializeToursSwiper } from './modules/swiper-tours';
import { initializeTrainingSwiper } from './modules/swiper-trainers';
import { initializeReviewsSwiper } from './modules/swiper-reviews';
import { initializeAdvSwiper } from './modules/swiper-adv';
import { initializeGalleySwiper } from './modules/swiper-gallery';
import { formValidator } from './modules/form-validate';


toggleMenu();
initializeHeroSwiper();
initializeToursSwiper();
initializeTrainingSwiper();
initializeReviewsSwiper();
initializeAdvSwiper();
initializeGalleySwiper();
formValidator();
