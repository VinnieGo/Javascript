/**
 * 构造函数模式创建对象
 * @desc 构造函数模式的主要问题是每个方法都要在每个实例上创建一遍。
 */
function Person(name,age,job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}

var person1 = new Person("lilinhao",20,"font-end engineer");
var person2 = new Person('linhaoli',12,'doubi');

console.log(person1.sayName == person2.sayName); //false
