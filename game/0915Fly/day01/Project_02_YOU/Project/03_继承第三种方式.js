// 继承第三种方式（多对象继承 - 继承链）
function A(){}		// 定义一个空的对象模板
A.prototype = {
	a : "a",
	sayMe : function(){
		console.log("this is a.");
	}
}

function B(){}

B.prototype = A.prototype;

B.prototype.b = "b";
B.prototype.sayMe = function(){
	console.log("this is b.");
}

var b = new B();
console.log(b.a);
console.log(b.b);