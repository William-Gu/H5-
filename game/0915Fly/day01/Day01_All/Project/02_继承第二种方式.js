// 继承的第二种方式（两个对象之间的继承）
function A(){}		// 定义一个空的对象模板
A.prototype = {
	a : "a",
	sayMe : function(){
		console.log("this is a.");
	}
}

function B(){
	this.b = "b";
	this.sayMe = function(){
		console.log("this is b.");
	}
}

B.prototype = A.prototype;

var b = new B();
console.log(b.a);
console.log(b.b);