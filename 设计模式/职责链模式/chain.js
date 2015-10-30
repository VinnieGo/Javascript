// // 1.dom的冒泡有些类似职责链。
// // 2.node.js当controller中有很多负责操作逻辑的时候拆分中间件
// // 3.解耦发送者和接收者。

// function laoban(xiangmujingli) {
// 	if(xiangmujingli) {
// 		this.xiangmujingli = xiangmujingli;
// 	}
// }
// laoban.prototype.write = function(code) {
// 	this.xiangmujingli.write(code);
// }

// function xiangmujingli = function(coder) {
// 	if(coder) {
// 		this.coder = coder;
// 	}
// }
// xiangmujingli.prototype.write = function(code) {
// 	this.coder.write(code);
// }

// function coder() {

// }
// coder.prototype.write(code){
// 	console.log(code);
// }

// var begin = new laoban(new(xiangmujingli(new coder()));
// begin.write('php');


console.log('ss');