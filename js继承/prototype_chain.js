function Parent() {
	this.value = true;
}
Parent.prototype.getValue = function() {
	return this.value;
}
 function Child() {
 	this.cvalue = false;
 }
Child.prototype = new Parent();
Child.prototype.getCvalue = function() {
	return this.cvalue;
}

var instance = new Child();
console.log(instance.getValue());
//原型链继承
