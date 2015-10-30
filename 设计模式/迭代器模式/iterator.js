// 1.为遍历不同的集合结构提供一个统一的接口。从而支持同样的算法在不同的集合结构上进行操作。
// 2.对于集合内部结果常常变化无异，我们不想暴露其内部结构的话，但又想让客户代码透明地访问其中的元素，这种1情况下我们
// 可以使用迭代器模式。

// 注意：
// 1.一般的迭代，我们至少要有2个方法，hasNext()和Next(),这样才做到遍历所有对象。
// 2.遍历的同时更改迭代器所在的集合结构可能导致问题。

var arr = ["1","2","3"];
var diedai = (function() {
 	var length = arr.length,
 	index = 0;
 	return {
 		hasNext: function() {
 			return index < length;
 		},
 		next: function() {
 			var data = arr[index];
 			index = index + 1;
 			return data;
 		}
 	}; 
})();


while(diedai.hasNext()) {
	console.log(diedai.next());
}