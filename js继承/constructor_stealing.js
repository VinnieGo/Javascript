//借用构造函数继承
function Parent() {
	this.colors = ["red","blue","green"];
}

function Child() {
	Parent.call(this);
}

var instance1 = new Child();
instance1.colors.push('black');
console.log(instance1.colors);

var instance2 = new Child();
console.log(instance2.colors);

function Super(name) {
	this.name = name;
}
function Sub() {
	Super.call(this,'Vinnie');
	this.age = 20;
}
var instance = new Sub();
console.log(instance.name);
console.log(instance.age);

function great(a,b,m){
	var c = a.concat(b).sort(function(a,b){
		return b-a;
	});
	return c.splice(0,m);
}
