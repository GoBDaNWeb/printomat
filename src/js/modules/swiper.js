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
    pagination: {
      el: ".home-works-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
    },
  });
  const heroFeaturesSwiper = new Swiper(".hero-features-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".hero-features-pagination",
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
    pagination: {
      el: ".article-pagination",
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
    pagination: {
      el: ".portfolio-modal-pagination",
    },
  });
  const categoryHeroSwiper = new Swiper(".category-hero-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      prevEl: ".category-hero-prev",
      nextEl: ".category-hero-next",
    },
    pagination: {
      el: ".category-hero-pagination",
    },
  });
  const categoryPopularSwiper = new Swiper(".category-popular-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 24,
    navigation: {
      prevEl: ".category-popular-prev",
      nextEl: ".category-popular-next",
    },
    // pagination: {
    //   el: ".category-hero-pagination",
    // },
  });
  const categoryPortfolioSwiper = new Swiper(".category-portfolio-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      prevEl: ".category-portfolio-prev",
      nextEl: ".category-portfolio-next",
    },
    // pagination: {
    //   el: ".category-hero-pagination",
    // },
  });
  const categorySimilarSwiper = new Swiper(".category-similar-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      prevEl: ".category-similar-prev",
      nextEl: ".category-similar-next",
    },
    // pagination: {
    //   el: ".category-hero-pagination",
    // },
  });
  const catalogSwiper = new Swiper(".catalog-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".catalog-pagination",
    },
  });

  const allCatalogSlides = Array.from(
    document.querySelectorAll(".catalog-card.swiper-slide")
  );
  const catalogTabWrapper = document.querySelector(
    ".catalog.tabs-wrapper .tab-wrapper .tabs"
  );
  if (catalogTabWrapper) {
    const catalogTabs = Array.from(
      document.querySelectorAll(".catalog.tabs-wrapper .tab")
    );
    const catalogSwiperWrapper = document.querySelector(
      ".catalog-swiper .swiper-wrapper"
    );
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const activeTabs = Array.from(
            document.querySelectorAll(".catalog.tabs-wrapper .tab.active") // Ищем только активные .tab
          );

          const activeTabData = activeTabs.map((tab) =>
            tab.getAttribute("data-tab")
          );
          const matchedSlides = allCatalogSlides.filter((slide) => {
            const tabItems = slide.getAttribute("data-tabItem");
            if (!tabItems) return false;

            const tabItemArray = tabItems.split(" ").map(Number);

            return activeTabData.some((tab) =>
              tabItemArray.includes(Number(tab))
            );
          });
          document
            .querySelectorAll(".catalog-card.swiper-slide")
            .forEach((item) => {
              item.remove();
            });
          matchedSlides.forEach((item) => {
            catalogSwiperWrapper.appendChild(item);
          });
          catalogSwiper.update();
          catalogSwiper.slideTo(0);
        }
      });
    });

    observer.observe(catalogTabWrapper, {
      attributes: true, // Следим за изменением атрибутов
      attributeFilter: ["class"], // Следим только за изменением class
      subtree: true,
    });
  }

  let swipers = [];
  const initSwipers = () => {
    const swiperContainers = document.querySelectorAll(
      ".download-items-swiper"
    );

    swiperContainers.forEach((container, index) => {
      if (window.innerWidth <= 767) {
        if (!swipers[index] || swipers[index].destroyed) {
          swipers[index] = new Swiper(container, {
            modules: [Pagination, Navigation],
            slidesPerView: 1.5,
            spaceBetween: 16,
            on: {
              // init: (swiper) => {
              //   setSlideHeight(swiper);
              // },
              // resize: (swiper) => {
              //   setSlideHeight(swiper);
              // },
            },
            pagination: {
              el: ".pagination",
            },
          });
        }
      } else {
        if (swipers[index] && !swipers[index].destroyed) {
          swipers[index].destroy(true, true);
        }
      }
    });
  };

  // Инициализация Swiper при загрузке страницы
  initSwipers();

  // Обработчик события resize
  window.addEventListener("resize", initSwipers);
};
