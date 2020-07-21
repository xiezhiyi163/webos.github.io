var thisdata = {
	iconobj:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}
if(navigator.userAgent.indexOf('Windows')==-1&&navigator.userAgent.indexOf('Macintosh')==-1){
	$('body>div').eq(0).css('min-width','100%')
}
var leftandcontwrapfix = function(){//+60,height
	$("#leftwrap").height($(window).height()-$('#topinputwrap').height()-71)
	$("#contwrap").height($(window).height()-$('#topinputwrap').height()-71)
	$("#cont").height($('#contwrap').height())
	if($("#cont>div").eq(0).height()>$("#cont").height()-40){
		if(navigator.userAgent.indexOf('Windows')!=-1||navigator.userAgent.indexOf('Macintosh')!=-1){
			$('.contwraptop').eq(0).width($("#contwrap").width()-16)
		}else{
			$('.contwraptop').eq(0).width($("#contwrap").width())
		}		
	}else{
		$('.contwraptop').eq(0).width($("#contwrap").width())
	}
	setTimeout(leftandcontwrapfix,1)
};
var cleardatadom = function(){
	$('#cont>div').empty();
};
var getalldata = function(){
	// ========
	var dom = ''
	for(var i=0;i<thisdata.iconobj.length;i++){
		dom+='<div class="iconwrap">'
		dom+='	<img/>'
		dom+='	<p>范特西专辑一览</p>'
		dom+='</div>'					
	}
	$('#cont>div').append(dom)
	$('#cont>div').append('<div style="clear: both;"></div>')
};
(function(){
	leftandcontwrapfix()
	cleardatadom()
	getalldata()
})()
