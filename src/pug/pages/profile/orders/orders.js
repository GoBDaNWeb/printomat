
document.addEventListener("DOMContentLoaded", () => {
	const handlers = document.querySelectorAll(".orders__order__handle");

	handlers.forEach(btn => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			let parent = btn.closest(".orders__order");
			parent.classList.toggle("active");
		});
	});


});
