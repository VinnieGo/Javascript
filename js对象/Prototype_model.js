function Person() {

}
Person.prototype.name = "lilinhao";
Person.prototype.age = 29;
Person.prototype.job= "font-end enginner";
Person.prototype.sayName = function() {
	console.log(this.name);
}
var person1 = new Person();
var person2 = new Person();

person1.name = "Vinnie";

person1.sayName();
person2.sayName();

//原型模式