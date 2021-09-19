/*

{
	personal独立方法并调用公共方法
	windowdata对象格式：{openid:'',isopen:0,links:''}
}

*/
window.p_data = {
	pageOpenVer:0,//每次打开页面+1
	loadSYSstarttime:'',
	loadSYSendtime:'',
	loadSYSloadtime:'',
	fullbox: '', //窗口是否最大化
	linkstatus:0,//链接状态计数
	stx: '', //窗口移动初始坐标
	sty: '', //窗口移动初始坐标
	zindex: 3, //打开的窗口的激活层级叠加
	isactive: '', //储存当前被激活的窗口
	hoverflag: 0, //图标排列重置flag
	icons: [], //模拟后台请求并处理好的图标数据(图标数组)
	allicons: { //菜单相关
		menuicons: [], //模拟后台请求并处理好的图标数据(开始菜单图标数组)		
		citieicons: [] //磁贴图标		
	},
	windowdata: [],//打开的窗口的数组	
}

/*
 * 
 * 
 * 
 * 
 * @-------------------------fns{
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 		方法:定义的所有操作数据和dom的方法
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * }
 */

/* //@特殊方法（没有dom操作） */
//阻止事件冒泡
var maopao = function(event) {
	//=========
	var ev = event || window.event || arguments.callee.caller.arguments[0]
	if(ev.cancelBubble) {
		ev.cancelBubble = true;
	}
	if(ev.stopPropagation) {
		ev.stopPropagation();
	}
}

//设备标识获取
var systemsign = function() {
	//=========
	var UA = navigator.userAgent
	if(UA.indexOf('Windows') != -1 || UA.indexOf('Macintosh') != -1) {
		return 'win'
	} else {
		return 'mob'
	}
}

//if IE is 11
var systemsignforIE = function() {
	//=========
	var UA = navigator.userAgent;
	if(UA.indexOf('MSIE') != -1&&navigator.userAgent.indexOf('11.0')==-1) {
		return 1;
	} else {
		return 0;
	}
}

//iframe模拟点击(附带网络状态检查)
var framexunhuan = function(th) {
	if($('iframe').length != 0) {
		if(document.activeElement) {
			var activeElement = document.activeElement;
			for(var i in th.iframes) {
				if(activeElement === th.iframes[i].element) { // user is in this Iframe  
					if(th.iframes[i].hasTracked == false) {
						th.iframes[i].cb.apply(window, []);
						th.iframes[i].hasTracked = true;
					}
				} else {
					th.iframes[i].hasTracked = false;
				}
			}
		}
	}
	var _this = th
	_this.interval()
}
var IframeOnClick = {
	resolution: 500,
	iframes: [],
	interval: null,
	Iframe: function() {
		this.element = arguments[0];
		this.cb = arguments[1];
		this.hasTracked = false;
	},
	track: function(element, cb) {
		this.iframes.push(new this.Iframe(element, cb));
		if(!this.interval) {
			var _this = this;
			this.interval = function(){setTimeout(function() { _this.checkClick(_this); }, this.resolution)};
			this.interval()
		}
	},
	checkClick: function(th) {
		framexunhuan(th)
	}
};

//返回窗口宽度
var getwinSize = function(){
	var i = window.innerWidth,
		dc = document.documentElement.clientWidth,
		bc = document.body.clientWidth,
		t = i?i:dc?dc:bc
	return t
}

/* //@重置桌面布局,桌面尺寸，连接状态） */
var sizefn = function() {
	//屏幕尺寸调整
	$('#wrap').width($(window).width())
	$('#wrap').height($(window).height() - (systemsign() == 'mob' ? 0 : 0)) //22
	$('.rightmessage').eq(0).height($(window).height() - 50 - (systemsign() == 'mob' ? 0 : 0))
	$('#rightmessagein').height($(window).height() - 50 - (systemsign() == 'mob' ? 0 : 0))
	$('#rightmessagecontscroll').height($(window).height() - 380 - (systemsign() == 'mob' ? 0 : 0))
	$('#wrapin2').height($(window).height() - 50 - (systemsign() == 'mob' ? 0 : 0))
	$('#bottomwrap').removeClass('pcss_vihid')
	if(systemsign() == 'mob') {
		$('body>i').eq(0).css('display', 'none')
	} else {
		$('body>i').eq(0).css('display', 'none') //block
	}
	//底部状态栏背景设置
	var tops = $(window).height() - $('#bottomwrap').height()
	$('#bottomwrap_bgin').height($(window).height())
	$('#bottomwrap_bgin').css('marginTop',-tops)
}

var linkstatus = function() {
	//检查网络状态
	p_data.linkstatus++;
	links2('get', location.href, function(res) {
		setTimeout(linkstatus, 10000)
	}, function(error) {
		if(error.status == 0) {
			$('.wifi_icon').eq(1).removeClass('pcss_none')
			$('.wifi_icon').eq(0).addClass('pcss_none')
		} else {
			$('.wifi_icon').eq(0).removeClass('pcss_none')
			$('.wifi_icon').eq(1).addClass('pcss_none')
		}
		if(p_data.linkstatus>=500){
			p_data.linkstatus = 0;
			console.clear();
		}		
		setTimeout(linkstatus, 10000)
	}, null, null)
}

//开始菜单右侧图标数量设置
var startmenuright = function() {
	//=========
	var str2 = function(obj) {
		//=========
		var substr = '';
		for(var i = 0; i < obj.icons.length; i++) {
			var c = obj.icons[i].a.split(',')[3].split(';')[2].split('\'')[0]
			if(sessionStorage.citieicons.indexOf && sessionStorage.citieicons.indexOf(obj.icons[i].a.split(',')[0].split('\'')[1] + '|') != -1) {
				substr+='<li class="pcss_floatl pcss_bg-col-66A8CC pcss_col-white pcss_posi-rela" style="'+c+'" onclick="clickicon(' + obj.icons[i].a + ',\''+ obj.icons[i].g + '\',' + obj.icons[i].ifresize + ',' + ((obj.iconUrl==''||obj.iconUrl==null||!obj.iconUrl)?'\'-\'':obj.iconUrl) + ',' + ((obj.color==''||obj.color==null||!obj.color)?'\'-\'':obj.color) + ',null)">'
				substr+='	<p>' 
				substr+='		<img alt="" width="30" height="30" class="pcss_bg-col-eee pcss_posi-rela"/>'
				substr+='	</p>'
				substr+='	<span class="pcss_posi-abso" style="left:2px;bottom:2px;z-index:1;font-weight:bold;width:86px;">' + obj.icons[i].g + '</span>'
				substr+='	<span class="pcss_posi-abso" style="left:3px;bottom:3px;color:#0e0e0e;font-weight:bold;width:86px;">' + obj.icons[i].g + '</span>'
				substr+='</li>'
			}
		}
		var dom = ''
		dom+='<p class="pcss_col-white">' + obj.title + '</p>'
		dom+='<ul>'
		dom+='	'+substr
		dom+='	<li class="pcss_clboth pcss_noheight"></li>'
		dom+='</ul>'
		return dom
	}
	for(var i = 0; i < p_data.allicons.citieicons.length; i++) {
		$('.menuright>div').eq(0).append(str2(p_data.allicons.citieicons[i]));
	}
}

