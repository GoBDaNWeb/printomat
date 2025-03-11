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
