/* 
 MVC_OS|_/&/_|   //sessionStorage储存的可显示的图标的程序ID
 {
 	a: "'MVC_OS',//程序ID
		'1',//1表示为已打开，0表示为缩小
		'personal_mvc_os.html[[[notAskClose]]]',//窗口地址以及询问是否关闭,askClose是询问关闭
		'left:120px;top:60px;background-color:none',//左上位置，磁贴颜色
		'width:800px',//宽度
		'height:600px',//高度
		'indexmax'",//一开始打开的时候先是最高级
 	g: 'MVC OS',//程序名称
	ac: 0 ,//图标是否被选中，选中为1
	ifresize:1,//1为可改变窗口大小，0为不能
	iconUrl:'',//程序图标
	color:'',//窗口顶栏的颜色设置
	ifdesk:1,//1为显示在桌面，0为不显示
	ifmetro：1，//1为显示在磁贴，0为不显示
 }
 */
var deskinitdata = function(type,p_data,callback){
	if(type == 'get'){
		sessionStorage.deskicon = ''
		sessionStorage.menuicons = 'MVC_OS|_/&/_|'+
			'testPage|_/&/_|' +
			'weixinxiaocehngxuAPI|_/&/_|' +
			'aliyunshiliangtu|_/&/_|' +
			'bilibili|_/&/_|' +
			'smallapp|_/&/_|' +
			'baidu|_/&/_|' +
			'enterUrl|_/&/_|' +
			'counter|_/&/_|' +
			'lanhuApp|_/&/_|' +
			'MVCnotes|_/&/_|' +
			'toUsethisOS|_/&/_|' +
			'VPlay_Web|_/&/_|' +
			'Bstatic|_/&/_|' +
			'elementUi|_/&/_|' +
			'VPlay|_/&/_|'+
			'toolbox|_/&/_|' +
			'webjobprogram|_/&/_|' +
			'document|_/&/_|'
		sessionStorage.citieicons = '' 
		//
		p_data.icons = []//桌面
		p_data.allicons.menuicons = [ //左侧菜单
			{
				a: "'MVC_OS','1','personal_mvc_os.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'",
				g: 'MVC OS', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:1,ifmetro:0
			},
			{ 
				a: "'testPage','1','personal_textPage.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: '__testPage', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'webjobprogram','1','personal_webJobProgram.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'webjobprogram', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:1,ifmetro:0
			},
			{ 
				a: "'weixinxiaocehngxuAPI','1','https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: '微信小程序api', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'bilibili','1','http://www.bilibili.com/[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:1100px','height:600px','indexmax'", 
				g: 'bilibili', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
			{ 
				a: "'baidu','1','//baidu.com[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:1253px','height:640px','indexmax'", 
				g: 'baidu', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:1,ifmetro:0
			},
			{ 
				a: "'enterUrl','1','personal_enterUrlShowPage.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'enterUrlShowPage', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:1,ifmetro:0
			},
			{ 
				a: "'elementUi','1','https://element.eleme.cn/#/zh-CN[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'elementUi', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
			{ 
				a: "'VPlay_Web','1','personal_VPlay_Web.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:743px','height:501px','indexmax'", 
				g: 'VPlay_Web', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'counter','1','personal_counter.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:743px','height:501px','indexmax'", 
				g: 'counter', ac: 0 ,ifresize:0,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
			{ 
				a: "'smallapp','1','https://mp.weixin.qq.com/[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: '小程序登入', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'VPlay','1','personal_VPlay.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'VPlay', ac: 0,ifresize:1 ,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'Bstatic','1','http://bowlroll.net/file/[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'B碗', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'MVCnotes','1','personal_note.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'MVCnotes', ac: 0,ifresize:1 ,iconUrl:'',color:'',ifdesk:0,ifmetro:0
			},
			{ 
				a: "'toUsethisOS','1','personal_toUsethisOS.html[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: '使用或开发指南', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
			{ 
				a: "'lanhuApp','1','//lanhuapp.com[[[notAskClose]]]','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: '蓝湖app', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
			{ 
				a: "'document','1','personal_documentTextarea.html[[[askClose]]](该页面内容将会丢失)','left:120px;top:60px;background-color:none','width:800px','height:600px','indexmax'", 
				g: 'document(mobile fix code hidden)', ac: 0 ,ifresize:1,iconUrl:'',color:'',ifdesk:1,ifmetro:0
			},{ 
				a: "'toolbox','1','personal_toolbox.html[[[notAskClose]]]','left:120px;top:60px;background-color:lightgreen','width:800px','height:600px','indexmax'", 
				g: 'toolbox', ac: 0,ifresize:1 ,iconUrl:'',color:'',ifdesk:0,ifmetro:1
			},
		]
		p_data.allicons.citieicons = [ //磁贴（不需要对应session的图标id）
			{
				title: '常用模块',
				icons: []
			}
		]		
	}else{
		//有登录就请求线上数据
	}
	callback()
}