/**
 * Created by William_Koo on 3/29/16.
 */
var [a, b, c] = [1, 2];
console.log(a)//1
console.log(b)//2
console.log(c)//undefined

var [a1,a2="a22"]=["a11"];
console.log(a1);
console.log(a2);

var [x0 = 1] = [undefined];
console.log(x0) // 1

var [x1 = 1] = [null];
console.log(x) // null
let [x2 = 1, y2 = x2] = [];     // x=1; y=1
let [x3 = 1, y3 = x3] = [2];    // x=2; y=2
let [x4 = 1, y4 = x4] = [1, 2]; // x=1; y=2

var { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

var { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

var { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined


//赋给对应的变量。真正被赋值的是后者，而不是前者。
var { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(foo) // undefined
console.log(baz) // "aaa"

//这时p是模式，不是变量，因此不会被赋值。
var obj = {
    p: ["Hello",
        { y: "World" }
    ]
};
var { p: [x, { y }] } = obj;
x // "Hello"
y // "World"

const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let {length : len} = 'hello';
len // 5