var disetfnAndMlisetfn = function() { //统一处理图标显示的地方
	//=========
	var str1 = function() {
		return '<ul class="iconul pcss_floatl"></ul>'
	}
	var str = function(strs) {
		//===========
		var dom = ''
		dom+= '<li class="pcss_posi-rela" onclick="clickicon(' + strs.a + ',\''+ strs.g + '\',' + strs.ifresize + ',' + ((strs.iconUrl==''||strs.iconUrl==null||!strs.iconUrl)?'\'-\'':strs.iconUrl) + ',' + ((strs.color==''||strs.color==null||!strs.color)?'\'-\'':strs.color) + ',null)">'
		dom+='	<div>'
		dom+=strs.iconUrl?
		'		<img alt="" width="40" height="40" class="pcss_bg-col-eee" src='+strs.iconUrl+' />':
		'		<img alt="" width="40" height="40" class="pcss_bg-col-eee" />'
		dom+='	</div>'
		dom+='	<p class="pcss_posi-rela">'
		dom+='		'+strs.g
		dom+='		<span class="pcss_posi-abso pcss_col-white">' + strs.g + '</span>'
		dom+='	</p>'
		dom+='</li>'
		return dom
	};
	var str3 = function(obj) {
		//===========
		var dom = ''
		dom+='<li onclick="clickicon(' + obj.a + ',\''+ obj.g + '\',' + obj.ifresize + ',' + ((obj.iconUrl==''||obj.iconUrl==null||!obj.iconUrl)?'\'-\'':obj.iconUrl) + ',' + ((obj.color==''||obj.color==null||!obj.color)?'\'-\'':obj.color )+ ',null)">'
		dom+=obj.iconUrl?
		'	<img class="pcss_bg-col-white pcss_posi-rela" alt="" width="20" height="20" src='+obj.iconUrl+' />':
		'	<img class="pcss_bg-col-white pcss_posi-rela" alt="" width="20" height="20" />'
		dom+='	'+obj.g
		dom+='</li>'
		return dom
	}
	//
	var num = 0;
	$('#menuleftin').empty()
	sessionStorage.deskicon = ''//桌面id
	sessionStorage.citieicons = ''//开始菜单右侧id
	p_data.icons = []//桌面图标
	p_data.allicons.citieicons[0].icons = []//开始菜单右侧图标
	for(var i = 0; i < p_data.allicons.menuicons.length; i++) { //开始菜单左边
		if(sessionStorage.menuicons.indexOf && sessionStorage.menuicons.indexOf(p_data.allicons.menuicons[i].a.split(',')[0].split('\'')[1] + '|_/&/_|') != -1) {
			if(p_data.allicons.menuicons[i].ifdesk){
				sessionStorage.deskicon+=p_data.allicons.menuicons[i].a.split(',')[0].split('\'')[1]+'|_/&/_|'
				p_data.icons.push(p_data.allicons.menuicons[i])
			};
			if(p_data.allicons.menuicons[i].ifmetro){
				sessionStorage.citieicons+=p_data.allicons.menuicons[i].a.split(',')[0].split('\'')[1]+'|_/&/_|'
				p_data.allicons.citieicons[0].icons.push(p_data.allicons.menuicons[i])
			}
			sessionStorage.menuicons+=p_data.allicons.menuicons[i].a.split(',')[0].split('\'')[1]+'|_/&/_|'
			$('#menuleftin').append(str3(p_data.allicons.menuicons[i]));
		}
	}
	$('.menuright>div').empty()
	startmenuright()
	$('#wrapin').empty();
	$('#wrapin').append(str1());
	for(var i = 0; i < p_data.icons.length; i++) { //遍历桌面图标
		if(sessionStorage.deskicon.indexOf && sessionStorage.deskicon.indexOf(p_data.icons[i].a.split(',')[0].split('\'')[1] + '|') != -1) {
			if($(window).height()>300){
				if(103 * $('#wrapin ul').eq(num).children('li').length > ($(window).height() - 148)) {
					num++;
					$('#wrapin').append(str1());
				}
				if(103 * $('#wrapin ul').eq(num).children('li').length <= ($(window).height() - 148)) {
					$('#wrapin ul').eq(num).append(str(p_data.icons[i]))
				}				
			}else{
				if($('#wrapin ul').eq(num).children('li').length<2){
					$('#wrapin ul').eq(num).append(str(p_data.icons[i]))
				}else{
					num++;
					$('#wrapin').append(str1());
					$('#wrapin ul').eq(num).append(str(p_data.icons[i]))
				}
			}
		}
	}
	if($('#wrapin>ul>li').length != 0) { //遍历桌面图标
		for(var i = 0; i < p_data.icons.length; i++) {
			if(p_data.icons[i].ac == 1) {
				$('#wrapin>ul>li').eq(i).addClass('pcss_bg-col-D5ECFF-aa');
			} else {
				$('#wrapin>ul>li').eq(i).removeClass('pcss_bg-col-D5ECFF-aa');
			}
		}
	}
}
//wrapin hover ，防止无法点击图标
var wraphover = function() {
	$('#wrapin2').hover(function() {
		p_data.hoverflag = 1
	}, function() {
		p_data.hoverflag = 0
	})
	$('#menuleftin').hover(function() {
		p_data.hoverflag = 1
	}, function() {
		p_data.hoverflag = 0
	})
}

var menuchangeForMob = function() {
	if($('.changeimg').eq(0).attr('lang') == 0) {
		$('.changeimg').eq(0).attr('lang', '1')
		$('.menuleft').eq(0).removeClass('pcss_hFull')
		$('.menuleft').eq(0).addClass('pcss_noheight pcss_hid')
		$('.menuright').eq(0).addClass('pcss_hFull')
		$('.menuright').eq(0).removeClass('pcss_noheight pcss_hid')
	} else {
		$('.changeimg').eq(0).attr('lang', '0')
		$('.menuleft').eq(0).addClass('pcss_hFull')
		$('.menuleft').eq(0).removeClass('pcss_noheight pcss_hid')
		$('.menuright').eq(0).removeClass('pcss_hFull')
		$('.menuright').eq(0).addClass('pcss_noheight pcss_hid')
	}
}

var mobsetcolorandsize = function() {
	var fn = function(){
		$('.menuwrap').eq(0).css('width', '600px')
		$('.menuwrap>div').eq(1).css('width', 'auto')
		$('.changeimg').eq(0).addClass('pcss_none')
		$('.searchinputwrap>div').eq(0).removeClass('searchinputwrapmob')
		$('.menuleftdiv>ul').removeClass('searchinputwrapmob')
		$('.menuleft').eq(0).css('width', '200px')
		$('.menuright').eq(0).css('width', '350px')
		$('.menuright').eq(0).css('margin-left', '0px')
		//
		$('.changeimg').eq(0).attr('lang', '0')
		$('.menuleft').eq(0).addClass('pcss_hFull')
		$('.menuleft').eq(0).removeClass('pcss_noheight pcss_hid')
		$('.menuright').eq(0).addClass('pcss_hFull')
		$('.menuright').eq(0).removeClass('pcss_noheight pcss_hid')
		//colorreset
		$('#bottomwrap').css('background-color', '')
		$('.menuwrap').eq(0).css('background-color', '')
		$('.rightmessage').eq(0).css('background-color', '')
	}
	if(systemsign() == 'mob') {
		//手机端窗口尺寸重置
		$('.windowbox').height(($(window).height() - 56.5))
		$('.windowbox').width(($(window).width() - 2))
		$('.windowboxframe').height($(window).height() - 86.5)
		$('.windowboxframewrap').height($(window).height() - 86.5)
		//colorreset
		$('#bottomwrap').css('background-color', 'rgba(0,0,0,.45)')
		$('.menuwrap').eq(0).css('background-color', 'rgba(17,17,17,.45)')
		$('.rightmessage').eq(0).css('background-color', 'rgba(17,17,17,.45)')
		if($(window).width() < 600) {
			//sizereset
			$('.menuwrap').eq(0).css('width', '100%')
			$('.menuwrap>div').eq(1).css('width', '100%')
			$('.changeimg').eq(0).removeClass('pcss_none')
			$('.searchinputwrap>div').eq(0).addClass('searchinputwrapmob')
			$('.menuleftdiv>ul').addClass('searchinputwrapmob')
			$('.menuleft').eq(0).css('width', '100%')
			$('.menuright').eq(0).css('width', '100%')
			$('.menuright').eq(0).css('margin-left', '48px')
			if($('.changeimg').eq(0).attr('alt') == '0') {
				$('.changeimg').eq(0).attr('alt', '1')
				$('.changeimg').eq(0).click(menuchangeForMob)
			}
		} else {
			//sizereset
			fn()
		}
	}else{
		fn()
	}
}

var timer = function() {
	//=========
	var dates = new Date()
	var y = dates.getFullYear();
	var m = dates.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = dates.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = dates.getHours();
	var minute = dates.getMinutes();
	minute = minute < 10 ? ('0' + minute) : minute;
	var second = dates.getSeconds();
	$('#timer').html((h.toString().length < 2 ? '0' + h : h) + ':' +
		minute 
		//+ ':' +	(second.toString().length < 2 ? '0' + second : second)
	)
	setTimeout(timer, 1000)
}

var iconsposi_size_set = function() {
	$(document).scrollTop(0)
	$('body').height($(window).height())
	mobsetcolorandsize()
	disetfnAndMlisetfn()		
	sizefn()
	window.addEventListener('resize',function(){
		$('body').height($(window).height())
		mobsetcolorandsize()
		disetfnAndMlisetfn()		
		sizefn()		
	})
}

