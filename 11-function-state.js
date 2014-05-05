// Function state
document.addEventListener('click', function onClick(event) {
	if (onClick.invoked === undefined) {
		onClick.invoked = 0;
	}
	onClick.invoked += 1;
	console.log('clicked ' + onClick.invoked + ' times');
});