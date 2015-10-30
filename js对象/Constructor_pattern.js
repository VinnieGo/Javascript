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

//构造函数模式