var mobheightfix = function(){
	window.addEventListener('resize',function(){
		if(systemsign() == 'mob'){
			p_data.hoverflag = 0
		}
	})
}

/* //@控制元素收起,移动端端颜色设置 */

var slideout = function() {
	$('#showstart').attr('lang', '0');
	$('.menuwrap').eq(0).addClass('menuwrap-noheight')
	$('.menuwrap').eq(0).removeClass('menuwrap-height')
	$('#showstart').css('background-color', '');
	//
	$('#showlatestmessage').attr('lang', '0');
	$('.rightmessage').eq(0).addClass('rightmessage-nowidth')
	$('.rightmessage').eq(0).removeClass('rightmessage-width')
	//
	$('#dianyuanshow').attr('lang', '0')
	$('#dianyuan').removeClass('dianyuan-height')
	$('#dianyuan').addClass('dianyuan-noheight')
}

/* //@窗口相关 */
//是否激活窗口(实在控制不了点击frame触发frame以外的事件时的替补方法)
var ifdeskactive = function(type) {
	if(type == 'active') {
		$('.framezhezhao').addClass('pcss_none')
	} else {
		$('.framezhezhao').removeClass('pcss_none')
	}
}

//窗口激活后改变颜色
var windowactivestyle = function(ids) {
	if(p_data.windowdata.length != 0) {
		for(var i = 0; i < p_data.windowdata.length; i++) {
			if(p_data.windowdata[i].openid == ids) {
				console.log(ids)
				$('#' + ids + '>div>p').addClass('pcss_bg-col-66A8CC')
				$('#' + ids + '>div>p').removeClass('pcss_bg-col-lightsteelblue')
				$('#' + ids).css('border', '1px solid #66A8CC')
				$('#' + ids).css('border-top', '0px solid #66A8CC')
			} else {
				$('.windowbox>div>p').eq(i).removeClass('pcss_bg-col-66A8CC')
				$('.windowbox>div>p').eq(i).addClass('pcss_bg-col-lightsteelblue')
				$('.windowbox').eq(i).css('border', '1px solid lightsteelblue')
				$('.windowbox').eq(i).css('border-top', '0px solid lightsteelblue')
			}
		}
	}
}

//窗口激活层级提高
var activewindow = function(ids) {
	noselecticon()
	if(ids == p_data.isactive) return; //判断是否相同窗口，不是同一个时就往下走，层级加一
	p_data.isactive = ids; //
	if(p_data.windowdata.length == 0) {
		p_data.zindex = 3
	} else {
		p_data.zindex++
	}
	$('#' + ids).stop().fadeIn(0, function() {
		$('#' + ids).css('z-index', p_data.zindex)
	})
	windowactivestyle(ids);
	slideout();
}

//元素追加

