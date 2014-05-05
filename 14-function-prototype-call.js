// Function.prototype.call()

function sayHi(a, b, c) {
	console.log(a + b + c);
	console.log(this.name + ' is ' + this.age + ' years old');
}

person = {
	name: 'johnathan',
	age: 35
};

sayHi.call(person, 1, 2, 5);