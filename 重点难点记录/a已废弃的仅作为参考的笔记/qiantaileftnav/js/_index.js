window.data = {
	flag:0
}

window.fns = {
	repeatSetTimeouts:function(){
		setTimeout(function(){
			fns.resizes()
			//
			fns.repeatSetTimeouts()
		},10)		
	},
	//----
	resizes:function(){
		if($(window).width()>900){
			$('._center').removeClass('_center60mr');
			$('._right').removeClass('_right60width');
			$('._right').addClass('_righthalfwidth');
			$('._right').addClass('_righthalfwidth');
			$('._right').removeClass('_rightfullwidth');
			//
			$('#_showright').css('display','none');
			$('#_rightcontwrap').removeClass('_vihid');
			data.flag = 0
		}else{
			//
			if(data.flag == 0){
				data.flag = 1//1关闭 2打开
				$('._center').addClass('_center60mr');
				$('._right').addClass('_right60width');
				$('._right').removeClass('_righthalfwidth');
				$('._right').removeClass('_rightfullwidth');
				//
				$('#_showright').css('display','block');
				$('#_rightcontwrap').addClass('_vihid');				
			}
		}
	},
	showrightfn:function(){
		if(data.flag ==1){
			data.flag = 2//1关闭 2打开
			$('._right').removeClass('_right60width');
			$('._right').addClass('_rightfullwidth');
			$('#_rightcontwrap').removeClass('_vihid');				
		}else{
			data.flag = 1//1关闭 2打开
			$('._right').addClass('_right60width');
			$('._right').removeClass('_rightfullwidth');
			$('#_rightcontwrap').addClass('_vihid');				
		}
	},
	clickshowrightfn:function(){
		$('#_showright').click(fns.showrightfn)
	}	
	//----
	//业务
}
;
(function(){
	fns.repeatSetTimeouts()
	fns.clickshowrightfn()
	//业务
	
})()
