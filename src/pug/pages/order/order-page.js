const handles = document.querySelectorAll(".order__right__item__name ");

handles.forEach(handle => {
	handle.addEventListener("click", function() {
		const parent = handle.closest(".order__right__item");
		const hiddenItems = parent.querySelectorAll(".hide");
		hiddenItems.forEach(el => el.classList.toggle("active"));
		handle.classList.toggle("active");
	});
})