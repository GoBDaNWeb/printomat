export function validateForm() {
  const forms = document.querySelectorAll(".form");

  const toggleClass = (element, addClass, removeClass) => {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
  };

  const setFeedback = (input, isValid, message = "") => {
    const inputRow = input.closest(".input__row");
    const feedbackElement = inputRow.querySelector(".input__item-small");

    feedbackElement.textContent = message;
    toggleClass(
      inputRow,
      isValid ? "success" : "error",
      isValid ? "error" : "success"
    );

    return isValid;
  };

  const validators = {
    name: (value) => /^[А-Яа-яA-Za-zёЁ \-]+$/.test(value),
    phone: (value) => value.length >= 18,
    inn: (value) => value.length >= 10,
    kpp: (value) => value.length >= 9,
    ras: (value) => value.length >= 19,
    bik: (value) => value.length >= 9,
    count: (value) => /^[0-9]+$/.test(value),
    time: (value) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
    date: (value) =>
      /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.[1-2][0-9]{3}$/.test(
        value
      ),
    numberData: (value) => value.length > 0,
    email: (value) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      ),
  };

  const validateInput = (input, type, errorMessage) => {
    const value = input?.value.trim();
    const isValid = value && validators[type](value);
    return setFeedback(input, isValid, isValid ? "" : errorMessage);
  };

  const validateFormFields = (form, isExtended) => {
    let isValid = true;

    const inputs = [
      {
        input: form.querySelector(".input__valid-name"),
        type: "name",
        error: "Введите имя",
      },
      {
        input: form.querySelector(".input__valid-phone"),
        type: "phone",
        error: "Введите номер телефона",
      },
      {
        input: form.querySelector(".input__valid-email"),
        type: "email",
        error: "Введите e-mail",
      },
      {
        input: form.querySelector(".input__valid-inn"),
        type: "inn",
        error: "Введите корректное значение",
      },
      {
        input: form.querySelector(".input__valid-bik"),
        type: "bik",
        error: "Введите корректное значение",
      },
      {
        input: form.querySelector(".input__valid-ras"),
        type: "ras",
        error: "Введите корректное значение",
      },

      {
        input: form.querySelector(".input__valid-kpp"),
        type: "kpp",
        error: "Введите корректное значение",
      },
    ];

    if (isExtended) {
      inputs.push(
        {
          input: form.querySelector(".input__valid-positive-number"),
          type: "count",
          error: "Введите положительное число",
        },
        {
          input: form.querySelector(".input__valid-time"),
          type: "time",
          error: "Введите корректное время",
        },
        {
          input: form.querySelector(".input__valid-date"),
          type: "date",
          error: "Введите корректную дату",
        }
      );
    }
    inputs.forEach(({ input, type, error }) => {
      if (input && !validateInput(input, type, error)) {
        isValid = false;
      }
    });

    return isValid;
  };

  // const showSuccessMessage = () => {
  //   document.querySelector(".success-modal").classList.add("active");
  //   document
  //     .querySelectorAll(".modal")
  //     .forEach((modal) => modal.classList.remove("active"));
  // };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isExtended = form.classList.contains("form-extended");

      const isValid = validateFormFields(form, isExtended);

      if (isValid) {
        console.log("Валидация пройдена");
        // showSuccessMessage();
      } else {
        console.log("Валидация не пройдена");
      }
    });
  });
}
