var _this = window;
//
/* 
*
* 
* data *****
* 
* 
*/
var swiper = '',
	swiper2 = '',
	mirrorTop = $('#shop').height(),//fix顶部距离拦截容器
	imgsrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNTU1OiMzMzMvdGV4dDpUaGlyZCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE3MjgzZDdlY2Q0IHRleHQgeyBmaWxsOiMzMzM7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NDVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTcyODNkN2VjZDQiPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTU1Ii8+PGc+PHRleHQgeD0iMjk4LjMxMjUiIHk9IjI3MC4xIj5UaGlyZCBzbGlkZTwvdGV4dD48L2c+PC9nPjwvc3ZnPg==',
	clock = '',
	itemloadNum = 0,//模拟滚到底部后追加的请求的次数
	lazyloaditemflag = 1,
	onlyJsFlytocarFlag = 0
	//video module
	Fullscreenflag = 0,
	videolang = {
		"Play": "播放",
		"Pause": "暂停",
		"Current Time": "当前时间",
		"Duration": "时长",
		"Remaining Time": "剩余时间",
		"Stream Type": "媒体流类型",
		"LIVE": "直播",
		"Loaded": "加载完毕",
		"Progress": "进度",
		"Fullscreen": "全屏",
		"Non-Fullscreen": "退出全屏",
		"Mute": "静音",
		"Unmute": "取消静音",
		"Playback Rate": "播放速度",
		"Subtitles": "字幕",
		"subtitles off": "关闭字幕",
		"Captions": "内嵌字幕",
		"captions off": "关闭内嵌字幕",
		"Chapters": "节目段落",
		"Close Modal Dialog": "关闭弹窗",
		"Descriptions": "描述",
		"descriptions off": "关闭描述",
		"Audio Track": "音轨",
		"You aborted the media playback": "视频播放被终止",
		"A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
		"The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
		"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
		"No compatible source was found for this media.": "无法找到此视频兼容的源。",
		"The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
		"Play Video": "播放视频",
		"Close": "关闭",
		"Modal Window": "弹窗",
		"This is a modal window": "这是一个弹窗",
		"This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
		", opens captions settings dialog": ", 开启标题设置弹窗",
		", opens subtitles settings dialog": ", 开启字幕设置弹窗",
		", opens descriptions settings dialog": ", 开启描述设置弹窗",
		", selected": ", 选择",
		"captions settings": "字幕设定",
		"Audio Player": "音频播放器",
		"Video Player": "视频播放器",
		"Replay": "重播",
		"Progress Bar": "进度小节",
		"Volume Level": "音量",
		"subtitles settings": "字幕设定",
		"descriptions settings": "描述设定",
		"Text": "文字",
		"White": "白",
		"Black": "黑",
		"Red": "红",
		"Green": "绿",
		"Blue": "蓝",
		"Yellow": "黄",
		"Magenta": "紫红",
		"Cyan": "青",
		"Background": "背景",
		"Window": "视窗",
		"Transparent": "透明",
		"Semi-Transparent": "半透明",
		"Opaque": "不透明",
		"Font Size": "字体尺寸",
		"Text Edge Style": "字体边缘样式",
		"None": "无",
		"Raised": "浮雕",
		"Depressed": "压低",
		"Uniform": "均匀",
		"Dropshadow": "下阴影",
		"Font Family": "字体库",
		"Proportional Sans-Serif": "比例无细体",
		"Monospace Sans-Serif": "单间隔无细体",
		"Proportional Serif": "比例细体",
		"Monospace Serif": "单间隔细体",
		"Casual": "舒适",
		"Script": "手写体",
		"Small Caps": "小型大写字体",
		"Reset": "重启",
		"restore all settings to the default values": "恢复全部设定至预设值",
		"Done": "完成",
		"Caption Settings Dialog": "字幕设定视窗",
		"Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
		"End of dialog window.": "结束对话视窗"
	};
//
/*
 * 
 * 
 * methods *****
 * 
 * 
 */
