function createPerson(name,age,job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	}
	return o;
}
 var person1 = createPerson("lilinhao",20,"font-end engineer");
 var person2 = createPerson("linhaoli",21,"doubi");

 person1.sayName();
 //工厂模式
 