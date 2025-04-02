import AirDatepicker from "air-datepicker";

// hide/show pass
try {
  const allHandlers = document.querySelectorAll(".show-password");
  allHandlers.forEach((elem) => {
    elem.addEventListener("click", () => {
      const parent = elem.closest(".field-wrap");
      const input = parent.querySelector("input");
      elem.classList.toggle("active");
      if (elem.classList.contains("active")) {
        input.type = "text";
      } else {
        input.type = "password";
      }
    });
  });
} catch (e) {
  console.log(e);
}

try {
  const newPass = document.getElementById("new-pass");
  const newPassRepeat = document.getElementById("new-pass-repeat");
  const errorMsg = document.querySelector(".error-text");
  if (newPass) {
    newPass.addEventListener("keyup", () => {
      const compare = newPass.value === newPassRepeat.value;
      if (!compare) {
        errorMsg.classList.add("active");
      } else {
        errorMsg.classList.remove("active");
      }
    });
  }

  if (newPassRepeat) {
    newPassRepeat.addEventListener("keyup", () => {
      const compare = newPass.value === newPassRepeat.value;
      if (!compare) {
        errorMsg.classList.add("active");
      } else {
        errorMsg.classList.remove("active");
      }
    });
  }
} catch (e) {
  console.log(e);
}

try {
  
  const popup = document.querySelector(".orders-filter");
  const productFields = popup.querySelectorAll(".radio-item");
  const filterBtn = document.querySelector(".orders__head__dates-mob");
  const clearBtn = popup.querySelector(".clear-btn");

  const dateField = new AirDatepicker("#date-mob", {
    range: true,
    multipleDatesSeparator: " - ",
    isMobile: true,
    onSelect({date}) {
      if (date.length > 0) {
        filterBtn.classList.add("active");
      } else {
        filterBtn.classList.remove("active");
      }
    },
  });
  
  productFields.forEach(el => {
    el.addEventListener("click", function () {
      filterBtn.classList.add("active");
    });
  })


  clearBtn.addEventListener("click", function () {
    console.log('a')
    const productField = popup.querySelector(".orders__head__products .product-selector input");
    console.log(productField)
    productFields[0].querySelector('input').checked = 'checked';
    productField.closest(".selector-title").querySelector("p").innerText = 'Все'
    productField.value = '';

    dateField.clear();
  });
} catch (e) {
  console.log(e);
}
