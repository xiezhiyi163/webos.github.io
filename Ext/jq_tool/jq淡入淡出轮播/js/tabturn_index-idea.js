/*
 * tabturn_index-idea升级版，内有二层效果，有实现思路
 */
////
$('#imgturn .imgdiv-in').show();
$('#imgturn li').click(function(){
	$(this).addClass("#imgturn tabturn-in").siblings().removeClass("#imgturn tabturn-in");
	$('#imgturn p span').eq($(this).index()).fadeIn(1000).delay(500).siblings().fadeOut(1000).delay(500)
	$('#imgturn p').eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
})				
//
var num = 0;
function tab_img(){
	if(num<0){
		num = $('#imgturn p').length-1;
	}
	if(num>$('#imgturn p').length-1){
		num = 0;
	}
	$('#imgturn li').eq(num).addClass("#imgturn tabturn-in").siblings().removeClass("#imgturn tabturn-in");
	$('#imgturn p span').eq(num).fadeIn(1000).delay(500).siblings().fadeOut(1000).delay(500)
	$('#imgturn p').eq(num).fadeIn(500).siblings().fadeOut(500);
}
/////
var timer = null;
$('#imgturn .leftbtn').click(function(){
	num--;
	tab_img();		
		clearInterval(timer);
		timer = setInterval(setIntervals,3000);
})
$('#imgturn .rightbtn').click(function(){
	num++;
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
	},5000)	
}
setIntervals()
//
$('#imgturn li').eq($(this).index).click(function(){
	clearInterval(timer);
	num = $(this).index;
	timer = setInterval(setIntervals,5000)
})

