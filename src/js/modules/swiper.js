import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
export const swiper = () => {
  const worksSwiper = new Swiper(".home-works-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      prevEl: ".work-prev",
      nextEl: ".work-next",
    },
  });
};
