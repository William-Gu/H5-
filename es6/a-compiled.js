'use strict';

var _test = require('./test.js');

var test = _interopRequireWildcard(_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by William_Koo on 3/29/16.
 */
var a = 10;
var b = 1;
for (var i = 0; i < 6; i++) {
    console.log(i);
}
//console.log(i)undefined;
var tmp = 123;

//let和const是块级作用域，快内声明前无效，块外声明无效,同样不能在函数内部重复声明参数。
if (true) {
    tmp = 'abc';
    console.log(tmp);
    //let tmp;    // ReferenceError
}

//变量提升
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = "hello world";
    }
}
a = 20;
console.log(a);

//引用其他文件

console.log(test.A);

console.log(test.B);

//# sourceMappingURL=a-compiled.js.map