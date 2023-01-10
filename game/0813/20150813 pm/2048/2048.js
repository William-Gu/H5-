var game={
	data:[],
	randomNum:function(){
		if(!this.isFull()){//如果不满才生成随机数
			//对象的方法使用对象的属性必须+this
			/*在数组的随机1个位置生成一个2或4*/
			while(true){
				/*Step1: 随机生成一个行下标：row
		              随机生成一个列下标  :  col
					  下标范围：0-3*/
				var row=Math.floor(Math.random()*4);
				var col=Math.floor(Math.random()*4);
				/*Step2: 如果当前元素==0，就在当前位置元素中放入2或4
						   生成一个随机数，如果随机数<0.5,放入2
						                                                   否则放入4
						   退出循环
			    （否则，什么也不做，继续循环）*/
				if(this.data[row][col]==0){
					this.data[row][col]=Math.random()<0.5?2:4;
					break;
				}
			}
		}
	},
	isFull:function(){/*检查当前数组是否已满*/
		//将二维数组按默认格式转为字符串
		//用        找       
		//如果找到，返回false，否则，返回true
		return this.data.toString().search(/(0,)|(,0)/)==-1;
	},
	start:function(){
		this.data=[ [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0] ];
		console.log(this.data.toString());
		/*对象自己的方法内，调用自己的其它方法也要加this*/
		this.randomNum();  
		this.randomNum();
		this.updateView();
	},
	updateView:function(){
		/*将当前数组每个元素设置到页面对应的div中*/
		//遍历二维数组中每个元素: row col
		for(var row=0;row<this.data.length;row++){
			for(var col=0;col<this.data[row].length;col++){
		      //Step1: 利用div的id找到和当前元素对应位置的div
				//其中，id为"c"+row+col;
				var div=
					document.getElementById("c"+row+col);
				if(this.data[row][col]!=0){//Step2: 如果当前元素!=0
			          //Step 2.1: 将当前元素的值写入div中
					  div.innerHTML=this.data[row][col];
					  //Step 2.2: 将当前元素的className属性
					  //                设置为cell n?
					  div.className="cell n"+this.data[row][col];
				}else{//Step3: 否则：
			          //Step 3.1: 将div中的内容设置为""
					  div.innerHTML="";
					  //Step 3.2: 将div.className重置为"cell"
					  div.className="cell";
				}
			}
		}
	}
}
/*窗口加载后自动调用*/
/*事件：网页自动触发或人为触发的状态变化*/
/*onload: 当窗口加载完之后，自动触发的事件*/
//事件处理函数：当事件发生后自动调用的函数对象
window.onload/*事件*/=function(){
		game.start();
		console.log(game.data.toString());
}