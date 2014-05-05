// Function scope
function addConstant(x) {
	var constant = 5;

	var x;
	return x + constant;
}

// Use
constant = 10;

answer = addConstant(2);

console.log(constant);