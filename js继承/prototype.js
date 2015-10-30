var Person = {
	name:'Vinnie',
	friends:['Yhoo','google']
}
var another = Object.create(Person);
another.name = "linhao";
another.friends.push('another');

var ananother = Object.create(Person);
ananother.name = 'Linda';
ananother.friends.push('ananother');
console.log(ananother.friends);//原型式继承
