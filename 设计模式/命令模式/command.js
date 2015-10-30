// 1.将函数的封装，请求，调用结合到一起。
// 2.调用具体的函数解耦命令对象和接受对象。
// 3.提高程序模块化的灵性。

//例子1
// var lian = {};
// lian.paobing = function(pao_num) {
// 	console.log(pao_num + '炮已发射！');
// }
// `lian.bubing = function(bing_num) {
// 	console.log(bing_num + '人已出动！');
// }
// lian.lianzhang = function(mingling) {
// 	lian[mingling.type](mingling.num);
// }

// lian.lianzhang({
// 	type:'paobing',
// 	num:500
// });

// lian.lianzhang({
// 	type:'bubing',
// 	num:300
// });


(function(){
	var CarManager = {
		requestInfo: function(model,id) {
			return "model :" + model + " id: " + id;
		},
		buyVehicle: function(model,id) {
			return "buyVehicle " + model + id;
		},
		arrangeViewing: function(moedl,id) {
			return "arrangeViewing" + model + id;
		}
	};
	CarManager.execute = function (name) {
		return CarManager[name] && CarManager[name].apply(CarManager,[].slice.call(arguments,1));
	};

	CarManager.execute("arrangeViewing",'Ferrari',"14523");
})();

