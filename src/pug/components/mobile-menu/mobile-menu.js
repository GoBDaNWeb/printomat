const header = document.querySelector(".header");
const burger = document.querySelector(".mobile-menu-burger");
const menu = document.querySelector(".mobile-menu");
const menuHeight = menu.offsetHeight;
const originalOverflow = document.body.style.overflow;
const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

const closeMenu = () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
  menu.style.height = `0px`;
  setTimeout(() => {
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = "0px";
    header.style.paddingRight = `0px`;
  }, 300);
};

burger.addEventListener("click", () => {
  if (burger.className.includes("active")) {
    closeMenu();
  } else {
    menu.classList.add("active");
    burger.classList.add("active");
    menu.style.height = `91%`;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
    header.style.paddingRight = `${scrollBarWidth}px`;
  }
});