var theWindowbox = function(obj, sty, messageclick) { //窗口追加
	//=========
	var str = {
		str1: function(objs, stys) {
			var svgzuidahua = 
			'<svg style="width:20px;height:20px;top:14px;left:5px;" t="1566066271342" class="icon pcss_posi-rela" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3475" width="200" height="200"><path d="M845.88544 116.43904 178.11456 116.43904c-34.21184 0-62.0544 27.82208-62.0544 62.04416L116.06016 845.5168c0 34.2016 27.84256 62.04416 62.0544 62.04416l667.77088 0c34.21184 0 62.0544-27.84256 62.0544-62.04416L907.93984 178.4832C907.93984 144.26112 880.09728 116.43904 845.88544 116.43904zM803.81952 187.06432c14.6944 0 26.59328 11.90912 26.59328 26.60352 0 14.68416-11.89888 26.59328-26.59328 26.59328s-26.59328-11.90912-26.59328-26.59328C777.22624 198.97344 789.12512 187.06432 803.81952 187.06432zM708.52608 187.06432c14.6944 0 26.59328 11.90912 26.59328 26.60352 0 14.68416-11.89888 26.59328-26.59328 26.59328s-26.59328-11.90912-26.59328-26.59328C681.9328 198.97344 693.83168 187.06432 708.52608 187.06432zM837.02784 836.64896 186.97216 836.64896 186.97216 306.26816l650.04544 0L837.0176 836.64896zM728.96512 635.77088l-0.01024-158.37184 79.18592 79.18592L728.96512 635.77088zM295.04512 635.77088l-79.18592-79.18592 79.17568-79.17568L295.04512 635.77088zM512 821.37088l-79.17568-79.17568 158.37184-0.01024L512 821.37088zM591.18592 397.86496l-158.37184 0.01024L512 318.67904 591.18592 397.86496z" p-id="3476" fill="#ffffff"></path></svg>'
			var svghuifuchuangkou = 
			'<svg style="width:15px;height:15px;top:11.5px;left:5px;" t="1566066149761" class="icon pcss_posi-rela" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3317" width="200" height="200"><path d="M896 128l0 448c0 38.4-25.6 64-64 64l-64 0c-38.4 0-64 25.6-64 64l0 0c0 38.4 25.6 64 64 64l192 0c38.4 0 64-25.6 64-64L1024 0l0 0L320 0C281.6 0 256 25.6 256 64l0 256c0 38.4 25.6 64 64 64l0 0c38.4 0 64-25.6 64-64L384 192c0-38.4 25.6-64 64-64L896 128" p-id="3318" fill="#ffffff"></path><path d="M640 384l0 448c0 38.4-25.6 64-64 64L192 896c-38.4 0-64-25.6-64-64L128 448c0-38.4 25.6-64 64-64L640 384M768 256 64 256C25.6 256 0 281.6 0 320l0 640c0 38.4 25.6 64 64 64l640 0c38.4 0 64-25.6 64-64L768 256 768 256z" p-id="3319" fill="#ffffff"></path></svg>'
			var svgzuixiaohua = 
			'<svg style="width:25px;height:25px;top:18px" t="1565542079308" class="icon pcss_posi-rela" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2585" width="200" height="200"><path d="M512 1255.489906" p-id="2586" fill="#ffffff"></path><path d="M498.081951 943.76654" p-id="2587" fill="#ffffff"></path><path d="M772.963422 533.491105l-528.06716 0c-12.38297 0-22.514491-10.131521-22.514491-22.514491l0 0c0-12.38297 10.131521-22.514491 22.514491-22.514491l528.06716 0c12.38297 0 22.514491 10.131521 22.514491 22.514491l0 0C795.477913 523.359584 785.346392 533.491105 772.963422 533.491105z" p-id="2588" fill="#ffffff"></path></svg>'
			var svgclose = 
			'<svg style="width:25px;height:25px;" t="1565541661347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2005" width="200" height="200"><path d="M561.036 501.899l287.258-285.766c6.32-6.273 10.231-14.962 10.231-24.567 0-9.535-3.856-18.171-10.092-24.429-6.268-6.325-14.959-10.243-24.565-10.243-9.538 0-18.174 3.862-24.429 10.105l-287.329 285.801-284.828-285.702c-13.479-13.515-35.414-13.582-48.997-0.071-13.55 13.515-13.582 35.45-0.071 49.031l284.761 285.628-287.12 285.596c-6.32 6.273-10.23 14.962-10.23 24.567 0 9.535 3.856 18.171 10.092 24.429 6.267 6.314 14.951 10.223 24.549 10.223 0.007 0 0.013 0 0.021 0 8.835 0 17.67-3.362 24.429-10.081l287.191-285.663 287.431 288.297c6.248 6.293 14.901 10.189 24.465 10.189 0.023 0 0.048 0 0.072 0 0.002 0 0.007 0 0.015 0 9.545 0 18.187-3.866 24.444-10.118 13.55-13.515 13.582-35.414 0.071-48.996l-287.368-288.231z" fill="#ffffff" p-id="2006"></path></svg>'
			p_data.fullbox = { zd: svgzuidahua, hf: svghuifuchuangkou };
			var styles = systemsign() == 'mob' ? 'top:0;left:0;width:' + ($(window).width() - 2) + 'px;height:' + ($(window).height() - 65) + 'px;' : stys
			var stylesframe = systemsign() == 'mob' ? ($(window).height() - 85) : (Number((stys.split(';')[4]).split(':')[1].split('px')[0]) - 35)
			var dom = ''
			dom+='<div id="' + objs.openid + '" class="windowbox pcss_posi-abso pcss_vihid" style="' + styles +';">'
			dom+='	<div class="pcss_posi-rela pcss_hid">' 
			dom+='		<p class="pcss_bg-col-66A8CC pcss_col-white pcss_posi-rela" onmousedown="windowboxMovedown(\'' + objs.openid + '\',event)" onmouseup="windowboxMoveup(\'' + objs.openid + '\')">'
			dom+='			<span id="' + objs.openid + '_toindex" style="cursor:pointer;background-color:#668cc1;position: absolute;left: 0px;top: 0px;padding:6px 0 7px 9px" class="pcss_floatl">'
			dom+='				<img src="static/imgs/personal/home.png" width="20" height="20" style="position:relative;top:3px;"/>&nbsp;&nbsp;&nbsp;'
			dom+='			</span>'
			dom+='			<span class="pcss_floatl pcss_posi-rela" style="cursor:pointer;font-size:16px;top:2px;margin-left:30px" onclick="frameback(\'' + objs.openid + '_f\')">《&nbsp;&nbsp;&nbsp;</span>'
			dom+='			<span class="pcss_floatr" id="' + obj.openid + '_close" style="cursor:pointer;display:inline-block;margin-left:10px;margin-right:-10px;font-size:25px;margin-top:0px;height:30px;">' + svgclose + '</span>'
			dom+=			(systemsign() == 'mob' ? '' : '<span id="' + objs.openid + '_fullbox" onclick="ifzuidahua(\'' + obj.openid + '\')" lang="0" class="pcss_floatr" style="cursor:pointer;font-weight:bolder;font-size:25px;display:inline-block;margin-top:-17px;height:30px;">' + p_data.fullbox.zd + '</span>')
			dom+='			<span class="pcss_floatr"onclick="windowboxifshow(\'' + obj.openid + '\',\'1\')" style="cursor:pointer;font-weight:bolder;font-size:25px;display:inline-block;margin-top:-17px;height:30px;">' + svgzuixiaohua + '</span>'
			dom+='			<b class="pcss_posi-rela winb">'+objs.name+'</b>'
			dom+='		</p>'
			dom+='		<div class="framezhezhao pcss_none pcss_posi-abso" style="width:100%;height:100%;top:0;left:0;z-index:1;"></div>'
			dom+='		<div id="' + objs.openid + '_frameheight" style="height:' + stylesframe + 'px" class="windowboxframewrap pcss_overhid pcss_bg-col-white"><iframe class="windowboxframe pcss_posi-rela" id="' + objs.openid + '_f" name="' + objs.openid + '_f" src="" width="100%" height="100%" frameborder="0" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"/></div>'
			dom+='	</div>'
			dom+='	<div class="pcss_posi-abso" id="'+objs.openid+'_er" style="right:-3px;top:0;width:7px;height:100%;cursor:e-resize;z-index:2" onmousedown="windowboxresizedown(\'' + objs.openid + '\',event)" onmouseup="windowboxresizeup(\'' + objs + '\')"></div>'
			dom+='	<div class="pcss_posi-abso" id="'+objs.openid+'_sr" style="right:0px;bottom:-3px;height:7px;width:100%;cursor:s-resize;z-index:2" onmousedown="windowboxresize2down(\'' + objs.openid + '\',event)" onmouseup="windowboxresize2up(\'' + objs.openid + '\')"></div>'
			dom+='</div>'
			return dom
		}
	}
	$('#wrapin2').append(str.str1(obj, sty))
	$('#' + obj.openid+' p').css('background-color',obj.color)
	$('#' + obj.openid + '_close').click(function() {
		if(obj.links.indexOf('[[[askClose]]]')!=-1){
			var cons = confirm('确认离开？'+obj.links.split('[[[')[1].split('(')[1].split(')')[0])
			if(cons){
				windowboxclose(obj.openid)
			}
		}else{
			windowboxclose(obj.openid)
		}		
	})
	//特效start
	$('#' + obj.openid).css({ 'opacity': '0', 'transform': 'scale(0.8,0.8)', 'transition': '0ms' })
	setTimeout(function() {
		$('#' + obj.openid).css({ 'opacity': '1', 'transform': 'scale(1,1)', 'transition': '200ms' })
		$('#' + obj.openid).removeClass('pcss_vihid')
		setTimeout(function() {
			$('#' + obj.openid).css({ 'transition': '0ms' })
		}, 200)
	}, 200)
	//特效end		
	var links = ''
	var iflinkscanload = function() {
		$('#' + obj.openid + '_f').attr('src', links) //获取重置后的连接访问
		$('#' + obj.openid + '_toindex').click(function() {
			var ifaskclose = ''
			if(obj.links.indexOf('[[[askClose]]]')!=-1){
				ifaskclose = obj.links.split('[[[')[1].split('(')[1].split(')')[0]
			}
			framehome(obj.openid + '_f', links,ifaskclose)
		})
		var fn = function(e) { //模拟点击并收起弹出的容器
			//窗口加载完判断是否可拉大小
			obj.ifresize == 0?$('#'+obj.openid+'_er').hide():''
			obj.ifresize == 0?$('#'+obj.openid+'_sr').hide():''
			obj.ifresize == 0?($('#'+obj.openid+'_fullbox')?$('#'+obj.openid+'_fullbox').hide():''):''
			//
			var frameclickcallback = function() {
				slideout()
				for(var j = 0; j < p_data.windowdata.length; j++) {
					p_data.windowdata[j].indexmax = 'no'
				}
				for(var j = 0; j < p_data.windowdata.length; j++) {
					if(p_data.windowdata[j].openid == obj.openid) {
						p_data.windowdata[j].indexmax = 'indexmax'
						activewindow(p_data.windowdata[j].openid)
						p_data.windowdata[j].isopen = 1;
					}
				}				
			}
			IframeOnClick.track(document.getElementById(obj.openid + '_f'), frameclickcallback);
		}
		$('#' + obj.openid + '_f').load(fn)
	}
	var success = function() { //访问后台成功后的返回
		//=========
		/* //以下逻辑为可用时才执行，success */
		var fn = function(lin){			
			links = lin
			$.ajax({
				url:links,
				complete:function(res,resStatus){
					console.log(this)
					if(resStatus == 'success'){
						iflinkscanload()
					}else{
						if(res.status == 404){
							links = 'personal_errorpage.html'
						}else if(res.status == 403){
							links = 'personal_cantviewpage.html'
						}
						iflinkscanload()
					}
				}
			})
		}
		if(messageclick) {
			fn(messageclick)
		} else {
			p_data.pageOpenVer = new Date().getTime()
			var linkSplit = obj.links.split('[[[')[0]
			if(linkSplit.indexOf('?')!=-1){//带版本符，写入src的时候强制更新页面
				if(linkSplit.split('?')[1]&&linkSplit.split('?')[1].indexOf('#')!=-1&&linkSplit.split('?')[2]){
					fn(linkSplit+'&v='+p_data.pageOpenVer)
				}else if(linkSplit.split('?')[1]&&linkSplit.split('?')[1].indexOf('#')!=-1&&!linkSplit.split('?')[2]){
					fn(linkSplit+'?v='+p_data.pageOpenVer)
				}else if(linkSplit.split('?')[1]&&linkSplit.split('?')[1].indexOf('#')==-1){
					fn(linkSplit+'&v='+p_data.pageOpenVer)
				}else if(linkSplit.indexOf('#')!=-1&&linkSplit.split('#')[1]&&linkSplit.split('#')[1].indexOf('?')!=-1){
					fn(linkSplit+'&v='+p_data.pageOpenVer)
				}
			}else{
				fn(linkSplit+'?v='+p_data.pageOpenVer)
			}
		}
	};
	success()
}

var resetpositions = function(obj){
	setTimeout(function(){
		var ids = '#'+obj,
			heights = $(window).height()>800?800:$(window).height(),
			heights2 = {'height':heights-236};
		$(ids).css({'top':'60px','left':'60px','height':heights-200})
		$(ids+'_frameheight').css(heights2)
		$(ids+'_f').css(heights2)			
	},300)	
}

