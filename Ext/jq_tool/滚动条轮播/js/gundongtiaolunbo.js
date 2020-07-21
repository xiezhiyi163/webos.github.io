	var num = 0;
	var timer = 0;
	var kai = true;//点击开关
	var liWidth = $('#imgBox li').width();//li宽
	var spanWidth = $('#slider').width();//span滑块宽
	$("#imgBox").css('width',665*$("#imgBox li").length);
	var len = $("#imgBox li").length;//li的长度
	//轮播函数
	function move(){
		if(num < 0){
			num = len-1;
		}
		if(num>len-1){
			num = 0;
		}
		$('#imgBox').stop().animate({'left':-num*liWidth},800);
		$('#slider').stop().animate({'left':num*spanWidth},800);
	}
	//左按钮切换
	$('#leftBtn').click(function(){
		if(kai){
			num--;
			move();
			kai = false;
			setTimeout(function(){
				kai = true;//800毫秒内num只加1或减1
			},800)
		}
	})
	//右按钮切换
	$('#rightBtn').click(function(){
		if(kai){
			num++;
			move();
			kai = false;
			setTimeout(function(){
				kai = true;
			},800)
		}
	})
	//自动轮播
	timer = setInterval(function(){
		num++;
		move();
	},3000)
	//清除定时器
	$('#banner').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		timer = setInterval(function(){
			num++;
			move();
		},3000)
		
	})
	//拖动滑块
	var staX=0,staY=0;
	var maxX = $("#sliderBox").width()-$("#slider").width();//滑块可移动最大范围
	var maxboxX = $("#imgBox").width()-$("#imgBox li").width();//图片ul可移动最大范围
	//按下拖动
	$('#slider').on('mousedown',function(event){
		var ev = event||window.event;
		staLeft = $("#slider").position().left;//按下时滑块位置
		staX = ev.clientX;//按下时鼠标位置
		$(document).on('mousemove',sliderMove);//鼠标移动事件
	})
	//抬起清除
	$('#banner').on('mouseup',function(event){
		$(document).off('mousemove',sliderMove);//
		$('#imgBox').stop().animate({'left':-num*liWidth},500);
		$('#slider').stop().animate({'left':num*spanWidth},500);
	})
	//离开清除
	$('#banner').on('mouselive',function(event){
		$(document).off('mousemove',sliderMove);
		$('#imgBox').stop().animate({'left':-num*liWidth},500);
		$('#slider').stop().animate({'left':num*spanWidth},500);
	})
	
	function sliderMove(event){
		var ev = event||window.event;
		endLeft =  ev.clientX - staX + staLeft;
		if(endLeft < 0){
			endLeft = 0;
		}else if(endLeft > maxX){
			endLeft = maxX;
		}
		$('#imgBox').css('left',-endLeft*maxboxX/maxX);
		$('#slider').css('left',endLeft);
		num = Math.round(endLeft/$("#slider").width());
	}
	
	//点击切换
	$("#sliderBox").click(function(event){
		var ev = event||window.event;
		var mouseX = ev.clientX;
		var sliderBoxLeft  = $("#sliderBox").offset().left;
		var mouseLeft = mouseX - sliderBoxLeft;
		num = Math.floor(mouseLeft/$("#slider").width());
		$('#imgBox').stop().animate({'left':-num*liWidth},500);
		$('#slider').stop().animate({'left':num*spanWidth},500);
	})
