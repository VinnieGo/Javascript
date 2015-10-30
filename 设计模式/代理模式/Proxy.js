// 代理模式，为其他对象提供一种代理以控制对这个对象的访问。代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何
// 对象：文件，资源，内存中的对象，或者是一些难以复制的东西。

// 作用：
// 1.远程代理（一个对象将不同的对象进行局部代理）
// 2.虚拟代理（根据需要创建开销很大的对象如渲染网页暂时用占位代替真图）
// 3.安全代理（控制真实对象的访问权限)
// 4.智能指引（调用对象代理处理另外一些事情如垃圾回收机制）

function maijia() {
	this.name = '林昊';
}


function zhongjie() {

} 
zhongjie.prototype.maifang  = function(){
	new fangdong(new maijia()).maifang('20万');
}

function fangdong(maijia) {
	this.maijia_name = maijia.name;
	this.maifang = function(money) {
		console.log('收到来自 '+this.maijia_name+' 总共 '+money);
	}
}

(new zhongjie).maifang();
