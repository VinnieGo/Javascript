/**
 * 组合使用构造函数模式和原型模式
 * @desc 认同度最高的一种创建自定义类型的方法
 */
function Person(name,age,job) {
	this.name = name;
	this.age = age;
	this.job =job;
	this.friends = ['LUO','WANG'];
}

Person.prototype = {
	constructor: Person,
	sayName : function() {
		console.log(this.name);
	}
}

var person1 = new Person('lilinhao',20,'font-end enginner');
var person2 = new Person('Vinnie',21,'doubi');

person1.friends.push("Van");

console.log(person1.friends);
console.log(person2.friends);

console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);