//public js
var systemsign = function() {
	var UA = navigator.userAgent
	if(UA.indexOf('Windows') != -1 || UA.indexOf('Macintosh') != -1) {
		return 'win'
	} else {
		return 'mob'
	}
}
//themethods
var mirror = function(){
	$('#small-to-big .small').mousemove(function(event) {
		var moveleftmaxwidth = $('#small-to-big .small').width() - $('#small-to-big .small p').width();
		var moveleftmaxheight = $('#small-to-big .small').height() - $('#small-to-big .small p').height();

		var ev = event || window.event; //---
		var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft; //---
		var scrollY = document.body.scrollTop || document.documentElement.scrollTop; //---
		var moveX = ev.pageX || ev.clientX + scrollX; //---
		var moveY = ev.pageY || ev.clientY + scrollY; //---

		var lastmoveX = moveX - $('#small-to-big .small img').offset().left - $('#small-to-big .small p').width() / 2;
		var lastmoveY = moveY - $('#small-to-big .small img').offset().top - $('#small-to-big .small p').height() / 2;
		//
		if(lastmoveX < 0) {
			lastmoveX = 0;
		} else if(lastmoveX > moveleftmaxwidth) {
			lastmoveX = moveleftmaxwidth;
		}
		if(lastmoveY < 0) {
			lastmoveY = 0;
		} else if(lastmoveY > moveleftmaxheight) {
			lastmoveY = moveleftmaxheight;
		}

		$('#small-to-big .small p').css({ 'left': lastmoveX, 'top': lastmoveY });
		//
		var sizeX = ($('#small-to-big .big img').width() - $('#small-to-big .big').width()) / ($('#small-to-big .small img').width() - $('#small-to-big .small p').width())
		var sizeY = ($('#small-to-big .big img').height() - $('#small-to-big .big').height()) / ($('#small-to-big .small img').height() - $('#small-to-big .small p').height())

		$('#small-to-big .big2').css({ 'left': -lastmoveX * sizeX, 'top': -lastmoveY * sizeY });
	})
	//////
	$('#small-to-big .small').hover(function() {
		if($(window).width()<768){//此处判断可考虑去掉
			$('#small-to-big .small p').hide();
			$('#small-to-big .big').hide();
		}else{
			$('#small-to-big .small p').show();
			$('#small-to-big .big').show();						
		}
	},
	function() {
		$('#small-to-big .small p').hide();
		$('#small-to-big .big').hide();
	})
}
var mirroritemstyle = function(is){
	for(var i=0;i<$('.swiper-slide div').length-1;i++){
		$('.swiper-slide div').removeClass('swiper-slidediv')					
	}
	$('.swiper-slide div').eq(is).addClass('swiper-slidediv')
	if($('.swiper-slide div').eq(is).offset().left<=(Number($('.swiper-container').eq(0).offset().left)+4)){
		$('.swiper-button-prev').click()
	}
	if($('.swiper-slide div').eq(is).offset().left>(Number($('.swiper-container').eq(0).offset().left)+Number(($('.swiper-container').eq(0).width()/4)*3)-2)){
		$('.swiper-button-next').click()
	}
}
var mirroritemstylechanged = function(){
	$('.swiper-container .swiper-wrapper').on('click','.swiper-slide',function(){
		mirroritemstyle($(this).index())
	})
}
var isSwiper = function(){//mirror底下的切换
	_this.swiper = new Swiper('.swiper-container', {
		slidesPerView: 7,
		spaceBetween: 0,
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		observer:true,
		observerparents:true
	});
	$('.swiper-container').height($('.swiper-slide').eq(0).width())
}
var isSwiper2 = function(){
	_this.swiper2 = new Swiper('#swiper-container2',{
		freeMode: true,
		freeModeMomentumRatio: 0.5,
		centeredSlides: true,
		centeredSlidesBounds: true,
		slidesPerView: 'auto',
		on: {
			tap: function() {
				$("#swiper-container2  .active").removeClass('active');
				$("#swiper-container2 .swiper-slide").eq(this.clickedIndex).addClass('active');
				_this.swiper2.slideTo(this.clickedIndex);
			}
		}
	})
}
//加入购物车
var tocarboxFn = function(){
	/* if(!document.getElementById('tocarbox')){$('#tocarboxbutton').append('<a id="tocarbox" style="width: 40px;height: 40px;position: absolute;background-color: #F0AD4E;top: 0;left: 50%;border-radius: 50%;display: none;"></a>')};$('#tocarbox').show();var tops = $('#tocarboxbutton').offset().top - $(window).scrollTop();var lefts = $('#tocarboxbutton').offset().left+$('#tocarboxbutton').width()-($('#tocarbox').width()/2);var endtop = $('#PCfixshopcarbutton').offset().top - $(window).scrollTop();var endleft = $('#PCfixshopcarbutton').offset().left;$('#tocarbox').fly({start: {top: tops, left: lefts},end: {top: endtop, left: endleft,width:60,height:60},onEnd: function(){this.destroy();};});	 */
	if(onlyJsFlytocarFlag==1)return;
	onlyJsFlytocarFlag = 1
	if(!document.getElementById('tocarbox')){
		$('#tocarboxbutton').append('<a id="tocarbox" style="width: 40px;height: 40px;position: absolute;background-color: #F0AD4E;top: -20px;left: 50%;margin-left:-20px;border-radius: 50%;display: none;"></a>')
	}
	$('#tocarbox').show()
	var tops = $('#tocarbox').offset().top-$(window).scrollTop(),
		lefts = $('#tocarbox').offset().left+20,
		endtop = $('#PCfixshopcarbutton').offset().top - $(window).scrollTop(),
		endleft = $('#PCfixshopcarbutton').offset().left+20;
		console.log(tops)
	$('#tocarbox').css({'position':'fixed','top':tops,'left':lefts,'z-index':1})//初始位置
	setTimeout(function() {
		setTimeout(function(){
			$('#tocarbox').css({'width':60,'height':60,'top':endtop,'left':endleft,'transition':'left 500ms linear, top 500ms '+(tops>endtop?'ease-out':'ease-in')+', width 1000ms, height 1000ms'})//结束位置		
		},0)
		setTimeout(function(){
			onlyJsFlytocarFlag = 0
			$('#tocarbox').remove()
		},500)		
	}, 100);
}
//video handle
var videoinfoclick = function(){
	$('#videoinfo').addClass('borderbottom')
	$('#disscussion').removeClass('borderbottom')
}
var disscussionclick = function(){
	$('#videoinfo').removeClass('borderbottom')
	$('#disscussion').addClass('borderbottom')
}
//video module
var voicestopclick = function() {
	if(event.cancelBubble)
		event.cancelBubble = true;
	else
		event.stopPropagation();
	if(systemsign()!='mob'){
		myPlayer.play()
	}
}
var mobvideoboxsize = function(){
	//尺寸调整				
	$('#VPlayLeftdiv').css('min-height',0)
	$('#VPlayLeftdiv video').css('min-height',0)
	$('#VPlayLeftdivin').css('min-height',0)
	$('#VPlayLeftdiv').css('height',($('#VPlayLeftdiv').width()/16)*9)			
	$('#VPlayLeftdivin').css('height',($('#VPlayLeftdiv').width()/16)*9)			
}

