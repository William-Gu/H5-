// 继承的第一种方法
function A(){
	this.a = "a";
	this.sayMe = function(){
		console.log("this is a.");
	}
}
// 1. new A的对象
var a = new A();

function B(){
	this.b = "b";
	this.sayMe = function(){
		console.log("this is b.");
	}
}
// 2. 将B的prototype = A的对象
B.prototype = a;

// 测试
var b = new B();
console.log(b.b);
console.log(b.a);