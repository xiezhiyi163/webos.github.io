window.p_data = {
	Fullscreenflag:0,
	videolang: {
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
	}
}

var systemsign = function() {
	var UA = navigator.userAgent
	if(UA.indexOf('Windows') != -1 || UA.indexOf('Macintosh') != -1) {
		return 'win'
	} else {
		return 'mob'
	}
}

var fixwrap = function(){
	$('#wrap').height($(window).height())
	setTimeout(fixwrap,1)
}

var voicestopclick = function() {
	if(event.cancelBubble)
		event.cancelBubble = true;
	else
		event.stopPropagation();
}

var mobvideoboxsize = function(){
	$('.VPlayLeftdivmob').css('height',($(window).width()/16)*9)
}

var pcheightfix = function(){
	$('#pccont').height($(window).height()-121)
}

var PCormoblistenfn = function(type){
	if(type=='mob'){
		mobvideoboxsize()
		setTimeout(function(){PCormoblistenfn('mob')},10)
		return;
	}
	pcheightfix()
	setTimeout(function(){PCormoblistenfn('pc')},10)
}

var pcsetheight = function(){
	$('#VPlayLeft').height($(window).height()-30)
	$('#stopclickpause').height($(window).height()-30)
	setTimeout(pcsetheight,10)
}

var Videomodule = function() {
	var domstr = {
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
	videojs.addLanguage('zh-CN', p_data.videolang);
	//启动播放器逻辑
	var dom = ''
	if(systemsign()=='mob'){
		$('#wrap2').css('display','block')
		$('html').css('overflow','auto')
		$('body').css('overflow','auto')
		dom = 'my-video2'
		//
		PCormoblistenfn('mob')
		$('#my-video').remove()
	}else{
		$('#wrap').css('display','block')
		$('html').css('overflow','hidden')
		$('body').css('overflow','hidden')
		dom = 'my-video'
		//
		PCormoblistenfn('pc')
		$('#my-video2').remove()
		//videobox高度
		pcsetheight()
		//判断是否全屏
		var ifFullscreen = function(){
			if(p_data.Fullscreenflag == 1){
				p_data.Fullscreenflag = 0
				$('#VPlayLeft .vjs-control-bar').css('bottom','-30px');
				$('#VPlayLeft .video-js .vjs-big-play-button').css('bottom','20px');
				console.log('')
			}else{
				p_data.Fullscreenflag = 1
				$('#VPlayLeft .vjs-control-bar').css('bottom','0px');
				$('#VPlayLeft .video-js .vjs-big-play-button').css('bottom','50px');
			}
		}
		var ifFullscreen2 = function(){
			$('#VPlayLeft .vjs-control-bar').css('bottom','-30px');
			$('#VPlayLeft .video-js .vjs-big-play-button').css('bottom','20px');
		}
		setTimeout(function(){
			ifFullscreen2()			
		},0)
		document.addEventListener("fullscreenchange", function(e) {
		  console.log("fullscreenchange", e);
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
		//输入框
		document.getElementById('searchtext').onfocus = function(){
			if($('#searchtext').val()=="输入想要搜索的内容"){
				$('#searchtext').val("")
			}
		}
		document.getElementById('searchtext').onblur = function(){
			if($('#searchtext').val()==""){
				$('#searchtext').val("输入想要搜索的内容")
			}
		}
	}
	window.myPlayer = videojs(dom);
	var playerready = function(){
		myPlayer.ready(function() {
			//启动播放器
			myPlayer.src('http://www.w3school.com.cn/example/html5/mov_bbb.mp4')
			$('.video-js .vjs-control-bar').css('display','flex')
			//手机端阻止一键静音
			$('.vjs-volume-panel').eq(0).css({
				'position': 'relative'
			});
			$('.vjs-volume-panel').eq(0).append(domstr.s1);
			//手机端阻止点击暂停
			$('.video-js').eq(0).append(domstr.s2);
			//遮罩尺寸适配
			$('#stopclickpause').height($('.video-js').eq(0).height() - 30)
			window.addEventListener('resize', function() {
				$('#stopclickpause').height($('.video-js').eq(0).height() - 30)
			})
			//myPlayer.play()
		});		
	};
	playerready()
};

(function(){
	fixwrap()
	Videomodule()
})()
