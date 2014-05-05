// Named function expressions
document.addEventListener('click', function onClick(event) {
	console.log('clicked at ' + Date.now());
	document.removeEventListener('click', onClick);
});