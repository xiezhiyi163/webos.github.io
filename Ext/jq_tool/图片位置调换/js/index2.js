//************************************************
//img切换控件，点上一个或下一个，先重新排序再重新渲染
//************************************************
let imgsort = {
	//*核心内容*/
	list:[{num:0},{num:1},{num:2}],//如果有追加的话，在后面追加就行
	init:function(is){
		$('#fine').empty()
		for(var i=0;i<imgsort.list.length;i++){
			$('#fine').append('<div>'+
				'<div class="tochange">'+
					'<div class="changedown" onmouseup="imgsort.down('+i+')">></div>'+
					'<div class="changeup" onmouseup="imgsort.up('+i+')"><</div>'+
				'</div>'+
				'<div class="img">'+
					'<img style="width:200px;height:200px;"/>'+				
					'<i style="display: block;clear: both;"></i>'+
				'</div>'+
				'<div class="text">'+imgsort.list[i].num+'</div>'+
			'</div>')
		}
		$('#fine').append('<i style="display: block;clear: both;"></i>')
		for(var i=0;i<imgsort.list.length;i++){//init事件
			imgsort.setmove(i)
		}
	},	
	up:function(is){
		for(var i=0;i<imgsort.list.length;i++){
				if(is==i){
					if(i-1<0){
						return
					}
					$('#fine>div').eq(i).animate({'left':'-260px'},300)
					$('#fine>div').eq(i-1).animate({'left':'260px'},300)
					var ind = i
					setTimeout(function(){
						$('#fine>div').eq(ind).css({'left':'0'})
						$('#fine>div').eq(ind-1).css({'left':'0'})
						var toup = imgsort.list[ind]
						var toup2 = imgsort.list[ind-1]
						imgsort.list[ind-1] = toup
						imgsort.list[ind] = toup2
						imgsort.init(ind,'up')
					},300)
					break;
				}
		}
	},
	down:function(is){
		for(var i=0;i<imgsort.list.length;i++){
				if(is==i){
					if(i+1>imgsort.list.length-1){
						return
					}
					$('#fine>div').eq(i).animate({'left':'260px'},300)
					$('#fine>div').eq(i+1).animate({'left':'-260px'},300)
					var ind = i
					setTimeout(function(){
						$('#fine>div').eq(ind).css({'left':'0'})
						$('#fine>div').eq(ind+1).css({'left':'0'})
						var toup = imgsort.list[ind]
						var toup2 = imgsort.list[ind+1]
						imgsort.list[ind+1] = toup
						imgsort.list[ind] = toup2
						imgsort.init(ind,'down')
					},300)
					break;
				}
		}
	},
	moveflag:true,
	//*鼠标及手势事件相关*/
	EventUntil : {
		addhander:function(obj,type,fn,bool){
			if(obj.addEventListener){
				obj.addEventListener(type,fn,bool)
			}else{
				obj.attachEvent("on"+type,fn)
			}
		},
		removehander:function(obj,type,fn,bool){
			if(obj.removeEventListener){
				obj.removeEventListener(type,fn,bool)
			}else{
				obj.detachEvent("on"+type,fn)
			}
		}				
	},		
	//鼠标
	wheretoMovePC:function(objb,is){
		var ind = is
		var startX, endX, startY, endY;
		imgsort.EventUntil.addhander(objb, 'mousedown', function(event) {
			imgsort.moveflag=true
			startX = event.clientX;
			startY = event.clientY;
		})
		imgsort.EventUntil.addhander(objb, 'mousemove', function(event) {
			endX = event.clientX;
			endY = event.clientY;
			//
			var x = endX - startX;
			var y = endY - startY;
			//
			if(Math.abs(x) > Math.abs(y) && x > 0) {//300必须是元素的宽度
//				console.log('右')				
			} else if(Math.abs(x) > Math.abs(y) && x < 0) {//300必须是元素的宽度
//				console.log('左')				
			} else if(Math.abs(x) < Math.abs(y) && y > 0) {
				console.log('下')
			} else if(Math.abs(x) < Math.abs(y) && y < 0) {
				console.log('上')
			}
		})
		imgsort.EventUntil.addhander(objb, 'mouseup', function(event) {
			var x = endX - startX;
			var y = endY - startY;
			if(imgsort.moveflag==true){
				imgsort.moveflag=false
				if(x<0){
					imgsort.up(ind)
				}else{
					imgsort.down(ind)
				}
				$('#finefixed').css({'height':'0%'})
				return;
			}
		})
	},	
	//手势滑动方向判断
	wheretoMove:function(objb,is) {
		var ind = is
		var startX, endX, startY, endY;
		imgsort.EventUntil.addhander(objb, 'touchstart', function(event) {
			imgsort.moveflag=true
			startX = event.touches[0].clientX;
			startY = event.touches[0].clientY;
		})
		imgsort.EventUntil.addhander(objb, 'touchmove', function(event) {
			endX = event.touches[0].clientX;
			endY = event.touches[0].clientY;
			//
			var x = endX - startX;
			var y = endY - startY;
			//
			if(Math.abs(x) > Math.abs(y) && x > 0) {//300必须是元素的宽度
//				console.log('右')				
			} else if(Math.abs(x) > Math.abs(y) && x < 0) {//300必须是元素的宽度
//				console.log('左')				
			} else if(Math.abs(x) < Math.abs(y) && y > 0) {
				console.log('下')
			} else if(Math.abs(x) < Math.abs(y) && y < 0) {
				console.log('上')
			}
		})
		imgsort.EventUntil.addhander(objb, 'touchend', function(event) {
			var x = endX - startX;
			var y = endY - startY;
			if(imgsort.moveflag==true){
				imgsort.moveflag=false
				if(x<0){
					imgsort.up(ind)
				}else{
					imgsort.down(ind)
				}
				$('#finefixed').css({'height':'0%'})
				return;
			}
		})
	},
	setmove:function(is){
		var ele = $('#fine>div').get(is)
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			imgsort.wheretoMove(ele,is)
		} else {
		    imgsort.wheretoMovePC(ele,is)
		}
	}
}
//*这一步是在接收数据之后才执行*/
imgsort.init(null,null)


