function createPerson(original) {
	var clone = Object(original);
	clone.sayName = function() {
		console.log(this.name);
	};
	return clone;
}

var person = {
	name:'Vinnie',
	friends:['bell','google']
};

var another = createPerson(person);
another.sayName();
