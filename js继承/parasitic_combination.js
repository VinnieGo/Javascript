function Parent(name) {
	this.name = name;
	this.friends = ['bell','google'];
}
Parent.prototype.sayName = function () {
	console.log(this.name);
}

function Child(name,age) {
	Parent.call(this,name);
	this.age = age;
}

var pro = Object(Parent.prototype);
pro.constructor = Child;
Child.prototype = pro;

Child.prototype.sayAge = function () {
	console.log(this.age);
}

var instance = new Child('Vinnie',20);
instance.sayName();
instance.sayAge();
