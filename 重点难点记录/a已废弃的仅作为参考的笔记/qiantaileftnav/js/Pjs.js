var Pm = (function(){
	setTimeout(function(){
		$('#cont').height($(window).height()-60);
		$('#contNav').height($(window).height()-60);
		Pm()
	},0)
});
setTimeout(function(){
	$('#cont').height($(window).height()-60);
	$('#contNav').height($(window).height()-60);
	Pm()
},0)
