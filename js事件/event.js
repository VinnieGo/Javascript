/**
 * 摘自《JavaScript高级程序设计》
 * 事件处理程序
 *@param element 元素
 *@param type 事件类型
 *@param handler 回调函数
 *
 */
var EventUtil = {
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);//最后布尔值如果是true,表示在捕获阶段调用事件处理程序;如果是false,表示在冒泡阶段调用事件处理程序。
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else {
            element["on" + type] = handler;
        }
    },
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on" + type,handler);
        }else {
            element["on" + type] = null;
        }
    },
    getEvent:function(event){
        return event ? event : window.event;
    },
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancleBubble = true;
        }
    },
    getCharCode:function(event){
        if(typeof event.charCode == "number"){
            return event.charCode;
        }else {
            return keyCode;
        }
    }
}
