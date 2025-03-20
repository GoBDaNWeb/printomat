const categoryForm = document.querySelector(".category-form");
if (categoryForm) {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteBtn = deleteModal.querySelector(".delete-btn");

  const exitModal = document.querySelector(".exit-modal");
  const exitBtn = exitModal.querySelector(".exit-btn");

  const categoryFormStepList = document.querySelectorAll(".category-form-step");
  const formStepContentList = document.querySelectorAll(".step");
  const categoryFormInfo = document.querySelector(".category-form-info ");
  const categoryFormInfoDeleteBtn =
    categoryFormInfo.querySelector(".delete-btn ");
  const categoryFormInfoPrice = categoryFormInfo.querySelector(".price");
  const accordionItems = categoryForm.querySelectorAll(".accordion-item");
  const addToCartBtn = categoryForm.querySelector(".add-to-cart-btn");
  const submitBtn = categoryForm.querySelector(".submit-btn");

  const templateLoader = categoryForm.querySelectorAll(".template-loader");

  const moreAccBtns = categoryForm.querySelectorAll(".more-acc");
  const originalOverflow = document.body.style.overflow;
  const header = document.querySelector(".header");
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

  const screenSize = getComputedStyle(document.documentElement)
    .getPropertyValue("--screensize")
    .trim();

  moreAccBtns.forEach((btn) => {
    const accordionList = btn.parentElement.querySelector(".accordion-list");
    btn.addEventListener("click", () => {
      if (btn.className.includes("active")) {
        btn.classList.remove("active");
        accordionList.classList.remove("active");
        btn.textContent = "Развернуть весь список";
      } else {
        btn.classList.add("active");
        accordionList.classList.add("active");
        btn.textContent = "Свернуть список";
      }
    });
  });

  accordionItems.forEach((item) => {
    setTimeout(() => {
      item.style.maxHeight = `calc(68 /${screenSize} * 100vw)`;
    }, 1000);
    const addBtn = item.querySelector(".add-btn");
    const deleteBtn = item.querySelector(".delete-icon");
    addBtn.addEventListener("click", () => {
      item.classList.add("selected");
      item.style.maxHeight = `calc(68 /${screenSize} * 100vw)`;
      item.classList.remove("active");
    });
    deleteBtn.addEventListener("click", () => {
      item.classList.remove("selected");
    });
  });

  templateLoader.forEach((loader, index) => {
    const fileInput = loader.querySelector(".file-input");
    const title = loader.querySelector(".title");
    let file;

    loader.addEventListener("click", (e) => {
      if (file) {
        deleteModal.classList.add("active");
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        if (header) header.style.paddingRight = `${scrollBarWidth}px`;
        e.preventDefault();
        deleteBtn.addEventListener("click", () => {
          deleteModal.classList.remove("active");
          setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = "0px";
            if (header) header.style.paddingRight = "0px";
          }, 300);
          file = null;
          loader.classList.remove("active");
          submitBtn.disabled = true;
          addToCartBtn.disabled = true;
          e.preventDefault();
          if (loader.className.includes("constructor")) {
            title.innerHTML = "Создать макет в конструкторе";
          } else {
            title.innerHTML = "Загрузить свой макет";
          }
        });
      } else {
        fileInput.addEventListener("input", (e) => {
          file = fileInput.files;
          loader.classList.add("active");
          title.innerHTML = file[0].name;
          submitBtn.disabled = false;
          addToCartBtn.disabled = false;
        });
      }
    });
  });
  categoryFormInfoDeleteBtn.addEventListener("click", () => {
    exitModal.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    exitBtn.addEventListener("click", () => {
      exitModal.classList.remove("active");

      setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "0px";
        if (header) header.style.paddingRight = "0px";
      }, 300);
      const firstContentStep = document.querySelector(`.step[data-step="0"]`);
      const firstFormStep = document.querySelector(
        `.category-form-step[data-step="0"]`
      );
      categoryFormStepList.forEach((item) => {
        item.classList.remove("active", "success");
      });
      formStepContentList.forEach((item) => {
        item.classList.remove("active", "success");
      });
      firstContentStep.classList.add("active");
      firstFormStep.classList.add("active");
      categoryFormInfo.classList.remove("active");
    });
  });
  categoryFormStepList.forEach((step, index) => {
    step.setAttribute("data-step", index);
    if (index === 0) {
      step.classList.add("active");
    }
  });
  formStepContentList.forEach((step, index) => {
    step.setAttribute("data-step", index);
    if (index === 0) {
      step.classList.add("active");
    }

    const prevBtn = step.querySelector(".prev-btn");
    const nextBtn = step.querySelector(".next-btn");

    prevBtn.addEventListener("click", () => {
      const currentFormStep = document.querySelector(
        ".category-form-step.active"
      );
      const currentContentStep = document.querySelector(".step.active");
      const currentFormStepIndex = +currentFormStep.dataset.step;
      const currentContentStepIndex = +currentContentStep.dataset.step;

      currentFormStep.classList.remove("active");
      currentContentStep.classList.remove("active");
      const prevContentStep = document.querySelector(
        `.step[data-step="${currentContentStepIndex - 1}"]`
      );
      const prevFormStep = document.querySelector(
        `.category-form-step[data-step="${currentFormStepIndex - 1}"]`
      );
      currentFormStep.classList.remove("active");
      prevContentStep.classList.add("active");
      prevFormStep.classList.add("active");
      prevFormStep.classList.remove("success");

      if (currentContentStepIndex - 1 > 0) {
        categoryFormInfo.classList.add("active");
      } else {
        categoryFormInfo.classList.remove("active");
      }
    });
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const currentFormStep = document.querySelector(
          ".category-form-step.active"
        );
        const currentContentStep = document.querySelector(".step.active");
        const currentFormStepIndex = +currentFormStep.dataset.step;
        const currentContentStepIndex = +currentContentStep.dataset.step;

        currentFormStep.classList.remove("active");
        currentFormStep.classList.add("success");
        currentContentStep.classList.remove("active");
        const nextContentStep = document.querySelector(
          `.step[data-step="${currentContentStepIndex + 1}"]`
        );
        const nextFormStep = document.querySelector(
          `.category-form-step[data-step="${currentFormStepIndex + 1}"]`
        );
        nextContentStep.classList.add("active");
        nextFormStep.classList.add("active");

        if (currentContentStepIndex + 1 > 0) {
          categoryFormInfo.classList.add("active");
        } else {
          categoryFormInfo.classList.remove("active");
        }
      });
    }
  });

  const firstStep = categoryForm.querySelector('.step[data-step="0"]');
  const selectors = firstStep.querySelectorAll(".selector");
  const inputs = firstStep.querySelectorAll(".custom-input");
  const currentNextBtn = firstStep.querySelector(".next-btn");

  let reqSelectors = 0; // Количество .req инпутов в .selector
  let reqInputs = 0; // Количество инпутов с value > 0
  let reqTotal = 0; // Итоговое значение (сумма reqSelectors + reqInputs)

  // Функция обновления reqSelectors
  const updateReqSelectors = () => {
    const acceptSelectors = firstStep.querySelectorAll(
      ".selector .selector-btn input.req"
    );
    reqSelectors = acceptSelectors.length;
    updateTotal();
  };

  // Функция обновления reqInputs
  const updateReqInputs = () => {
    reqInputs = Array.from(inputs).filter((input) => input.value > 0).length;
    updateTotal();
  };

  // Функция обновления reqTotal
  const updateTotal = () => {
    reqTotal = reqSelectors + reqInputs;

    if (reqTotal >= 6) {
      currentNextBtn.disabled = false;
    } else {
      currentNextBtn.disabled = true;
    }
  };

  // Отслеживание изменений в .selector (добавление/удаление req-класса)
  const observer = new MutationObserver(() => {
    updateReqSelectors();
  });

  selectors.forEach((selector) => {
    observer.observe(selector, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });

  // Обработчик ввода для .custom-input
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      updateReqInputs();
    });
  });

  // Начальный подсчет значений
  updateReqSelectors();
  updateReqInputs();
}
