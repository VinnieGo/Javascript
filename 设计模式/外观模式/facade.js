// 1.在设计初期，应该有意识地将不同的两个层分离，比如经典的三层结构。
// 2.在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观可以提供一个简单的接口，减少它们之间的依赖。
// 3.在维护一个遗留的大型系统时,为系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的结构。让新系统和Facade对象交互。


// 外观模式被开发者连续调用时会产生一定的性能问题，因为每次调用时都要检测功能的可用性。

var fuhao = {

};
fuhao.huofang = function() {
	return "馒头";
}
fuhao.chuliliangshi = function() {
	return "面粉";
}
fuhao.mantou = function() {
	this.chuliliangshi();
	this.huofang();
}

fuhao.men = {
	return this.mantou();
}	