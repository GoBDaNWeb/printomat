export const tabs = () => {
  const tabWrappers = document.querySelectorAll(".tabs-wrapper");
  tabWrappers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll(".tab");
    const tabsContent = wrapper.querySelectorAll(".tab-content");
    const tabsItem = wrapper.querySelectorAll("[data-tabItem]");
    const tabSelector = wrapper.querySelector(".tab-selector");
    if (tabSelector) {
      const selectorContent = tabSelector.querySelector(".selector-content");
      const labels = selectorContent.querySelectorAll("label");
      labels.forEach((label) => {
        label.addEventListener("change", (e) => {
          const { target } = e;
          if (tabsContent.length) {
            tabsContent.forEach((content) => {
              if (target.value !== content.dataset.tab) {
                content.classList.add("hidden");
              } else {
                content.classList.remove("hidden");
              }
            });
            const activeLabel = selectorContent.querySelector("label.active");
            if (activeLabel) {
              activeLabel.classList.remove("active");
            }
            label.classList.add("active");
          } else {
            const activeTab = wrapper.querySelector(".tab.active");
            if (activeTab) {
              activeTab.classList.remove("active");
            }
            e.target.classList.add("active");
            tabsItem.forEach((item) => {
              if (item.dataset.tabitem.split(" ").includes(e.target.value)) {
                item.classList.remove("hidden");
              } else {
                item.classList.add("hidden");
              }
            });
          }
        });
      });
    }
    tabs.forEach((tab) => {
      if (tabsContent.length) {
        const activeTab = wrapper.querySelector(".tab.active");
        if (activeTab) {
          tabsContent.forEach((content) => {
            if (
              content.dataset.tab.split(" ").includes(activeTab.dataset.tab)
            ) {
              content.classList.remove("hidden");
            } else {
              content.classList.add("hidden");
            }
          });
        }

        tab.addEventListener("click", (e) => {
          const activeTab = wrapper.querySelector(".tab.active");
          if (activeTab) {
            activeTab.classList.remove("active");
          }
          e.target.classList.add("active");
          tabsContent.forEach((content) => {
            if (content.dataset.tab.split(" ").includes(e.target.dataset.tab)) {
              content.classList.remove("hidden");
            } else {
              content.classList.add("hidden");
            }
          });
        });
      } else {
        const activeTab = wrapper.querySelector(".tab.active");
        if (activeTab) {
          tabsItem.forEach((item) => {
            if (
              item.dataset.tabitem.split(" ").includes(activeTab.dataset.tab)
            ) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          });
        }

        tab.addEventListener("click", (e) => {
          const activeTab = wrapper.querySelector(".tab.active");
          if (activeTab) {
            activeTab.classList.remove("active");
          }
          e.target.classList.add("active");
          tabsItem.forEach((item) => {
            if (
              item.dataset.tabitem.split(" ").includes(e.target.dataset.tab)
            ) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          });
        });
      }
    });
  });
};
