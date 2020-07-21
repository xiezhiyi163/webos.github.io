/*
 * tabturn_index-idea
 */
$('#imgturn .imgdiv-in').show();
$('#imgturn li').click(function(){
	$(this).addClass("#imgturn tabturn-in").siblings().removeClass("#imgturn tabturn-in");
	$('#imgturn p').eq($(this).index()).show().siblings().hide();
})				
//
var num = 0;
function tab_img(){
	$('#imgturn li').eq(num).addClass("#imgturn tabturn-in").siblings().removeClass("#imgturn tabturn-in");
	$('#imgturn p').eq(num).show().siblings().hide();
}
/////
var timer = null;
$('#imgturn .leftbtn').click(function(){
	num--;
	if(num<0){
		num = $('#imgturn p').length-1;
	}
	tab_img();		
		clearInterval(timer);
		timer = setInterval(setIntervals,3000);
})
$('#imgturn .rightbtn').click(function(){
	num++;
	if(num>$('#imgturn p').length-1){
		num = 0;
	}
	tab_img();				
		clearInterval(timer);
		timer = setInterval(setIntervals,3000);
})
//
function setIntervals(){
	setInterval(function(){
		clearInterval(timer);///////
		function autoturn(){
			num--;
			if(num<0){
				num = $('#imgturn p').length-1;
			}
			tab_img();		
		}
		function autoturn(){
			num++;
			if(num>$('#imgturn p').length-1){
				num = 0;
			}
			tab_img();
		}
		autoturn();
	},3000)	
}
setIntervals()
//
$('#imgturn li').eq(0).click(function(){
	clearInterval(timer);
	num = 0;
	timer = setInterval(setIntervals,3000)
})
$('#imgturn li').eq(1).click(function(){
	clearInterval(timer);
	num = 1;
	timer = setInterval(setIntervals,3000)
})
$('#imgturn li').eq(2).click(function(){
	clearInterval(timer);
	num = 2;
	timer = setInterval(setIntervals,3000)
})
$('#imgturn li').eq(4).click(function(){
	clearInterval(timer);
	num = 3;
	timer = setInterval(setIntervals,3000)
})
