// $('textarea').on('keydown', debounce(ajaxAction, 2500))

function debounce(fn, delay){
  var timer = null; // 声明计时器
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  };
}
// 用法示例
var todoChanges = debounce(batchLog, 1000);
Object.observe(models.todo, todoChanges);
