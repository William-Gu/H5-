let {toString: a} = 123;
console.log(a)	//Number.prototype.toString
let {toString: b} = true;
console.log(b) //Boolean.prototype.toString
 
//[[1, 2], [3, 4]].map(([a, b]) => a + b)
//[ 3, 7 ]

function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

var jsonData = {
  id:42, status:"OK", data:[867, 5309]
}
let { id, status, data: number } = jsonData;
// 42, "OK", [867, 5309]



var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
// 获取键名for (let [key] of map){}
// 获取键值for (let [,value] of map){}