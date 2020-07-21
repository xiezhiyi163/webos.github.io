var exp = require('express');//引入express模块
var router = exp.Router();//express模块关联Router方法
//
	router.get('/data',function(req,res){//get方法请求数据
		res.redirect('baidu.html');//重定向跳转
	})
//
module.exports=router;//暴露模块出来