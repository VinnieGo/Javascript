function Person(name,age,job) {
	var o = new Object;
	o.sayName = function() {
		console.log(name);
	};
	return o;
}

var friend = Person('Vinnie',20,"enginner");
friend.sayName();
//稳妥构造函数模式