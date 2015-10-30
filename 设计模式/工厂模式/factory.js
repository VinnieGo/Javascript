 
 // function Car(options) {
 // 	this.doors = options.doors || 4;
 // 	this.state = options.state || "brand new";
 // 	this.color = options.color || "silver";
 // }

 // function Truck(options) {
 // 	this.state = options.state || "used";
 // 	this.wheelSize = options.wheelSize || "large";
 // 	this.color = options.color || "silver";
 // }
 // function VehicleFactory() {

 // }
 // VehicleFactory.prototype.vehicleClass = Car;
 // VehicleFactory.prototype.createVehicle = function (options) {
 // 	if(options.vehicleType == "car"){
 // 		this.vehicleClass = Car;
 // 	}else {
 // 		this.vehicleClass = Trunk;
 // 	}

 // 	return new this.vehicleClass(options);
 // }
 // var carFactory = new VehicleFactory();
 // var car = carFactory.createVehicle({
 // 	vehicleType: "car",
 // 	color: "yellow",
 // 	doors: 6
 // });
 // console.log(car);

 
//简单工厂
 // var XMLHttpFactory = function(){

 // };
 // XMLHttpFactory.createXMLHttp =function() {
 // 	var XMLHttp = null;
 // 	if(window.XMLHttpRequest){
 // 		XMLHttp = new XMLHttpRequest();
 // 	}else if(window.ActiveXObject){
 // 		XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
 // 	}
 // 	return XMLHTTP;
 // }

 // var AjaxHander = function() {
	// 	var XMLHttp = XMLHttpFactory.createXMLHttp(); 	
 // }
  

  //抽象工厂

  var XMLHttpFactory = function(){

  }
  XMLHttpFactory.prototype = {
  	createFactory : function(){
  		throw new Error("this is abstract class");
  	}
  }

  var XHRHandler = function(){
  	XMLHttpFactory.call(this);
  };
  XHRHandler.prototype = new XMLHttpFactory();
  XHRHandler.prototype.constructor = XHRHandler;
  XHRHandler.prototype.createFactory =function(){
  	var XMLHttp = null;
 	if(window.XMLHttpRequest){
 		XMLHttp = new XMLHttpRequest();
 	}else if(window.ActiveXObject){
 		XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
 	}
 	return XMLHTTP;

  } 