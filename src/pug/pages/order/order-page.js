const handles = document.querySelectorAll(".order__right__item__name ");
const orderBtn = document.querySelector(".order__right h6");

handles.forEach(handle => {
	handle.addEventListener("click", function() {
		const parent = handle.closest(".order__right__item");
		const hiddenItems = parent.querySelectorAll(".hide");
		hiddenItems.forEach(el => el.classList.toggle("active"));
		handle.classList.toggle("active");
	});
})

try {
	orderBtn.addEventListener("click", function() {
		const parent = orderBtn.closest(".order__right");
		parent.classList.toggle("active");
		orderBtn.classList.toggle("active");
	});
} catch (e) {
	console.log(e);
}