var pcheightfix = function(){
	//尺寸调整
	$('#VPlayLeftdiv').css('min-height',0)
	$('#VPlayLeftdiv video').css('min-height',0)
	$('#VPlayLeftdivin').css('min-height',0)
	$('#VPlayLeftdiv').css('height',($('#VPlayLeftdiv').width()/16)*9)
	$('#VPlayLeftdivin').css('height',(($('#VPlayLeftdiv').width()/16)*9)-30)
}

var PCormoblistenfn = function(type){
	if(type=='mob'){
		mobvideoboxsize()
		window.addEventListener('resize',mobvideoboxsize)
		return;
	}
	
	pcheightfix()
	window.addEventListener('resize',pcheightfix)
}
//videomodule以同步线程运行，获取完数据之后，调用的方法


var Videomodule = function() {
	var domstr = {
		s0:'<div id="videotitle" style="position:absolute;top:0;left:0;width:100%;height:30px;line-height:30px;font-size:16px;background-color:rgba(0,0,0,.6);">title</div>',
		s1:'<span style="position:absolute;top:0;left:0;width:100%;height:100%;" onclick="voicestopclick()"></span>',
		s2:'<span id="stopclickpause" style="position:absolute;top:0;left:0;width:100%;" onclick="voicestopclick()"></span>',
		s3:function(obj){
			return '<div class="rightitemwrap">'+
				'<img class="pcss_floatl pcss_bg-col-ccc" width="100" height="80" src="" alt="" />'+
				'<div>'+
					'<p class="rightitemwrap-title">title</p>'+
					'<p class="rightitemwrap-cont">content</p>'+
				'</div>'+
			'</div>'
		},
		s4:'<i class="mbs pcss_clboth"></i>',
	}
	//设置中文
	videojs.addLanguage('zh-CN', videolang);
	//启动播放器逻辑
	var dom = ''
	//判断是否全屏
	function ifFullscreenFn(type){
		var ifFullscreen = function(){
			if(type=='pc'){
				if(Fullscreenflag == 1){
					$('#videotitle').remove()
					Fullscreenflag = 0
					$('#videodomset').html('.VPlayLeftdiv .vjs-control-bar{opacity: 1 !important;height: 30px !important;}')
					$('.vjs-control-bar').css('bottom','-30px');
					$('.video-js .vjs-big-play-button').css('bottom','20px');
					console.log('')
				}else{
					$('.vjs-control-bar').append(domstr.s0)				
					Fullscreenflag = 1
					$('#videodomset').html('')
					$('.vjs-control-bar').css('bottom','0px');
					$('.video-js .vjs-big-play-button').css('bottom','50px');
					setTimeout(function(){
						$('#videotitle').css('top',-$(window).height()+30)
					},0)					}							
			}else{
				$('.video-js .vjs-big-play-button').css('bottom','50px');
				if(Fullscreenflag == 1){
					$('#videotitle').remove()
					Fullscreenflag = 0
				}else{
					$('.vjs-control-bar').append(domstr.s0)
					$('#videotitle').css('top',-$(window).height()+30)
					Fullscreenflag = 1
				}				
			}
		}
		var ifFullscreen2 = function(){
			if(type=='pc'){
				$('.vjs-control-bar').css('bottom','-30px');
				$('.video-js .vjs-big-play-button').css('bottom','20px');							
			}
		}
		setTimeout(function(){
			ifFullscreen2()			
		},0)
		document.addEventListener("fullscreenchange", function(e) {
		  console.log("fullscreenchange", e);
			setTimeout(function(){//重新调整标题顶部距离，防止位置bug出现
				$('#videotitle').css('top',-$(window).height()+30)
			},100)	
			ifFullscreen()
		});
		document.addEventListener("mozfullscreenchange", function(e) {
		  console.log("mozfullscreenchange ", e);
		  ifFullscreen()
		});
		document.addEventListener("webkitfullscreenchange", function(e) {
		  console.log("webkitfullscreenchange", e);
		  ifFullscreen()
		});
		document.addEventListener("msfullscreenchange", function(e) {
		  console.log("msfullscreenchange", e);
		  ifFullscreen()
		});					
	};
	dom = 'my-video'
	setTimeout(function() {
		if(systemsign()=='mob'){
			PCormoblistenfn('mob')
			ifFullscreenFn('mob')
		}else{
			PCormoblistenfn('pc')
			ifFullscreenFn('pc')
		}		
	}, 0);
	window.myPlayer = videojs(dom);
	var playerready = function(){
		myPlayer.ready(function() {
			/* 小尺寸响应式或移动端需要视频浮动，可以把VPlayLeftdivin固定定位，或者给移动端cont评论区设置根据屏幕的高度进行处理的高度 */
			$('#VPlayLeftdivin').css('visibility','visible')
			//启动播放器
			myPlayer.src('http://www.w3school.com.cn/example/html5/mov_bbb.mp4')
			if(systemsign()=='mob'){
				$('.video-js .vjs-big-play-button').css('bottom','50px');
			}
			$('.video-js .vjs-control-bar').css('display','flex')
			//手机端阻止一键静音
			$('.vjs-volume-panel').eq(0).css({
				'position': 'relative'
			});
			$('.vjs-volume-panel').eq(0).append(domstr.s1);
			//手机端阻止点击暂停
			$('.video-js').eq(0).append(domstr.s2);
			//遮罩尺寸适配
			$('#stopclickpause').height($('.video-js').eq(0).height()-30)
			window.addEventListener('resize', function() {
				$('#stopclickpause').height($('.video-js').eq(0).height()-30)
			})
			//myPlayer.play()
			//同步线程获取完数据之后，调用的方法
			$('#pcpinlun').show()
			$('#pctuijian').show()
		});		
	};
	playerready()
};
Videomodule()
// 
/* 
* 
* 
* 
* 
下面部分用作监听,全局性的
* 
* 
* 
* 
*/
var wrapsizefixFn = function(){
	//* 加入购物车跟放大镜跟顶部商店头图部分的自适应  */
	setTimeout(function(){
		$('#mirrorWrap_').height($('#mirrorWrap_').width())
		$('.swiper-container').height($('.swiper-container .swiper-slide').eq(0).width())
	},0)				
	if($(_this).width()<=767){
		$('#shop').hide()
		$('#leftcont').css('max-width','')
		$('#rightCont .topleft').width('')//
		$('#rightContin').css('padding-left',10)
		$('.topleftTitle').css('display','none')
		$('.rightContTitle').css({'visibility':' ','height':' ','margin-bottom':'0'})
		$('#topleft').css('max-width','')
		$('#maininfo').css({'left':0,'margin-right':0})
		$('#maininfo .topleft').css({'margin-right':0,'margin-top':0})
		$('#shopcar').css('background-color','#ff5200')
		$('#shopcar').hide()
		$('#fixshopcar').show()
		/* mirror定位调整 */
		$('#topleft').css({'position':'relative','top':0,'left':0,'width':'100%'})
	}else{
		$('#shop').show()
		$('#leftcont').css('max-width','379px')
		$('#rightCont .topleft').width($('#wrap').width()-$('#leftcont').width()-5)
		$('#rightContin').css('padding-left',20)
		$('.topleftTitle').css('display','block')
		$('.rightContTitle').css({'visibility':'hidden','height':'0','margin-bottom':40})
		$('#topleft').css('max-width','379px')
		$('#maininfo').css({'left':7,'margin-right':10})
		$('#maininfo .topleft').css({'margin-right':10,'margin-top':10})
		$('#shopcar').css('background-color',' ')
		$('#shopcar').show()
		$('#fixshopcar').hide()
		/* mirror定位调整(如不需要固定可直接删除就行) */
		if($(window).scrollTop()<_this.mirrorTop){
			/* mirror定位调整(如不需要固定可直接删除就行) */
			$('#topleft').css({'position':'relative','top':0,'left':0,'width':'100%'})
		}else{
			if(($('#wrap').height()+_this.mirrorTop)-$(window).scrollTop()<=502){						
				/* mirror定位调整(如不需要固定可直接删除就行) */
				$('#topleft').css({'position':'relative','top':$('#wrap').height()-502,'left':0,'width':'100%'})
			}else{
				/* mirror定位调整(如不需要固定可直接删除就行) */
				$('#topleft').css({'position':'fixed','top':50,'left':$('#leftcont').offset().left,'width':$('#leftcont').width()})
			}						
		}
	}
	/* mirror */
	$('.big2').width($('#small-to-big').width()*2.435)
	$('.big2').height($('#small-to-big').width()*2.435)
	$('.big').css('left',$('#leftcont').width()+10)				
	if($(_this).width()<935){
		$('.big').width(360)
		$('.big').height(360)
		$('.big2').width($('#small-to-big').width()*1.8)
		$('.big2').height($('#small-to-big').width()*1.8)
	}else{
		$('.big').width(500)
		$('.big').height(500)
		$('.big2').width($('#small-to-big').width()*2.505)
		$('.big2').height($('#small-to-big').width()*2.505)
	}
	/* swiper slider */
	_this.swiper.updateSize()
	_this.swiper2.updateSize()
	$('.swiper-button-prev').css('margin-top','0')
	$('.swiper-button-next').css('margin-top','0')
	setTimeout(function(){
		$('.swiper-container').height($('.swiper-container .swiper-slide').eq(0).width())					
	},0)
	//* 详情部分的适配 */
	if($(window).width()<=767){
		$('#detail').css({'position':'relative','left':-10,'width':$(window).width()})
	}else{
		$('#detail').css({'position':'relative','left':0,'width':'100%'})
	}
	$('#itemwrapin').width($('#itemwrap').width()+20)
}
var wrapsizefix = function(){
	_this.wrapsizefixFn()
	window.addEventListener('resize',function(){
		_this.wrapsizefixFn()
	})				
}
var lazyloadimg_isShow = function($node){
	var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
	var windowHeight = $(window).height(); // 浏览器自身的高度
	var offsetTop = $node.offset().top;  //目标标签img相对于document顶部的位置

	if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的
		return true;
	}
	return false;
}
var lazyloadimg_isload = function($img){
	return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
}
var lazyloadimg_loadImg = function($img){//加载图片
	$img.attr('src',$img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性
}
var lazyloadimg_lazyRender = function(){
	$('#detailwrap img').each(function () {//遍历所有的img标签
		if (lazyloadimg_isShow($(this)) && !lazyloadimg_isload($(this)) ){
			// 需要写一个checkShow函数来判断当前img是否已经出现在了视野中
			//还需要写一个isLoaded函数判断当前img是否已经被加载过了
			lazyloadimg_loadImg($(this));//符合上述条件之后，再写一个加载函数加载当前img
		}
	})
}
var lazyloadimg_Start = function(){//图片懒加载开关
	_this.lazyloadimg_lazyRender()
}
var scrollEvent = function(){
	//* 加入购物车跟放大镜部分的滑动监听 */
	if($(_this).width()<=767){
		/* mirror定位调整 */
		$('#topleft').css({'position':'relative','top':0,'left':0,'width':'100%'})
	}else{
		if($(window).scrollTop()<_this.mirrorTop){
			/* mirror定位调整(如不需要固定可直接删除就行) */
			$('#topleft').css({'position':'relative','top':0,'left':0,'width':'100%'})
		}else{
			if(($('#wrap').height()+_this.mirrorTop)-$(window).scrollTop()<=502){						
				/* mirror定位调整(如不需要固定可直接删除就行) */
				$('#topleft').css({'position':'relative','top':$('#wrap').height()-502,'left':0,'width':'100%'})
			}else{
				/* mirror定位调整(如不需要固定可直接删除就行) */
				$('#topleft').css({'position':'fixed','top':50,'left':$('#leftcont').offset().left,'width':$('#leftcont').width()})
			}						
		}
	}
	//* dtail部分 */
	if (_this.clock) { // 如果在300毫秒内进行scroll的话，都会被clearTimeout掉，setTimeout不会执行。
				//如果有300毫秒外的操作，会得到一个新的timeID即clock，会执行一次setTimeout,然后保存这次setTimeout的ID，
				  //对于300毫秒内的scroll事件，不会生成新的timeID值，所以会一直被clearTimeout掉，不会执行setTimeout.
		clearTimeout(_this.clock);
	}
	_this.clock = setTimeout(function () {
		lazyloadimg_Start();
	},0)
}
// 推荐懒加载模拟
//一开始为1就是加载完数据(提前一个函数加载完的一次数据，没有操作flag),然后到底部就变为0,判断为0就打断,防止重复加载,加载完就变为1,完成一个轮回
var lazyloaditemFn = function(){
	if(_this.itemloadNum > 4){
		return;
	}
	if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
		if(_this.lazyloaditemflag == 0){
			return;
		}else{
			_this.lazyloaditemflag  = 0
			setTimeout(function(){
				for(var i=0;i<8;i++){//8是模拟获取到的数据长度
					$('#itemwrapin').append('<div style="height: 300px;padding-left: 0;margin-bottom: 20px;" class="col-lg-3 col-md-4 col-xs-6"><div style="height: 100%;margin-right: 5px;background-color: #0099FF;"></div></div>')
				}
				_this.lazyloaditemflag = 1
				_this.itemloadNum++
				if(_this.itemloadNum > 4){ 
					console.log(_this.itemloadNum)
					$('#loading').html('')
				}
			},1000)
		}
	}
}
var scrollFn = function(){
	_this.scrollEvent()	
	_this.lazyloadimg_Start()
	window.addEventListener('scroll',function(){
		_this.lazyloadimg_Start()
		_this.scrollEvent()
		_this.lazyloaditemFn();
	})
}
/* 
* 
* 
* 
* 完成加载 *****
* 
* 
* 
 */
var loaded = function(){
	setTimeout(function(){
		$('#maininfo').css('visibility',' ')					
	},0)
}
var getdataFn = function(){
	//这里是请求模拟数据，因为是原生,所以追加dom,不是追加数据
	for(var i=0;i<8;i++){//8是模拟获取到的数据长度
		$('#itemwrapin').append('<div style="height: 300px;padding-left: 0;margin-bottom: 20px;" class="col-lg-3 col-md-4 col-xs-6"><div style="height: 100%;margin-right: 5px;background-color: #0099FF;"></div></div>')
	}
	/* 详情图片标记，再监听scroll */
	$('#detailwrap img').attr('data-src',_this.imgsrc)//图片模板
	//* 请求完数据再运行下面的 */
	_this.isSwiper2()
	_this.isSwiper()
	_this.mirror()
	_this.mirroritemstylechanged()			
	_this.wrapsizefix()
	_this.scrollFn()
	_this.loaded()
}
_this.getdataFn()
