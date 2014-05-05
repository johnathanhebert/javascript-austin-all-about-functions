// Closures
function makeClosure() {
	var privatePassword = '12345';

	return function () {
		return privatePassword;
	};
}

// Use
var getPassword = makeClosure();
var password = getPassword();