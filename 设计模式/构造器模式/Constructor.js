// 构造函数模式用于创建特定类型的对象，你可以自定义自己的构造函数，然后在里面声明自定义类型的属性或者方法。
// 在JavaScript中，构造函数通常是认为用来实现实例的，js没有类的概念，但是有特殊的构造函数，在构造函数内部，this
// 引用的是新创建的对象。

function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	// this.toString = function() {
	// 	return this.model + "has done" + this.miles + " miles";
	// };
}
Car.prototype.toString = function(){
		return this.model + " has done " + this.miles + " miles"; //在原型链上定义公共的方法。节省new的成本。
}
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
                                                                                                                                                                                                                                                                                                    