var bottomWrapIcon = function(obj) { //任务栏按钮追加
	//=========
	var str = {
		str1: function(objs) {
			var dom = ''
			dom+='<span class="pcss_bg-col-7f8fdc99 iconbox" id="' + objs.openid + '_b" onclick="windowboxifshow(\'' + objs.openid + '\',\'0\')">'
			dom+=(objs.iconUrl!=''&&objs.iconUrl!='-')?'<img src='+objs.iconUrl+' class="pcss_bg-col-white" alt="" />':'<img class="pcss_bg-col-white" alt="" />'
			dom+='</span>'
			return dom
		}
	}
	$('#isopenwrap>p').eq(0).append(str.str1(obj))
	$('#isopenwrap>p').eq(0).width(($('#isopenwrap>p>span').length * 62) + (2 * $('#isopenwrap>p>span').length))
}

var popdom = function(type,obj){
	if(type=='imgtext'){
		var dom = ''
		dom+='<div style="margin-bottom:20px;margin-left:-4.2em;margin-top:-1.4em;z-index:2;" class="pcss_posi-rela">'
		dom+='	<p style="width:390px;height:210px;background:url('+obj.imgs+') #333 no-repeat center center;background-size:auto 100%;">'
		dom+='	</p>'
		dom+='</div>'
		dom+='<div style="margin-left:-2.3em;min-height:40px">'+obj.texts+'</div>'
		return dom
	}else{
		return '<div">'+obj.texts+'</div>'
	}
}

//控制iframe返回上一级
var frameback = function(ids) {
	maopao()
	// document.getElementById(ids).contentWindow.history.go(-1)
	$('#'+ids)[0].contentWindow.history.go(-1)
	return false;
}

//控制iframe返回主页
var framehome = function(ids, links, ifaskclose) {
	maopao()
	var success = function() { //访问后台成功后的返回
		if(ifaskclose){
			var cons = confirm('确认返回主页？'+ifaskclose)
			if(cons){
				document.getElementById(ids).src =links
			}
		}else{
			document.getElementById(ids).src =links
		}
	};		
	success()
	return false;
}

//是否最小化和恢复
var windowboxifshow = function(obj, type) { //type0为可激活可缩小，1为只能缩小
	//=========
	var fn = function(m) {
		p_data.windowdata[m].isopen = 0;
		$('#' + p_data.windowdata[m].openid + "_f").css({ 'top': '-1900px' })
		$('#' + p_data.windowdata[m].openid).css({ 'margin-top': '-1900px' })
		$('#' + p_data.windowdata[m].openid).fadeIn(0, function() {
			$('#' + p_data.windowdata[m].openid).css({
				'opacity': '0',
				'transform': 'scale(0.8,0.8)',
				'transition': '0ms'
			})
			$('#' + p_data.windowdata[m].openid).addClass('pcss_noheight pcss_hid windowboxtofarstop')
		})
	}
	var fn2 = function(m) {
		p_data.windowdata[m].isopen = 1;		
		//特效start
		$('#' + p_data.windowdata[m].openid).removeClass('pcss_noheight pcss_hid windowboxtofarstop')
		$('#' + p_data.windowdata[m].openid + "_f").css({ 'top': '0' })
		$('#' + p_data.windowdata[m].openid).css({ 'margin-top': '0' })
		setTimeout(function(){
			$('#' + p_data.windowdata[m].openid).css({ 'opacity': '0', 'transform': 'scale(0.8,0.8)', 'transition': '0ms' })
			$('#' + p_data.windowdata[m].openid).stop().animate({}, 0, function() {
				$('#' + p_data.windowdata[m].openid).css({
					'opacity': '1',
					'transform': 'scale(1,1)',
					'transition': '200ms'
				})
			})
		},0)
		//特效end		
	}
	for(var i = 0; i < p_data.windowdata.length; i++) {
		if(p_data.windowdata[i].openid == obj) {
			if(p_data.windowdata[i].isopen == 1 && p_data.windowdata[i].indexmax == 'indexmax') {
				//当前被激活并打开时的操作
				for(var j = 0; j < p_data.windowdata.length; j++) {
					p_data.windowdata[j].indexmax = 'no'
				}
				//				$('#'+obj).addClass('pcss_hid pcss_noheight pcss_vihid')
				fn(i)
				//定义数组把全部元素放进去，包括id跟index，然后循环排序
				var arrs = []
				for(var j = 0; j < $('.windowbox').length; j++) {
					if(p_data.windowdata[j].isopen == 1) {
						arrs.push({ id: $('.windowbox').eq(j).attr('id'), num: Number($('.windowbox').eq(j).css('z-index')) })
					}
				}
				arrs.sort(function(obj1, obj2) {
					var val1 = obj1.num;
					var val2 = obj2.num;
					if(val1 < val2) {
						return -1;
					} else if(val1 > val2) {
						return 1;
					} else {
						return 0;
					}
				})
				//抽取最大的
				if(arrs[arrs.length - 1]) {
					activewindow(arrs[arrs.length - 1].id)
					for(var j = 0; j < p_data.windowdata.length; j++) {
						if(p_data.windowdata[j].openid == arrs[arrs.length - 1].id) {
							p_data.windowdata[j].indexmax = 'indexmax'
							p_data.windowdata[j].isopen = 1
						}
					}
				}
			} else if(p_data.windowdata[i].isopen == 1 && p_data.windowdata[i].indexmax == 'no') {
				//当前未激活并打开时的操作
				for(var j = 0; j < p_data.windowdata.length; j++) {
					p_data.windowdata[j].indexmax = 'no'
				}
				p_data.windowdata[i].indexmax = 'indexmax'
				activewindow(p_data.windowdata[i].openid)
				$('#' + p_data.windowdata[i].openid).removeClass('pcss_noheight pcss_vihid')
			} else {
				//当前未打开的窗口的操作
				for(var j = 0; j < p_data.windowdata.length; j++) {
					p_data.windowdata[j].indexmax = 'no'
				}
				p_data.windowdata[i].indexmax = 'indexmax'
				activewindow(p_data.windowdata[i].openid)
				fn2(i)
				if(systemsign() == 'mob') {
					$('.windowbox').css({ 'top': '0', 'left': '0' })
				}
			}
		}
	}
	//模拟点击并收起弹出的容器
	slideout()
}

//关闭窗口

var windowboxclose = function(obj) {
	//=========
	var win = 0;
	$('#' + obj).stop().animate({}, 0, function() {
		$('#' + obj).css({ 'opacity': '0', 'transform': 'scale(0.8,0.8)', 'transition': '200ms' })
	});
	$('#' + obj + '_b').remove();
	setTimeout(function() {
		$('#' + obj).remove()
		for(var i = 0; i < p_data.windowdata.length; i++) {
			if(p_data.windowdata[i].openid == obj) {
				win = i
				p_data.windowdata.splice(i, 1);
			}
		}
		//定义数组把全部元素放进去，包括id跟index，然后循环排序
		var arrs = []
		if(p_data.windowdata.length != 0) {
			for(var j = 0; j < $('.windowbox').length; j++) {
				if(p_data.windowdata[j].isopen == 1) {
					arrs.push({ id: $('.windowbox').eq(j).attr('id'), num: Number($('.windowbox').eq(j).css('z-index')) })
				}
			}
			arrs.sort(function(obj1, obj2) {
				var val1 = obj1.num;
				var val2 = obj2.num;
				if(val1 < val2) {
					return -1;
				} else if(val1 > val2) {
					return 1;
				} else {
					return 0;
				}
			})
			//抽取最大的
			if(arrs[arrs.length - 1]) {
				activewindow(arrs[arrs.length - 1].id)
				for(var j = 0; j < p_data.windowdata.length; j++) {
					if(p_data.windowdata[j].openid == arrs[arrs.length - 1].id) {
						p_data.windowdata[j].indexmax = 'indexmax'
						p_data.windowdata[j].isopen = 1
					}
				}
			}
			if($('.windowbox').length == 1) {
				$('.windowbox').eq(0).css('z-index', '3')
				p_data.zindex = 3
			}
		}
	}, 200)
}

