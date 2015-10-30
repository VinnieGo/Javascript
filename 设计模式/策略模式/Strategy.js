// 1.所有这些算法都是做相同的事情，只是实现不同。
// 2.以相同的方式调用所有的方法，减少了各种算法类与使用算法类之间的耦合。
// 3.单独定义算法，也方便了单元测试。

// 注意：
// 不仅可以封装算法，也可以用来封装几乎任何类型的规则，是要在分析过程中需要在不同时间应用不同的业务规则，
// 就可以考虑是要策略模式来处理各种变化。


var input = $('#input').val();

var val = {
	isEmpty: function(argument) {
		return false;
	},
	isTel: function(argument) {
		return true;
	}
}

var ise = val.isEmpty(input);
var isTel = val.isTel(input);

if(!ise && isTel){
	alert("通过审核");
};

$.input.val({
	isEmpty:false;
	isTel: true;
});

$('div').animate({
	width: 100px,
	2000, function() {
	/* stuff to do after animation is complete */
});