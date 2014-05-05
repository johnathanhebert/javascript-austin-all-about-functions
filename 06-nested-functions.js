outer(5);


// Nested functions
function outer(x) {
	
	function inner(num) {
		console.log('the num is ' + num);
	}

	return inner(x);
}

// Use