//窗口是否最大化
var ifzuidahua = function(obj) {
	if($('#' + obj + '_fullbox').attr('lang') == 0) {
		$('#' + obj + '_fullbox').attr('lang', 1)
		$('#' + obj).addClass('windowboxzuidahua windowboxbottomborder')
		//36
		$('#' + obj + '>div').eq(0).height('100%')
		$('#' + obj + '_f').height($(window).height() - 85)
		$('#' + obj + '_frameheight').height($(window).height() - 85)
		$('#' + obj + '_fullbox').html(p_data.fullbox.hf)
		window.addEventListener('resize',function() { //最大化窗口后要用到的自适应
			if($('#' + obj + '_fullbox').attr('lang') == 1){
				$('#' + obj + '>div').eq(0).height('100%')
				$('#' + obj + '_f').height($(window).height() - 85)
				$('#' + obj + '_frameheight').height($(window).height() - 85)				
			}
		})
	} else {
		$('#' + obj + '_fullbox').attr('lang', 0)
		$('#' + obj).removeClass('windowboxzuidahua windowboxbottomborder')
		//36
		$('#' + obj + '>div').eq(0).height('100%')
		$('#' + obj + '_f').height('100%')
		$('#' + obj + '_frameheight').height('100%')
		$('#' + obj + '_frameheight').height($('#' + obj + '_frameheight').height()-35)
		$('#' + obj + '_fullbox').html(p_data.fullbox.zd)
	}
}

//窗口位置及大小调整

var windowboxMovedown = function(obj, event) { //拖动窗口相关函数
	function actives(){
		$('.framezhezhao').css('top', '52px')
		ifdeskactive('noactive') //模拟窗口未激活
		for(var j = 0; j < p_data.windowdata.length; j++) {
			p_data.windowdata[j].indexmax = 'no'
			if(p_data.windowdata[j].openid == obj) {
				p_data.windowdata[j].indexmax = 'indexmax'
			}
		}
		activewindow(obj)
		windowactivestyle(obj);
	}
	//
	$('#' + obj).css({ 'transition': '0ms' }) //清除窗口恢复时的动画时间
	if(systemsign() == 'mob') return;
	if($('#' + obj + '_fullbox').attr('lang') == 1){
		actives()
		return;
	} 
	actives()
	var leftnum = Number($('#' + obj).css('left').split('px')[0])
	var topnum = Number($('#' + obj).css('top').split('px')[0])
	var bigfn = function(event) {
		var ev = event || window.event
		var scrollX0 = document.body.scrollLeft || document.documentElement.scrollLeft; //---
		var scrollY0 = document.body.scrollTop || document.documentElement.scrollTop; //---
		p_data.stx = ev.pageX || (ev.clientX + scrollX0)
		p_data.sty = ev.pageY || (ev.clientY + scrollY0)
		var fn = function(event) {
			ev = event || window.event
			var templeft = { m: leftnum }
			var temptop = { m: topnum }
			$('#' + obj).css({
				'left': templeft.m + (
					(ev.pageX || (ev.clientX + scrollX0)) - p_data.stx),
				'top': temptop.m + (
					(ev.pageY || (ev.clientY + scrollY0)) - p_data.sty)
			})
		}
		$('#wrap').mousemove(function(event) { fn(event) })
	};
	bigfn(event)
}

var windowboxMoveup = function(obj) { //拖动窗口相关函数
	$('#wrap').unbind('mousemove')
	$('.framezhezhao').css('top', '0')
	ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	for(var i = 0; i < p_data.windowdata.length; i++) {
		if(p_data.windowdata[i].openid == obj) {
			p_data.windowdata[i].styles = 'left:' + $('#' + obj).css('left') + ';top:' + $('#' + obj).css('top')
		}
	}
}

var windowboxresizedown = function(obj, event) { //向东拉伸窗口相关函数
	$('#' + obj).css({ 'transition': '0ms' }) //清除窗口恢复时的动画时间
	if(systemsign() == 'mob') return;
	if($('#' + obj + '_fullbox').attr('lang') == 1) return;
	ifdeskactive('noactive') //模拟窗口未激活
	for(var j = 0; j < p_data.windowdata.length; j++) {
		p_data.windowdata[j].indexmax = 'no'
		if(p_data.windowdata[j].openid == obj) {
			p_data.windowdata[j].indexmax = 'indexmax'
		}
	}
	activewindow(obj)
	windowactivestyle(obj);
	var widthnum = $('#' + obj).width()
	wrapmosueup()
	var bigfn = function(event) {
		var ev = event || window.event || arguments.callee.caller.arguments[0]
		var scrollX0 = document.body.scrollLeft || document.documentElement.scrollLeft; //---
		p_data.stx = ev.pageX || (ev.clientX + scrollX0)
		var fn = function(event) {
			ev = event || window.event || arguments.callee.caller.arguments[0]
			var templeft = { m: widthnum }
			$('#' + obj).css({
				'width': templeft.m + (
					(ev.pageX || (ev.clientX + scrollX0)) - p_data.stx)
			})
		}
		$('#wrap').mousemove(fn)
	};
	bigfn(event)
}

var windowboxresizeup = function(obj) { //向东拉伸窗口相关函数
	ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	$('#wrap').unbind('mousemove')
	//	$('#wrap').unbind('touchmove')
	for(var i = 0; i < p_data.windowdata.length; i++) {
		if(p_data.windowdata[i].openid == obj) {
			p_data.windowdata[i].stylesw = 'width:' + $('#' + obj).width() + 'px'
		}
	}
}

var windowboxresize2down = function(obj, event) { //向南拉伸窗口相关函数
	$('#' + obj).css({ 'transition': '0ms' }) //清除窗口恢复时的动画时间
	if(systemsign() == 'mob') return;
	if($('#' + obj + '_fullbox').attr('lang') == 1) return;
	ifdeskactive('noactive') //模拟窗口未激活
	for(var j = 0; j < p_data.windowdata.length; j++) {
		p_data.windowdata[j].indexmax = 'no'
		if(p_data.windowdata[j].openid == obj) {
			p_data.windowdata[j].indexmax = 'indexmax'
		}
	}
	activewindow(obj)
	windowactivestyle(obj);
	var heightnum = $('#' + obj).height()
	wrapmosueup()
	var bigfn = function(event) {
		var ev = event || window.event || arguments.callee.caller.arguments[0]
		var scrollY0 = document.body.scrollTop || document.documentElement.scrollTop; //---
		p_data.sty = ev.pageY || (ev.clientY + scrollY0)
		var fn = function(event) {
			ev = event || window.event || arguments.callee.caller.arguments[0]
			var templeft = { m: heightnum }
			$('#' + obj).css({
				'height': templeft.m + (
					(ev.pageY || ev.clientY + scrollY0) - p_data.sty)
			})
			$('#' + obj + '_frameheight').css({
				'height': (templeft.m + (
					(ev.pageY || ev.clientY + scrollY0) - p_data.sty)) - 35
			})
			$('#' + obj + '_f').css({
				'height': (templeft.m + (
					(ev.pageY || ev.clientY + scrollY0) - p_data.sty)) - 35
			})
		}
		$('#wrap').mousemove(fn)
	};
	bigfn(event)
}

var windowboxresize2up = function(obj) { //向南拉伸窗口相关函数
	ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	$('#wrap').unbind('mousemove')
	for(var i = 0; i < p_data.windowdata.length; i++) {
		if(p_data.windowdata[i].openid == obj) {
			p_data.windowdata[i].stylesh = 'height:' + $('#' + obj).height() + 'px'
		}
	}
}

var wrapmosueup = function() {
	$('#wrap').mouseup(function() { $('#wrap').unbind('mousemove') })
}

//点击framezhezhao让遮罩本身消失
var framezhezhaocol = function() {
	$('.framezhezhao').on('click', function() {
		$('.framezhezhao').addClass('pcss_none') //模拟点击并激活窗口或创建窗口收起弹出元素
	})
}

/* //@状态栏相关 */

//状态栏拖动
var bottombarclickmovescrolldown = function(event) {
	//=========
	var m = -$('#isopenwrap').scrollLeft()
	console.log(m)
	var bigfn = function(event) {
		var ev = event || window.event
		var scrollX0 = document.body.scrollLeft || document.documentElement.scrollLeft; //---
		p_data.stx = ev.pageX || (ev.clientX + scrollX0)
		var fn = function(event) {
			ev = event || window.event
			var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft; //---
			$('#isopenwrap').scrollLeft(-(m + ((ev.pageX || (ev.clientX + scrollX)) - p_data.stx)))
		}
		$(document).mousemove(function(event) { fn(event) })
	};
	bigfn(event)
}
var bottombarclickmovescrollup = function() {
	$(document).unbind('mousemove')
}
var bottomscrollmoveset = function() {
	$('#isopenwrap').mousedown(function() {
		bottombarclickmovescrolldown()
	})
	$(document).mouseup(function() {
		bottombarclickmovescrollup()
	})
}

