// 当前javascript脚本文件用于完成游戏的逻辑
window.onload = function(){
	/*
	  * 1. 完成游戏的初始化
	  *   * 获取Canvas对象
	  *   * 初始化游戏相关变量
	  */
	 var canvas = document.getElementById("canvas");
	 var context = canvas.getContext('2d');

	 // 定义一个对象，包含当前游戏所有初始化的数据内容
	 var g = {
		/*
		  * states属性
		  *  * 数据类型：数组
		  *  * 数组中的数据，代表游戏的 5个阶段
		  */
		states : [0,1,2,3,4],
		// state属性：代表游戏当前的阶段，初始化为 0代表第一阶段
		state : 0,
		/*
		  * size属性
		  * * 数据类型：数组
		  * * 元素含义：
		  *   * 第一个元素：表示当前画布的宽度
		  *   * 第二个元素：表示当前画布的高度
		  */
		size : [480,650],
		// score属性：代表游戏得分
		score : 0
	 }
	 // var life = 3;
	
	/*
	  * 2. 加载游戏所需的所有图片（7 类图片，7个全局变量）
	  *  * 加载游戏的背景图片
	  *  * 加载游戏的LOGO图片
	  *  * 加载过渡动画的图片
	  *  * 加载我方飞机的图片
	  *  * 加载敌方飞机的图片
	  *  * 加载子弹的图片
	  *  * 加载游戏暂停的图片
	  */
	var imgs = [];
	// 加载游戏的背景图片
	imgs[0] = new Image();
	imgs[0].src = "img/background.png";
	// 加载游戏的LOGO图片
	imgs[1] = new Image();
	imgs[1].src = "img/start.png";
	// 加载过渡动画的图片
	imgs[2] = [];
	imgs[2][0] = new Image();
	imgs[2][0].src = "img/game_loading1.png";
	imgs[2][1] = new Image();
	imgs[2][1].src = "img/game_loading2.png";
	imgs[2][2] = new Image();
	imgs[2][2].src = "img/game_loading3.png";
	imgs[2][3] = new Image();
	imgs[2][3].src = "img/game_loading4.png";
	// 加载我方飞机的图片
	imgs[3] = [];
	imgs[3][0] = new Image();
	imgs[3][0].src = "img/hero1.png";
	imgs[3][1] = new Image();
	imgs[3][1].src = "img/hero2.png";
	imgs[3][2] = new Image();
	imgs[3][2].src = "img/hero_blowup_n1.png";
	imgs[3][3] = new Image();
	imgs[3][3].src = "img/hero_blowup_n2.png";
	imgs[3][4] = new Image();
	imgs[3][4].src = "img/hero_blowup_n3.png";
	imgs[3][5] = new Image();
	imgs[3][5].src = "img/hero_blowup_n4.png";
	// 加载敌方飞机的图片
	imgs[4] = [];		// 代表小飞机
	imgs[4][0] = new Image();
	imgs[4][0].src = "img/enemy1.png";
	imgs[4][1] = new Image();
	imgs[4][1].src = "img/enemy1_down1.png";
	imgs[4][2] = new Image();
	imgs[4][2].src = "img/enemy1_down2.png";
	imgs[4][3] = new Image();
	imgs[4][3].src = "img/enemy1_down3.png";
	imgs[4][4] = new Image();
	imgs[4][4].src = "img/enemy1_down4.png";
	imgs[5] = [];		// 代表中飞机
	imgs[5][0] = new Image();
	imgs[5][0].src = "img/enemy2.png";
	imgs[5][1] = new Image();
	imgs[5][1].src = "img/enemy2_down1.png";
	imgs[5][2] = new Image();
	imgs[5][2].src = "img/enemy2_down2.png";
	imgs[5][3] = new Image();
	imgs[5][3].src = "img/enemy2_down3.png";
	imgs[5][4] = new Image();
	imgs[5][4].src = "img/enemy2_down4.png";
	imgs[6] = [];		// 代表大飞机
	imgs[6][0] = new Image();
	imgs[6][0].src = "img/enemy3_n1.png";
	imgs[6][1] = new Image();
	imgs[6][1].src = "img/enemy3_n2.png";
	imgs[6][2] = new Image();
	imgs[6][2].src = "img/enemy3_down1.png";
	imgs[6][3] = new Image();
	imgs[6][3].src = "img/enemy3_down2.png";
	imgs[6][4] = new Image();
	imgs[6][4].src = "img/enemy3_down3.png";
	imgs[6][5] = new Image();
	imgs[6][5].src = "img/enemy3_down4.png";
	imgs[6][6] = new Image();
	imgs[6][6].src = "img/enemy3_down5.png";
	imgs[6][7] = new Image();
	imgs[6][7].src = "img/enemy3_down6.png";
	// 加载子弹的图片
	imgs[7] = new Image();
	imgs[7].src = "img/bullet1.png";
	// 加载游戏暂停的图片
	imgs[8] = new Image();
	imgs[8].src = "img/game_pause_nor.png";

	/*
	  * 3. 初始化对应对象的数据内容（这些数据来源于服务器端）
	  *  * 初始化游戏背景数据
	  *  * 初始化过渡动画数据
	  *  * 初始化我方飞机数据
	  *  * 初始化敌方飞机数据（小飞机、中飞机和大飞机）
	  *  * 初始化子弹数据
	  */
	var inits = [];

	inits[0] = {
		imgs : imgs[0],
		width : 480,
		height : 852
	}
	inits[1] = {
		imgs : imgs[2],
		width : 186,	
		height : 38,
		frame : 0,	
		frames : imgs[2].length
	}
	inits[2] = {
		imgs : imgs[3],
		width : 99,
		height : 124,
		frame : 0,
		frames : 2,
		life : 3
	}
	inits[3] = {
		imgs : imgs[4],
		width : 57,
		height : 51,
		frame : 0,
		frames : 1,
		type : 1,		// 表示当前敌方飞机是哪一种
		life : 1			// 表示当前敌方飞机的生命值
	}
	inits[4] = {
		imgs : imgs[5],
		width : 69,
		height : 95,
		frame : 0,
		frames : 1,
		type : 2,
		life : 3
	}
	inits[5] = {
		imgs : imgs[6],
		width : 169,
		height : 258,
		frame : 0,
		frames : 2,
		type : 3,
		life : 10
	}
	inits[6] = {
		imgs : imgs[7],
		width : 9,
		height : 21
	}

	/*
	  * 4. 创建对应对象的构造器
	  *  * 创建背景图片的构造器
	  *  * 创建过渡动画的构造器
	  *  * 创建我方飞机的构造器
	  *  * 创建敌方飞机的构造器
	  *  * 创建子弹的构造器
	  */
	// 定义所有构造器的父级构造器（由经理定义好的）
	function Game(config){
		// 加载的图片
		this.imgs = config.imgs;
		// 图片的宽度
		this.width = config.width;
		// 图片的高度
		this.height = config.height;
		// 定义角标
		this.frame = config.frame;
		// 图片的数量
		this.frames = config.frames;
		// 定义坐标值（x,y）
		this.x = 0;
		this.y = 0;
		// 定义计数器
		this.count = 0;
		// 定义生命值
		this.life = config.life;
		// 定义标识用于表示是否爆破
		this.down = false;
		// 定义标识用于表示是否删除
		this.canDelete = false;
		// 该方法用于绘制
		this.paint = function(){}
		// 该方法用于动态
		this.step = function(){}
		// 该方法用于判断是否飞出画面
		this.isOut = function(){}
		// 该方法用于爆破动画
		this.bang = function(){}
	}
	function Sky(config){
		Game.call(this, config);

		this.x1 = 0;
		this.y1 = 0;
		this.x2 = 0;
		this.y2 = -this.height;

		this.paint = function(){
			context.drawImage(this.imgs,this.x1,this.y1);
			context.drawImage(this.imgs,this.x2,this.y2);
		}
		this.step = function(){
			this.y1++;
			this.y2++;
			if(this.y1 == this.height){
				this.y1 = -this.height;
			}
			if(this.y2 == this.height){
				this.y2 = -this.height;
			}
		}
	}
	function Loading(config){
		Game.call(this, config);
			
		this.x = 0;
		this.y = height - this.height;

		this.paint = function(){
			context.drawImage(this.imgs[this.frame],this.x,this.y);
		}
		this.step = function(){
			this.count++;
			if(this.count%2 == 0){
				this.frame++;
			}
			if(this.frame == this.frames){
				status = RUNNING;
			}
		}
	}
	function Hero(config){
		Game.call(this, config);

		this.x = width/2 - this.width/2;
		this.y = height - this.height - 50;

		this.paint = function(){
			context.drawImage(this.imgs[this.frame],this.x,this.y);
		}
		this.step = function(){
			if(this.down){
				this.frame++;
				if(this.frame == this.imgs.length){
					if(life == 0){
						status =	GAMEOVER;
						this.frame = 5;
					}else{
						hero = new Hero(HERO);
					}
				}
			}else{
				this.frame++;
				if(this.frame == 2){
					this.frame = 0;
				}
			}
		}
		// 我方飞机独有的方法
		this.shoot = function(){
			this.count++;
			if(this.count%5 == 0){
				bullets[bullets.length] = new Bullet(BULLET);
			}
		}
		this.bang = function(){
			life--;
			this.down = true;
			this.frame = this.frames;
		}
	}
	function Enemy(config){
		Game.call(this, config);

		this.type = config.type;

		this.x = Math.random() * (width - this.width);
		this.y = -this.height;

		this.paint = function(){
			context.drawImage(this.imgs[this.frame],this.x,this.y);
		}
		this.step = function(){
			if(this.down){
				this.frame++;
				if(this.frame == this.imgs.length){
					this.canDelete = true;
				}
			}else{
				this.frame++;
				this.frame = this.frame%this.frames;
			}

			 switch (this.type){
				case 1:	 // 小飞机
					this.y += 5;
					break;
				case 2: // 中飞机
					this.y += 3;
					break;
				case 3: // 大飞机
					this.y++;
					break;
			  }
		}
		this.isOut = function(){
				return this.y >= height;
		}
		// 该方法时敌方飞机独有的方法
		this.checkHit = function(compent){	
			return compent.x + compent.width/2 > this.x &&
				compent.y + compent.height/2 < this.y + this.height &&
				compent.x + compent.width/2 < this.x + this.width &&
				compent.y + compent.height/2 > this.y
		}
		this.bang = function(){
				this.life--;
				if(this.life == 0){
					// 得分
					switch (this.type){
						case 1:	 // 小飞机	
							score++;
							break;
						case 2: // 中飞机
							score+=5;
							break;
						case 3: // 大飞机
							score+=30;
							break;
					}
					// 进入到爆破动画阶段
					this.down = true;
					this.frame = this.frames;
				}
			}
	}
	function Bullet(config){
		Game.call(this,config);

		this.x = hero.x + hero.width/2 - this.width/2;
		this.y = hero.y - this.height;

		this.paint = function(){
			context.drawImage(this.imgs,this.x,this.y);
		}
		this.step = function(){
			this.y -= 10;
		}
		this.isOut = function(){
			return this.y + this.height < 0;
		}
	}

	/*
	  * 5. 创建对应对象
	  */
	var sky = new Sky(inits[0]);
	var loading = new Loading(inits[1]);
	var hero = new Hero(inits[2]);
	var enemies = [];
	var bullets = [];
	/*
	  * 问题：敌机和子弹都是多数的
	  * * 创建敌方飞机的方法
	  * * 创建绘制敌机的方法        - 绘制子弹的方法
	  * * 创建控制敌机运动的方法 - 控制子弹运动的方法
	  * * 创建删除敌机的方法        - 删除子弹的方法
	  */
	function enemiesEnter(){
		var num = Math.floor(Math.random() * 100);
		if(num <= 7){	// 创建小飞机
			enemies[enemies.length] = new Enemy(E1);
		}else if(num == 8){	// 创建中飞机
			enemies[enemies.length] = new Enemy(E2);
		}else if(num == 9){	// 创建大飞机
			if(enemies.length > 0 && enemies[0].type != 3){
				enemies.splice(0,1,new Enemy(E3));
			}
		}
	}
	function compontPaint(){
		for(var i=0;i<enemies.length;i++){
			enemies[i].paint();
		}
		for(var i=0;i<bullets.length;i++){
			bullets[i].paint();
		}
	}
	function compontStep(){
		for(var i=0;i<enemies.length;i++){
			enemies[i].step();
		}
		for(var i=0;i<bullets.length;i++){
			bullets[i].step();
		}
	}
	function compontDel(){
		for(var i=0;i<enemies.length;i++){
			if(enemies[i].isOut() || enemies[i].canDelete){
				enemies.splice(i,1);
			}
		}
		for(var i=0;i<bullets.length;i++){
			if(bullets[i].isOut() || bullets[i].canDelete){
				bullets.splice(i,1);
			}
		}
	}

	/*
	  * 6. <canvas>元素绑定若干事件
	  *  * onclick事件 - 从第一阶段过渡到第二阶段
	  *  * onmousemove事件 - 游戏运行阶段，我方飞机跟随
	  *  * onmouseover事件 和 onmouseout事件
	  */
	canvas.onclick = function(){
		if(status == START){
			status = STARTING;
		}
	}
	canvas.onmousemove = function(event){
		if(status == RUNNING){
			hero.x = event.offsetX - hero.width/2;		//x;
			hero.y = event.offsetY - hero.height/2;		//y;
		}
	}
	canvas.onmouseout = function(){
		if(status == RUNNING){
			status = PAUSE;
		}
	}
	canvas.onmouseover = function(){
		if(status == PAUSE){
			status = RUNNING;
		}
	}

	/*
	  * 7. 将所有其它方法归类
	  *  * 检查撞击方法checkHit()
	  *  * 绘制得分和生命值的方法drawText()
	  *  * 游戏结束方法gameOver()
	  */
	function checkHit(){
		for(var i=0;i<enemies.length;i++){
			if(enemies[i].checkHit(hero) && !hero.down){
				enemies[i].bang();
				hero.bang();
			}
			for(var j=0;j<bullets.length;j++){
				if(enemies[i].checkHit(bullets[j])){
					enemies[i].bang();
					bullets[j].canDelete = true;
				}
			}
		}
	}
	function drawText(){
		context.font = "bold 24px Verdana";
		context.textAlign = "left";		// 水平方向
		context.textBaseline = "hanging";	// 垂直方向
		context.fillText("SCORE: "+score,20,10);
		context.fillText("LIFE: "+life,360,10);
	}
	function gameOver(){
		context.font = "bold 48px Verdana";
		context.textAlign = "center";		// 水平方向
		context.textBaseline = "hanging";	// 垂直方向
		context.fillText("GAME OVER",width/2,height/2 - 50);
	}

	// 定义游戏的核心控制器
	setInterval(function(){
		sky.paint();
		sky.step();
		switch (parseInt(status)){
			case START :
				context.drawImage(copyright,15,0);
				break;
			case STARTING :
				loading.paint();
				loading.step();
				break;
			case RUNNING :
				hero.paint();
				hero.step();

				enemiesEnter();
				enemiesPaint();
				enemiesStep();
				enemiesDel();

				hero.shoot();
				bulletsPaint();
				bulletsStep();

				checkHit();

				drawText();
				break;
			case PAUSE :
				hero.paint();
				enemiesPaint();
				bulletsPaint();

				drawText();

				context.drawImage(pause,0,0);
				break;
			case GAMEOVER :
				hero.paint();
				enemiesPaint();
				bulletsPaint();

				drawText();

				gameOver();
				break;
		}
	},100);
}