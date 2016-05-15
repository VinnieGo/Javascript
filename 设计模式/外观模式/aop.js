Function.prototype.before = function(beforefn){
    var self = this;   //保存原函数的引用
    return function(){  //返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this,arguments); //执行新函数，且保证this不被劫持，新函数接受的参数也会被原封不动的传入原函数
        return self.apply(this,arguments);//执行原函数并返回原函数的执行结果，并且保证this不被劫持
    }
}

Function.prototype.after = function(afterfn){
    var self = this;
    return function(){
        var ret = self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret;
    }
}

var log1 = function(){
    console.log(1);
}

var log2 = function(){
    console.log(2);
}

var logOne = function(){
    console.log(arguments[0]);
}

var a = logOne.before(log1);
var b = logOne.after(log2);

a();
b();