//判断是否全部已收起
var ifbottomwrapnotactive = function() {
	if($('#showstart').attr('lang') == 0 &&
		$('#showlatestmessage').attr('lang') == 0) {
		ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	}
}

//开始菜单的弹出
var ifshowstart = function() {
	//=========
	var fn = function() {
		//		ifdeskactive('noactive')//模拟窗口未激活
		if($('#showstart').attr('lang') == '0') {
			$('#showstart').attr('lang', '1');
			$('.menuwrap').eq(0).addClass('menuwrap-height')
			$('.menuwrap').eq(0).removeClass('menuwrap-noheight')
			$('#showstart').css('background-color', '#66A8CC');
		} else {
			$('#showstart').attr('lang', '0');
			$('.menuwrap').eq(0).addClass('menuwrap-noheight')
			$('.menuwrap').eq(0).removeClass('menuwrap-height')
			$('#showstart').css('background-color', '');
			//
			$('#dianyuanshow').attr('lang', '0')
			$('#dianyuan').removeClass('dianyuan-height')
			$('#dianyuan').addClass('dianyuan-noheight')
		}
		ifbottomwrapnotactive()
	}
	$('.menuwrap').eq(0).click(maopao)
	$('#showstart').click(fn)
}

//右侧消息的弹出

var ifshowrightmessage = function() {
	new Schedule({ //启动日历
		el: '#schedule-box',
		//date: '2018-9-20',
		clickCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'\'-\''+m+'\'-\''+d	
		},
		nextMonthCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'\'-\''+m+'\'-\''+d	
		},
		nextYeayCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'\'-\''+m+'\'-\''+d	
		},
		prevMonthCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'\'-\''+m+'\'-\''+d	
		},
		prevYearCb: function(y, m, d) {
			//			document.querySelector('#h3Ele').innerHTML = '日期：'+y+'\'-\''+m+'\'-\''+d	
		}
	});
	var fn = function() {
		//		ifdeskactive('noactive')//模拟窗口未激活
		if($('#showlatestmessage').attr('lang') == '0') {
			$('#showlatestmessage').attr('lang', '1');
			$('.spop-container .spop-close').click()//打开时关闭弹出提示框
			$('.rightmessage').eq(0).addClass('rightmessage-width')
			$('.rightmessage').eq(0).removeClass('rightmessage-nowidth')
		} else {
			$('#showlatestmessage').attr('lang', '0');
			$('.rightmessage').eq(0).addClass('rightmessage-nowidth')
			$('.rightmessage').eq(0).removeClass('rightmessage-width')
		}
		ifbottomwrapnotactive()
		//模拟追加消息通知(实际使用请删除)
		rightmessageitemappend()
	}
	$('.rightmessage').eq(0).click(maopao)
	$('#showlatestmessage').click(fn)
}

//右侧消息通知的操作
var rightmessageitemappend = function() {
	//=========
	var fn = function() { //传入ID,传入是否有图片的flag,传入地址，改变
		//========
		var f = 1 //模拟有图片
		var dom = ''
		dom+='<div id="baidu_message" class="pcss_bg-col-66A8CC pcss_none" onclick="removemessage(\'baidu\',\'//baidu.com?id=233\')"><div>'
		dom+=	(f == 1 ? '<div style="height:150px;background-color:#ccc;"></div>' : '')
		dom+='	<p>title</p>'
		dom+='	<p class="rightmessage-p pcss_hid pcss_posi-rela">content</p></div>'
		dom+='</div>'
		return dom
	}
	setTimeout(function() {
		//=========
		if($('#rightmessagecontscroll').attr('lang') == 0) {
			$('#rightmessagecontscroll').attr('lang', 1)
			$('#rightmessagecontscroll').append(fn())
			$('#rightmessagecontscroll>div').eq($('#rightmessagecontscroll>div').length - 1).slideDown(300)
		}
	}, 1500)
}

var removemessage = function(id, links) {
	$('#' + id + '_message').slideUp(300)
	setTimeout(function() {
		//模拟打开应用
		for(var i = 0; i < p_data.allicons.menuicons.length; i++) {
			if(p_data.allicons.menuicons[i].a.split('\'')[1] == id) {
				clickicon(p_data.allicons.menuicons[i].a.split(',')[0].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[1].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[2].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[3].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[4].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[5].split('\'')[1],
					p_data.allicons.menuicons[i].a.split(',')[6].split('\'')[1],
					p_data.allicons.menuicons[i].g,
					p_data.allicons.menuicons[i].ifresize,
					(p_data.allicons.menuicons[i].iconUrl==''||p_data.allicons.menuicons[i].iconUrl==null||!p_data.allicons.menuicons[i].iconUrl)?'-':p_data.allicons.menuicons[i].iconUrl, (p_data.allicons.menuicons[i].color==''||p_data.allicons.menuicons[i].color==null||!p_data.allicons.menuicons[i].color)?'-':p_data.allicons.menuicons[i].color,
					 links)
			}
		}
		$('#' + id + '_message').remove()
	}, 300)
}

//状态栏点击取消图标选择
var noselecticonwithbottom = function() {
	$('#bottomwrap').click(noselecticon)
}

/* //@点击桌面收起开始菜单以及右侧消息 */

var closebottomshowingwrap = function() {
	$('#wrap').click(function() {
		noselecticon();
		slideout();
		ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	})
}

/* 图标操作相关 */
//打开窗口或激活窗口
//{拿取iconsession里面的内容，通过事件处理，把该数组字符对象a的内容以及其他对象进行处理并传进来到这里使用}
var clickicon = function(openid, isopen, links, styles, stylew, styleh, indexmax, name,ifresize,iconUrl,color ,messageclick) {
	slideout()
	ifdeskactive('active') //模拟点击并激活窗口或创建窗口收起弹出元素
	var params = {
		openid: openid,
		isopen: isopen,
		links: links,
		styles: styles,
		stylew: stylew,
		styleh: styleh,
		indexmax: indexmax,
		name: name,
		ifresize:ifresize,
		iconUrl:(iconUrl==''||iconUrl==null||!iconUrl)?'-':iconUrl,
		color:(color==''||color==null||!color)?'-':color
	}
	var fn = function() {
		//=========
		var fn20 = function(m) {
			$('#' + p_data.windowdata[m].openid).removeClass('pcss_vihid windowboxtofarstop')
			$('#' + p_data.windowdata[m].openid + "_f").css({ 'top': '0' })
			$('#' + p_data.windowdata[m].openid).css({ 'margin-top': '0' })
			setTimeout(function() {
				$('#' + p_data.windowdata[m].openid).stop().animate({}, 0, function() {
					$('#' + p_data.windowdata[m].openid).css({
						'opacity': '1',
						'transform': 'scale(1,1)',
						'transition': '200ms'
					})
				})
			}, 0)
		}
		for(var i = 0; i < p_data.windowdata.length; i++) {
			p_data.windowdata[i].indexmax = 'no'
		}
		for(var i = 0; i < p_data.windowdata.length; i++) {
			if(p_data.windowdata[i].openid == params.openid) {
				p_data.windowdata[i].isopen = 1
				p_data.windowdata[i].indexmax = 'indexmax'
				$('#' + p_data.windowdata[i].openid).removeClass('pcss_noheight')
				$('#' + p_data.windowdata[i].openid).css('transition', '0ms')
				fn20(i)
				activewindow(p_data.windowdata[i].openid)
				return '1';
			}
		}
	}
	var fn2 = function() {
		for(var i = 0; i < p_data.windowdata.length; i++) {
			p_data.windowdata[i].indexmax = 'no'
		}
		for(var i = 0; i < p_data.windowdata.length; i++) {
			if(p_data.windowdata[i].openid == params.openid) {
				$('#' + p_data.windowdata[i].openid + "_f").css({ 'top': '0' })
				$('#' + p_data.windowdata[i].openid).css({ 'margin-top': '0' })
				p_data.windowdata[i].isopen = 1
				p_data.windowdata[i].indexmax = 'indexmax'
				$('#' + p_data.windowdata[i].openid).removeClass('pcss_noheight')
				activewindow(p_data.windowdata[i].openid)
			}
		}
	}
	if(p_data.windowdata.length != 0) { //检测有没有窗口已打开，有就提高层级
		if(fn() == '1') {
			return;
		}
		p_data.windowdata.push(params)
		theWindowbox(params,
			params.styles + ';' +
			params.stylew + ';' +
			params.styleh, (messageclick ? messageclick : null))
		setTimeout(function() {
			bottomWrapIcon(params)
		}, 200)
		activewindow(params.openid)
	} else { //没有打开就新开一个窗口
		p_data.windowdata.push(params)
		theWindowbox(params,
			params.styles + ';' +
			params.stylew + ';' +
			params.styleh, (messageclick ? messageclick : null))
		setTimeout(function() {
			bottomWrapIcon(params)
		}, 200)
		fn2()
	}
}

