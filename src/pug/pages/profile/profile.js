const blocks = document.querySelectorAll(".profile__block");

blocks.forEach(block => {
	const fields = block.querySelectorAll("input");
	const saveBtn = block.querySelector(".profile__save__btn");

	fields.forEach(field => {
		field.addEventListener("keyup", () => {
			let valid = [];
			fields.forEach(field => {
				field.value === '' ? valid.push(field) : false;
				field.value === '' ? field.classList.add("error") : field.classList.remove("error");

				if(field.classList.contains('input__valid-phone')) {
					field.value.length < 18 ? valid.push(field) : false;
					field.value.length < 18 ? field.classList.add("error") : field.classList.remove("error");
		
				}

				if(field.classList.contains('input__valid-inn')) {
					field.value.length < 11 ? valid.push(field) : false;
					field.value.length < 11 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-inn')) {
					field.value.length < 11 ? valid.push(field) : false;
					field.value.length < 11 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-kpp')) {
					field.value.length < 8 ? valid.push(field) : false;
					field.value.length < 8 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-bik')) {
					field.value.length < 8 ? valid.push(field) : false;
					field.value.length < 8 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-corr')) {
					field.value.length < 19 ? valid.push(field) : false;
					field.value.length < 19 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-ras')) {
					field.value.length < 19 ? valid.push(field) : false;
					field.value.length < 19 ? field.classList.add("error") : field.classList.remove("error");
				}
			});

			
			if (valid.length > 0) {
				saveBtn.setAttribute("disabled", "disabled");
				return;
			}
			if (field.value !== '') {
				saveBtn.removeAttribute("disabled");
			} else {
				saveBtn.setAttribute("disabled", "disabled");
			}
		});

		field.addEventListener("keydown", () => {
			let valid = [];
			fields.forEach(field => {
				field.value === '' ? valid.push(field) : false;
				field.value === '' ? field.classList.add("error") : field.classList.remove("error");

				if(field.classList.contains('input__valid-phone')) {
					field.value.length < 18 ? valid.push(field) : false;
					field.value.length < 18 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-inn')) {
					field.value.length < 11 ? valid.push(field) : false;
					field.value.length < 11 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-inn')) {
					field.value.length < 11 ? valid.push(field) : false;
					field.value.length < 11 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-kpp')) {
					field.value.length < 8 ? valid.push(field) : false;
					field.value.length < 8 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-bik')) {
					field.value.length < 8 ? valid.push(field) : false;
					field.value.length < 8 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-corr')) {
					field.value.length < 19 ? valid.push(field) : false;
					field.value.length < 19 ? field.classList.add("error") : field.classList.remove("error");
				}

				if(field.classList.contains('input__valid-ras')) {
					field.value.length < 19 ? valid.push(field) : false;
					field.value.length < 19 ? field.classList.add("error") : field.classList.remove("error");
				}
			});

			
			if (valid.length > 0) {
				saveBtn.setAttribute("disabled", "disabled");
				return;
			}
			if (field.value !== '') {
				saveBtn.removeAttribute("disabled");
			} else {
				saveBtn.setAttribute("disabled", "disabled");
			}
		});
	})
});