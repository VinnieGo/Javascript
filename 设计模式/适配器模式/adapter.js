// 1.使用一个已经存在的对象，但其方法或者接口不符合你的要求。
// 2.创建一个可服用的对象，该对象可以与其他不相关或不可见的对象协同工作。
// 3.使用已经存在的一个或者多个对象，但是不能进行继承已匹配他的接口。


// var aa = {
// 	test:function() {
// 		console.log('test');
// 	},
// 	go:function() {
// 		console.log('go');
// 	}
// }
// aa.test();
// aa.go();

function pp() { 
	this.test = function() {
		console.log('new test');
	}
}
aa.prototype.gogo =function() {
	console.log("new gogo");
}

function shipeiqi() {
	var s = new pp;
	var aa ={
		test:function(){
			s.test();
		},
		go:function() {
			s.gogo();
		}
	}
	return aa;
};

