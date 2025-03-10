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
  const articleSwiper = new Swiper(".article-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      prevEl: ".article-prev",
      nextEl: ".article-next",
    },
  });
  const portfolioModalSwiper = new Swiper(".portfolio-modal-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      prevEl: ".portfolio-modal-prev",
      nextEl: ".portfolio-modal-next",
    },
  });
};
