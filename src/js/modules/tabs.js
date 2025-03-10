export const tabs = () => {
  const tabWrappers = document.querySelectorAll(".tabs-wrapper");
  const tabInnerWrappers = document.querySelectorAll(".tabs-inner-wrapper");

  tabWrappers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll(".tab");
    const tabsContent = wrapper.querySelectorAll(".tab-content");
    const tabsItem = wrapper.querySelectorAll("[data-tabItem]");

    if (wrapper.classList.contains("tabs-multiple")) {
      const firstTab = tabs[0];
      firstTab.classList.add("active");

      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          if (e.target === firstTab) {
            tabs.forEach((t) => t.classList.remove("active"));
            firstTab.classList.add("active");
          } else {
            firstTab.classList.remove("active");
            tab.classList.toggle("active");
          }

          if (![...tabs].some((t) => t.classList.contains("active"))) {
            firstTab.classList.add("active");
          }

          tabsContent.forEach((content) => {
            content.classList.toggle(
              "hidden",
              !Array.from(tabs).some(
                (t) =>
                  t.classList.contains("active") &&
                  content.dataset.tab.split(" ").includes(t.dataset.tab)
              )
            );
          });

          tabsItem.forEach((item) => {
            item.classList.toggle(
              "hidden",
              !Array.from(tabs).some(
                (t) =>
                  t.classList.contains("active") &&
                  item.dataset.tabitem.split(" ").includes(t.dataset.tab)
              )
            );
          });
        });
      });
    } else {
      const firstTab = tabs[0];

      tabsContent.forEach((content, index) => {
        if (!content.dataset.tab.split(" ").includes(firstTab.dataset.tab)) {
          content.classList.add("hidden");
        }
      });

      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          const activeTab = wrapper.querySelector(".tab.active");
          if (activeTab) activeTab.classList.remove("active");
          e.target.classList.add("active");

          tabsContent.forEach((content) => {
            content.classList.toggle(
              "hidden",
              !content.dataset.tab.split(" ").includes(e.target.dataset.tab)
            );
          });

          tabsItem.forEach((item) => {
            item.classList.toggle(
              "hidden",
              !item.dataset.tabitem.split(" ").includes(e.target.dataset.tab)
            );
          });
        });
      });
    }
  });

  tabInnerWrappers.forEach((wrapper) => {
    const tabs = wrapper.querySelectorAll(".tab-inner");
    const tabsContent = wrapper.querySelectorAll(".tab-content-inner");
    const tabsItem = wrapper.querySelectorAll("[data-tabItemInner]");

    if (wrapper.classList.contains("tabs-multiple")) {
      const firstTab = tabs[0];
      firstTab.classList.add("active");

      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          if (e.target === firstTab) {
            tabs.forEach((t) => t.classList.remove("active"));
            firstTab.classList.add("active");
          } else {
            firstTab.classList.remove("active");
            tab.classList.toggle("active");
          }

          if (![...tabs].some((t) => t.classList.contains("active"))) {
            firstTab.classList.add("active");
          }

          tabsContent.forEach((content) => {
            content.classList.toggle(
              "hidden",
              !Array.from(tabs).some(
                (t) =>
                  t.classList.contains("active") &&
                  content.dataset.tab.split(" ").includes(t.dataset.tab)
              )
            );
          });

          tabsItem.forEach((item) => {
            item.classList.toggle(
              "hidden",
              !Array.from(tabs).some(
                (t) =>
                  t.classList.contains("active") &&
                  item.dataset.tabiteminner.split(" ").includes(t.dataset.tab)
              )
            );
          });
        });
      });
    } else {
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          const activeTab = wrapper.querySelector(".tab-inner.active");
          if (activeTab) activeTab.classList.remove("active");
          e.target.classList.add("active");

          tabsContent.forEach((content) => {
            content.classList.toggle(
              "hidden",
              !content.dataset.tab.split(" ").includes(e.target.dataset.tab)
            );
          });

          tabsItem.forEach((item) => {
            item.classList.toggle(
              "hidden",
              !item.dataset.tabitem.split(" ").includes(e.target.dataset.tab)
            );
          });
        });
      });
    }
  });
};
