/**
 * 工厂模式创建对象
 * @desc 解决了创建多个对象的问题，但是没有解决对象识别的问题(即怎样知道一个对象的类型)。
 */
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
