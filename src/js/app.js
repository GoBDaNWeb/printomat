import { tabs } from "./modules/tabs.js";
import { accordionFunc } from "./modules/accordion.js";
import { swiper } from "./modules/swiper.js";
import { map } from "./modules/map.js";
import { modals } from "./modules/modals.js";
import { validateForm } from "./modules/validate.js";
import IMask from "imask";

import AirDatepicker from "air-datepicker";

new AirDatepicker('#dat', {
  range: true,
  multipleDatesSeparator: ' - ',

})

accordionFunc();
tabs();
modals();
// swiper();
map();
modals();
validateForm();

import "../pug/components/selector/selector.js";
import "../pug/pages/profile/profile.js";
import "../pug/pages/info/info-content/info-content.js";
import "../pug/pages/profile/orders/orders.js";
import "../pug/pages/order/order-page.js";
import "../pug/pages/category/category-form/category-form.js";
import "../pug/components/popup/popup.js";
import "../pug/components/mobile-menu/mobile-menu.js";

document.querySelectorAll(".input__valid-phone").forEach((el) => {
  IMask(el, {
    mask: "+7 (000) 000-00-00",
  });
});
document.querySelectorAll(".input__valid-number").forEach((el) => {
  IMask(el, {
    mask: /^[0-9]+$/,
  });
});
