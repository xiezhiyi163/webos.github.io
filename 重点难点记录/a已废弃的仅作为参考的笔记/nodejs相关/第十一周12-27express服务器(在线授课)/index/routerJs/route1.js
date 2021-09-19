var fs = require('fs');

//路由文件
var express = require('express');
//创建路由
var router1 = express.Router();
//路由配置 *jsonp数据跨越的原理，只能是get方式
	
//	router1.get('/a',function(req,res){
//		res.send('<h3>A</h3>')
//	});
//	router1.get('/a/son',function(req,res){
//		res.send('<h3>A/son</h3>')
//	});

	router1.get('/index',function(req,res){
		res.redirect('new_file.html')
		//redirect：重定向,以请求的最后一个斜杠为界限进行的重定向
	})
	router1.get('/index/img',function(req,res){
		res.redirect('../img/asdsadasdsad.png')
		//redirect：重定向,以请求的最后一个斜杠为界限进行的重定向
	})
	
//暴露路由这个文件
module.exports=router1;
