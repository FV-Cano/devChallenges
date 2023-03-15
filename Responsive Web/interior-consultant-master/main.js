/* This event is key */
document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.querySelector(".hamburger");
	const header = document.querySelector(".header-container");

	menuIcon.addEventListener("click", function () {
		header.classList.toggle("active");
	});
});

/* Useful code, not for now:

 $(function () {
	let isMobile = window.matchMedia(
		"only screen and (max-width: 760px)"
	).matches;

	if (isMobile) {
		
	}
}); */
/* Some nice info:

    $(function() {}); is a shorhand for $(document).ready(function() {});

    This function allows to execute itself after the dom has finished loading.

    jquery website: https://jquery.com/ (Required so the code works)
 */
