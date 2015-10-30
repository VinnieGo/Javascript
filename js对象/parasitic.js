function SpecialArray() {
	var values = new Array();
	values.push.apply(values,arguments);
	values.toPipedString = function() {
		return this.join("|");
	}
	return values;
}

var colors = new SpecialArray("red","blue","green");

console.log(colors.toPipedString());
//寄生构造函数模式