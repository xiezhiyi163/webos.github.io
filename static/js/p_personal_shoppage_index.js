window.thisdata = {
	longtype:[0,0,0,0],
	shoptype:[0,0,0,0,0,0],
	win:window,
	allnum:0,//追加数据时会逐个递增
}

window.mtds = {
	clearfloatdom___:function(){
		var dom = ''
		dom+='<i class="i"></i>'
		return dom
	},
	getlongdatadom1___:function(){
		var dom = '';
		dom+='<div class="listitem_long">'
		dom+='	<p class="itemlong_img"></p>'
		dom+='	<div class="itemlong_cont">'
		dom+='		<p class="itemlong_dec">这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容</p>'
		dom+='		<p><span class="itemlong_date">02-06</span><span class="itemlong_share">→ 分享</span></p>'
		dom+='	</div>'
		dom+='</div>'
		return dom
	},
	getlongdata1:function(){
		for(var i=0;i<thisdata.longtype.length;i++){
			$('#longtype1').append(mtds.getlongdatadom1___())
		}
	},
	getlongdatadom2___:function(){
		var dom = '';
		dom+='<div class="listitem_long">'
		dom+='	<p class="itemlong_img"></p>'
		dom+='	<div class="itemlong_cont">'
		dom+='		<p class="itemlong_dec">这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容</p>'
		dom+='		<p><span class="itemlong_date">02-06</span><span class="itemlong_share">→ 分享</span></p>'
		dom+='	</div>'
		dom+='</div>'
		return dom
	},
	getlongdata2:function(){
		for(var i=0;i<thisdata.longtype.length;i++){
			$('#longtype2').append(mtds.getlongdatadom2___())
		}
	},
	getshopdatadom___:function(){
		var dom = '';
		dom+='<div class="shoptypeitem">'
		dom+=	'<div>'
		dom+=		'<p class="shopitem_img"></p>'
		dom+=		'<p class="shopitem_dec">这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容这是描述内容</p>'
		dom+=		'<p><span class="shopitem_date">02-06</span><span class="shopitem_share">→ 分享</span></p>'
		dom+=	'</div>'
		dom+='</div>'
		return dom
	},
	getshopdata:function(){
		if($('#shoptype>div .i').length!=0){
			$('#shoptype>div .i').remove()
		}
		for(var i=0;i<thisdata.shoptype.length;i++){
			$('#shoptype>div').append(mtds.getshopdatadom___())
		}
		$('#shoptype>div').append(mtds.clearfloatdom___())
	},
	resizebanner:function(){
		if($(thisdata.win).width()<500){
			$('#banner').attr('class','banner bannerHeight200')
		}else if($(thisdata.win).width()>=500&&$(thisdata.win).width()<800){
			$('#banner').attr('class','banner bannerHeight300')
		}else if($(thisdata.win).width()>=800&&$(thisdata.win).width()<1000){
			$('#banner').attr('class','banner bannerHeight450')
		}else if($(thisdata.win).width()>=1000){
			$('#banner').attr('class','banner bannerHeight600')
		}
	},
	resizeshoptype:function(){
		$('#shoptype>div').width($(thisdata.win).width()+30);
	},
	resize:function(){
		mtds.resizebanner()
		mtds.resizeshoptype()
		thisdata.win.addEventListener('resize',function(){
			mtds.resizebanner()
			mtds.resizeshoptype()
		})
	}
}

window.muds = function(){
	mtds.getlongdata1()
	mtds.getlongdata2()
	mtds.getshopdata()
	mtds.resize()
};muds()