//类的实例化次数只能为一次，在实例不存在的情况下，可以通过一个方法创建一个类的实例，如果实例存在就简单地返回该对象的引用。
// 在Javascript中，Singleton充当共享资源命名空间，从全局空间中隔离出代码实现，从而为函数提供单一的访问点。

var mySingleton = (function(){
    var instance;  //保持一个Singleton的引用
    function init() {
    	function privateMethod() {
    		console.log("i am a privateMethod");
    	}
    	var privateVar = "i am a private var";
    	var privateRandomNum = Math.random();
    	return {
    		publicMethod: function() {
    			console.log('i am a public method');
    		},
    		publicPro: "i am a public property",
    		getRandomNum: function() {
    			return privateRandomNum;
    		}
    	};
    };
    return {
    	getInstance: function() {
    		if(!instance) {
    			instance = init();
    		}
    		return instance;
    	}
    };
  })();

 var singleA = mySingleton.getInstance();
 var singleB = mySingleton.getInstance();


 console.log(singleA.getRandomNum() == singleB.getRandomNum());


//另一个例子
var SingletonTester = (function() {
    function Singleton(options) {
        options = options || {};
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;
    var _static = {
        name:"SingletonTester",
        getInstance : function(options) {
              if(instance === undefined) {
                instance = new Singleton(options);
              }
              return instance;          
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX:5
});

var singletonTest1 = SingletonTester.getInstance({
    pointX:6
});

console.log(singletonTest.pointX,singletonTest1.pointX);