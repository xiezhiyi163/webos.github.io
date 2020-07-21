//@rightfixed-public
var rightfix = document.getElementById('right-fixed');
var conttopfix = document.getElementById('conttop-fixed');
var rightfix_in = document.getElementById('right-fixed_in');
var rightfix_contwrap = document.getElementById('rightcont-wrap');
var winheight = document.documentElement.clientHeight || document.body.clientHeight
var winwidth = document.documentElement.clientWidth || document.body.clientWidth
rightfix.style.height = winheight - 80 + 'px'
conttopfix.style.width = winwidth - 460+'px'
rightfix_contwrap.style.height = rightfix_in.offsetHeight-40+'px'
var timer0;
function resize0(){
	if(rightfix){
		var winheights = document.documentElement.clientHeight || document.body.clientHeight
		var winwidths = document.documentElement.clientWidth || document.body.clientWidth
		rightfix.style.height = winheights - 80 + 'px'
		rightfix_contwrap.style.height = rightfix_in.offsetHeight-120+'px'
		if(conttopfix){
			conttopfix.style.width = winwidths - 460+'px'
		}				
	}
}
function toresize0(){
	timer = setTimeout(function(){
		resize0()
		toresize0()
	},0)	
}
toresize0()