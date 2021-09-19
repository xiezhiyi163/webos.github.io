var exp = require('express');//引入express模块
var router = require('../routerjs/router1.js');//引入暴露出来的路由模块
var path = require('path');//引入文件路径处理模块
var expFn = exp();//引入的express模块变为方法
//
	expFn.use(exp.static(path.join(__dirname,'../data')));//路由器的位置处理及定位
	expFn.use('/',router);//给路由器发送请求
//
expFn.listen(3000);//端口监听
