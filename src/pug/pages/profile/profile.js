const blocks = document.querySelectorAll(".profile__block");

blocks.forEach(block => {
	const fields = block.querySelectorAll("input");
	const saveBtn = block.querySelector(".profile__save__btn");

	fields.forEach(field => {
		field.addEventListener("change", () => {
			let valid = [];
			fields.forEach(field => {
				field.value === '' ? valid.push(field) : false;
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