const tabContents = document.querySelectorAll(".tab-content");
const header = document.querySelector(".header");

if (tabContents) {
  tabContents.forEach((tabContent) => {
    const tabs = tabContent.querySelectorAll(".info-list-item");
    const tabContentItems = tabContent.querySelectorAll(".tab-content-item");
    tabs.forEach((tab, index) => {
      tab.setAttribute("data-info", index);
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
