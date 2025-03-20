const cartOrderFixed = document.querySelector(".cart-order-fixed ");

if (cartOrderFixed) {
  const cartOrderFixedBtn = cartOrderFixed.querySelector(
    ".cart-order-fixed-top"
  );
  cartOrderFixedBtn.addEventListener("click", () => {
    cartOrderFixed.classList.toggle("active");
  });
}
