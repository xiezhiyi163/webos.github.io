//调用module.js里面编写的模块
//引入
//var nameMdl = require('../module/module.js')
//nameMdl.fn1()
//var nameMdl = require('../module/module2.js')
//nameMdl.names()//返回NaN，所以
//nameMdl.names(5,55)//这样才可以，因为刚才设置了形参
var read = require('fs');
//read.readFile('../index.html','utf-8',function(err,data){
//	if(err) throw err;
//	console.log(data);
//})
//read.writeFile('../5663.css','div{background:brown;}',function(err){
//	if(err) throw err;
//	console.log('good')
//})
//read.appendFile('../bak.text','div{background:brown;}'+'\n',function(err){
//	if(err) throw err;
//	console.log('good')
//})
read.readFile('../bak.txt',function(err,data){
	read.writeFile('../popkkk.txt',data,function(err){
		console.log(111)
	})
})
