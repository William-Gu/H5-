var fade=function(node,color){
	var level=1;
	var step=function(){
		var hex=level.toString(16);
		node.style.background='#'+color+''+hex+hex;
		if(level<15){
			level+=1;setTimeout(step,100)
		}
	}
	setTimeout(step,100)
	}
fade(document.body,"ffff")