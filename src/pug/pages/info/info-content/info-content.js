const tabContents = document.querySelectorAll(".tab-content");
const header = document.querySelector(".header");
const listWrapper = document.querySelectorAll(".list-wrapper");
const listWrapperMob = document.querySelectorAll(".mob-hide");

if (tabContents) {
  if (listWrapperMob) {
    listWrapperMob.forEach((list) => {
      const loadMore = list.querySelector(".load-more");
      const hiddenContent = list.querySelector(".hidden-content");
      const hiddenContentItems = hiddenContent.querySelectorAll(
        ".info-list-item-mob"
      );
      loadMore.innerHTML = `Еще ${hiddenContentItems.length}`;

      loadMore.addEventListener("click", () => {
        if (hiddenContent.className.includes("active")) {
          hiddenContent.classList.remove("active");
          loadMore.innerHTML = `Еще ${hiddenContentItems.length}`;
        } else {
          hiddenContent.classList.add("active");
          loadMore.innerHTML = `Свернуть`;
        }
      });
    });
  }
  tabContents.forEach((tabContent) => {
    const tabs = tabContent.querySelectorAll(".info-list-item");
    const tabsMob = tabContent.querySelectorAll(".info-list-item-mob");
    const tabContentItems = tabContent.querySelectorAll(".tab-content-item");
    tabs.forEach((tab, index) => {
      tab.setAttribute("data-info", index);
      tab.addEventListener("click", (e) => {
        const { target } = e;
        const currentTabContent = tabContent.querySelector(
          `.tab-content-item[data-info='${target.dataset.info}']`
        );
        if (currentTabContent) {
          window.scrollTo({
            top: currentTabContent.offsetTop - header.offsetHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      });
    });
    tabsMob.forEach((tab, index) => {
      tab.setAttribute("data-info", index);
      tab.addEventListener("click", (e) => {
        const { target } = e;
        const currentTabContent = tabContent.querySelector(
          `.tab-content-item[data-info='${target.dataset.info}']`
        );
        if (currentTabContent) {
          window.scrollTo({
            top: currentTabContent.offsetTop - header.offsetHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      });
    });
    tabContentItems.forEach((content, index) => {
      content.setAttribute("data-info", index);
    });
    //   tabs.forEach((tab) => {
    //     tab.addEventListener("click", () => {
    //       const currentTabContentItem = Array.from(tabContentItems).find((item) => {
    //         return item.dataset.catalog === tab.dataset.catalog;
    //       });
    //       window.scrollTo({
    //         top: currentCatalogItem.offsetTop - header.offsetHeight,
    //         left: 0,
    //         behavior: "smooth",
    //       });
    //     });
    //   });
    window.addEventListener("scroll", () => {
      tabContentItems.forEach((item) => {
        if (
          window.scrollY >= item.offsetTop - header.offsetHeight * 1.6 &&
          window.scrollY <=
            item.offsetTop + item.offsetHeight - header.offsetHeight * 1.6
        ) {
          const currentTab = Array.from(tabs).find((tab) => {
            return item.dataset.info === tab.dataset.info;
          });
          if (window.innerWidth <= 767) {
            currentTab.scrollIntoView({ behavior: "smooth", inline: "center" });
          }
          currentTab.classList.add("active");
        } else {
          const currentTab = Array.from(tabs).find((tab) => {
            return item.dataset.info === tab.dataset.info;
          });
          currentTab.classList.remove("active");
        }
      });
    });
    // tabContentItems.forEach((item) => {
    //   let observerStandart = new IntersectionObserver(
    //     (entries, observer) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           console.log(item);
    //           const currentTab = Array.from(tabs).find((tab) => {
    //             return item.dataset.info === tab.dataset.info;
    //           });
    //           currentTab.classList.add("active");
    //         } else {
    //           const currentTab = Array.from(tabs).find((tab) => {
    //             return item.dataset.info === tab.dataset.info;
    //           });
    //           currentTab.classList.remove("active");
    //         }
    //       });
    //     },
    //     { threshold: 0.4 }
    //   );
    //   observerStandart.observe(item);
    // });
  });
}
