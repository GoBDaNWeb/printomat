import { tabs } from "./modules/tabs.js";
import { accordionFunc } from "./modules/accordion.js";
import { swiper } from "./modules/swiper.js";
import { map } from "./modules/map.js";
import { modals } from "./modules/modals.js";
import IMask from "imask";

accordionFunc();
tabs();
modals();
swiper();
map();
modals();

import "../pug/components/selector/selector.js";
import "../pug/pages/info/info-content/info-content.js";
import "../pug/pages/profile/orders/orders.js";
import "../pug/components/popup/popup.js";
document.querySelectorAll(".input__valid-phone").forEach((el) => {
  IMask(el, {
    mask: "+7 (000) 000-00-00",
  });
});
