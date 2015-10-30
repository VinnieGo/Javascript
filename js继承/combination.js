//组合式继承  （原型+借用构造函数）
function Parent(name) {
	this.name = name;
	this.colors = ['red','blue','green'];
}
Parent.prototype.sayName = function() {
	console.log(this.name);
}
function Child(name,age) {
	Parent.call(this,name);
	this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayAge = function() {
	console.log(this.age);
};

var instance1 = new Child('Vinnie',20);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayAge();
instance1.sayName();

var instance2 = new Child('Bell',15);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
 