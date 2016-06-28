function Person(name,age,job) {
	this.name = name;
	this.age = age;
	this.job = job;

	if(typeof this.sayName != 'function') {
		Person.prototype.sayName = function() {
			console.log(this.name);
		};
	}
}

var person = new Person('Vinnie',20,'font-end enginner');

person.sayName();
//动态原型模式
//
function Person(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.showName = function(){
	console.log(this.name);
}

function Student(grade){
	Person.call();
	this.grade = grade;
}
Student.prototype = new Person();