//打开任务管理器
var taskmanagers = function() {
	$('#taskmanager').css('cursor', 'pointer')
	$('#taskmanager').click(function() {
		clickicon('MVC_taskmanager', '1', 'personal_taskmanager.html?v='+(new Date().getTime()), 'left:60px;top:90px;background-color:\'\'', 'width:700px', 'height:600px', 'indexmax', '任务管理器',1,'-','-',null)
		if($('#MVC_taskmanager_fullbox').attr('lang')==1){
			$('#MVC_taskmanager_fullbox').hide()			
		}else{
			$('#MVC_taskmanager_fullbox').click();
			$('#MVC_taskmanager_fullbox').hide()			
		}
	})
}

//选中图标相关
var selecticon = function(ids) {
	maopao()
	for(var i = 0; i < p_data.icons.length; i++) {
		if(p_data.icons[i].a.split(',')[0].split('\'')[1] == ids) {
			console.log(0)
			p_data.icons[i].ac = 1
			$('#wrapin>ul>li').eq(i).addClass('pcss_bg-col-D5ECFF-aa');
		} else {
			p_data.icons[i].ac = 0
			$('#wrapin>ul>li').eq(i).removeClass('pcss_bg-col-D5ECFF-aa');
		}
	}
}

//不选中图标相关
var noselecticon = function() {
	for(var i = 0; i < p_data.icons.length; i++) {
		p_data.icons[i].ac = 0
		$('#wrapin>ul>li').eq(i).removeClass('pcss_bg-col-D5ECFF-aa');
	}
}

/* 重新启动 */

var dianyuan = function() {
	//=========
	var fn = function() {
		if($('#dianyuanshow').attr('lang') == '0') {
			$('#dianyuanshow').attr('lang', '1')
			$('#dianyuan').addClass('dianyuan-height')
			$('#dianyuan').removeClass('dianyuan-noheight')
		} else {
			$('#dianyuanshow').attr('lang', '0')
			$('#dianyuan').removeClass('dianyuan-height')
			$('#dianyuan').addClass('dianyuan-noheight')
		}
	}
	var fn2 = function() {
		$('#showstart').click()
		$('#showlatestmessage').attr('lang', '0');
		$('.rightmessage').eq(0).addClass('rightmessage-nowidth')
		$('.rightmessage').eq(0).removeClass('rightmessage-width')
		//--
		$('#showstart').attr('lang', '0');
		$('.menuwrap').eq(0).addClass('menuwrap-noheight')
		$('.menuwrap').eq(0).removeClass('menuwrap-height')
		$('#showstart').css('background-color', '');
		//
		$('#dianyuanshow').attr('lang', '0')
		$('#dianyuan').removeClass('dianyuan-height')
		$('#dianyuan').addClass('dianyuan-noheight')
		$('.windowbox').remove();
		$('.iconbox').remove();
		//
		p_data.windowdata = []
		p_data.zindex = 3
		$('#zhezhao').fadeIn()
		setTimeout(function() {
			$('#zhezhao').fadeOut()
		}, 5000)
	}
	$('#dianyuanshow').click(fn)
	$('#reloadwin').click(fn2)
}

/* 用到的第三方插件spop和live2d */

//live2d

var live2d = function(){
	if(systemsign()=='mob'){
		document.getElementById('live2DBox').style.visibility = 'hidden';document.getElementById('iflive2dshow').style.visibility = 'hidden';document.getElementById('live2DBoxclose').style.display = 'none';		
		return;
	}
	initModel("Ext/live2d/assets/waifu-tips.json")
	if(sessionStorage.live2dshow == 0){
		document.getElementById('live2DBox').style.visibility = 'hidden';document.getElementById('iflive2dshow').style.visibility = 'visible';document.getElementById('live2DBoxclose').style.display = 'none';
	}
	window.addEventListener('resize',function(){//控制小图标元素完全的出现隐藏
		if($(window).width()<769){
			document.getElementById('iflive2dshow').style.display = 'none'
		}else{
			document.getElementById('iflive2dshow').style.display = 'block'
		}		
	})
	return;
	$('#live2DBox').mousedown(function(event){
		var leftnum = Number($('#live2DBox').css('right').split('px')[0])
		var topnum = Number($('#live2DBox').css('bottom').split('px')[0])
		var bigfn = function(event) {
			var ev = event || window.event
			var scrollX0 = document.body.scrollLeft || document.documentElement.scrollLeft; //---
			var scrollY0 = document.body.scrollTop || document.documentElement.scrollTop; //---
			p_data.stx = ev.pageX || (ev.clientX + scrollX0)
			p_data.sty = ev.pageY || (ev.clientY + scrollY0)
			var fn = function(event) {
				ev = event || window.event
				var templeft = { m: leftnum }
				var temptop = { m: topnum }
				var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft; //---
				var scrollY = document.body.scrollTop || document.documentElement.scrollTop; //---
				$('#live2DBox').css({
					'right': templeft.m - (
						(ev.pageX || (ev.clientX + scrollX)) - p_data.stx),
					'bottom': temptop.m - (
						(ev.pageY || (ev.clientX + scrollY)) - p_data.sty)
				})
			}
			$('#wrap').mousemove(function(event) { fn(event) })
		};
		bigfn(event)		
	})
	$('#live2DBox').mouseup(function(){
		$('#wrap').unbind('mousemove')
	})
}

//spop

var deskmessageshow = function(){//模拟桌面弹出消息
	setTimeout(function(){
		spop({
			template:popdom('imgtext',{
				texts:'已成功进入了系统',
				imgs:'static/imgs/B89AADA7A993ABC477E14AE0896236B2.png'
			}),
			style:'success',
			position:'top-right',
			autoclose:11500,
		})
	},6500)
	setTimeout(function(){
		spop({
			template:popdom('text',{
				texts:'系统启动使用了 '+(p_data.loadSYSloadtime/60).toFixed(0)+'s',
				imgs:''
			}),
			style:'info',
			position:'top-right',
			autoclose:12000,
		})
	},6000)
};

/* 系统加载相关 */

//启动时判断ie版本

var ifisIE = function(){
	document.oncontextmenu=function(){return false};
	if(systemsignforIE() == 1) {
		$('#wrap').remove()
		$('#bottomwrap').remove()
		$('.zhezhaoDeg').eq(0).remove()
		$('#zhezhaotext>span').html('初始化系统失败')
		return 1;
	}	
}

var deskLoad = function() {
	setTimeout(function() {
		$('#zhezhao').fadeOut()
		console.log('')
	}, 2000)
	if(systemsign()=='mob'){return};
	deskmessageshow()
}

//背景frame调用的获取截图方法,直接修改壁纸也可以调用写入
var getimg = function(data){
	document.getElementById('bottomwrap_bgin_img').style.backgroundImage = 'url('+data+')'
}

var loadwin = function() {
	ifisIE()==1?'':(function(){
		sessionStorage.live2dshow = 0
		if(navigator.userAgent.indexOf('UCBrowser') > -1){
			$('#zhezhaotext>span').html('初始化系统error，背景视频和插件无法加载')
		}else{
			$('#zhezhaotext>span').html('初始化系统OK，正在登入...')
		}
		live2d()
		linkstatus()
		mobheightfix()
		iconsposi_size_set()
		wraphover() //
		ifshowstart()
		closebottomshowingwrap()
		noselecticonwithbottom()
		framezhezhaocol()
		ifshowrightmessage()
		dianyuan()
		taskmanagers()
		bottomscrollmoveset()
		timer()
		deskLoad()
	})()
};
/*
 * 一开始系统进来之后，用户群需要操作的部分，操作应用修改，核心点也在这里
 * background-color是磁贴背景色，color对象是窗口顶部的自定义颜色
 * 
 *
 * 
 * 
 * 
 * 
 * @-------------------------总控台{
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 		总控台:系统启动的总开关
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * }
 */
