// Function.prototype.bind()

function sayHi(a, b, c) {
	console.log(a + b + c);
	console.log(this.name + ' is ' + this.age + ' years old');
}

person = {
	name: 'johnathan',
	age: 35
};

sayHiBound = sayHi.bind(person, 1, 2);