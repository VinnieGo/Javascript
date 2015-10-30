// 1.在软件开发中，中介者是一个行为设计模式，通过提供一个统一的接口让系统的不同部分进行通信。
// 一般，如果系统有很多子模块需要直接沟通，都要创建一个中央控制点让其各模块通过该中央控制点进行交互。
// 中介者模式可以让这些子模块不需要直接沟通，而达到解耦的目的。
// 2.当系统出现了多对多交互复杂的对象时，先不急于使用中介者模式，而是思考一下系统设计是不是有问题。


var feiji = function(name) {
	this.name = name;
}
feiji.prototype.send = function(msg,to) {
	console.log(this.name + " 发送了信息 ");
	tatai.send(msg,to);
};
feiji.prototype.jieshou =function(msg) {
	console.log(this.name + " 接收到 " + msg);
}
var tatai = {
	all:{},
	zhuce:function(feiji) {
		this.all[feiji.name] = feiji;
	},
	send:function(msg,to) {
		this.all[to.name].jieshou(msg);
	}
}
var feiji1 = new feiji("feiji1");
var feiji2 = new feiji("feiji2");

tatai.zhuce(feiji1);
tatai.zhuce(feiji2);
feiji1.send("我马上降落，还有200米",feiji2);
