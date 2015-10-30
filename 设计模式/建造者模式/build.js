// 建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
// 建造者模式的实际，就是一个指挥者，一个建造者，一个使用指挥着调用具体建造者工作得出结果的客户。


// $.ajax({
// 	url: '/path/to/file',
// 	type: 'default GET (Other values: POST)',
// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
// 	data: {param1: 'value1'},
// })
// .done(function() {
// 	console.log("success");
// })
// .fail(function() {
// 	console.log("error");
// })
// .always(function() {
// 	console.log("complete");
// });


function Fangzi(){
	this.woshi = "";
	this.keting = "";
	this.chufang = "";
};

function Baogongtou() {
	this.gaifangzi = function (gongren) {
		 gongren.jian_woshi();
		 gongren.jian_keting();
		 gongren.jian_chufang();
	}
};

function Gongren() {
	this.jian_woshi = function() {
		console.log("jian wo shi");
	}
	this.jian_keting = function() {
		console.log("jian ke ting");
	}
	this.jian_chufang = function() {
		console.log("jian chu fang");
	}
	this.jiaogong = function() {
		var _fangzi = new Fangzi();
		_fangzi.woshi = 'ok';
		_fangzi.keting = 'ok';
		_fangzi.chufang = 'ok';
		return _fangzi;
	}
};

var gongren = new Gongren();
var baogongtou = new Baogongtou(gongren);
baogongtou.gaifangzi(gongren);

var myfangzi = gongren.jiaogong();

console.log(myfangzi);