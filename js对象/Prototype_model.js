/**
 * 原型模式构造js对象
 * @desc 缺点：引用类型属性的共享问题
 */
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
