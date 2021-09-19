//搭建服务器
var express = require('express');
var app=express();
////app.use -- 找到最上级有一条符合的请求，就会执行，括号里面斜杠后面的参数得要手动写在端口后面斜杠后面那里
////	app.use('/',function(req,res){
//	app.use('/user',function(req,res){
//		console.log('')
////		res.end()
//		res.end('wel')
//	})

//	app.use('/text/a',function(req,res){
//		res.send('欧is激动秒杀价');
//	})
//	app.use('/text',function(req,res){
//		var a=[];
//		for(var i=0;i<5;i++){
//			a[i]=i;
//		}
//		res.send(a);
//	})

//express.static('文件的路径')
//	var path = require('path')//处理文件路径的模块
//	app.use(express.static(path.join(__dirname,'../img')))//__dirname是获取当前目录，../img是当前目录下的的上一级目录的文件夹,然后访问img文件夹的所有文件，url只需要端口后面加文件名就可以
////静态资源路径：__dirname,'../img'

//访问home，出现按钮，点击按钮，访问静态路径配置下的图片
	var path = require('path');
	app.use(express.static(path.join(__dirname,'../img')));//静态路径配置
	app.use('/home',function(req,res){
		res.send('<a href="asdsadasdsad.png">访问图片</a>')
	});
	
app.listen(8500);
