var express = require('express');//
var router1 = require('../routerJs/route1.js');//引入的路由模块
var router2 = require('../routerJs/route2.js');//引入的路由模块
var path = require('path');
var app = express();
//	app.use(express.static(path.join(__dirname,'../img')))
	app.use(express.static(path.join(__dirname,'../../index')))//服务器启动之后的静态资源入口
	app.use('/',router1)
app.listen(8500);
