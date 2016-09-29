/**
 * Created by William_Koo on 7/12/16.
 */
// 函数声明语句
let a = 'secret';
function f() {
	return a;
}//错误


// 函数表达式
let a = 'secret';
let f = function () {
	return a;
};


//ES6的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。
// 不报错
//'use strict';
//if (true) {
//	function f() {}
//}
//// 报错
//'use strict';
//if (true)
//	function f() {}

function* foo(x){
	var y=2*(yield (x+1));
	var z=yield(y/3);
	return (x+y+z);
}
var b=foo(5);
b.next();
b.next(12);
b.next(13);