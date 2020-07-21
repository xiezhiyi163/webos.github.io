var fs = require('fs');//引入模块
//-----------------------------
var http=require('http');//搭建服务器
http.createServer(function(resquest,response){
	var Rst = fs.createReadStream('data/baidu.html');//创建流
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//回应头
	Rst.on('data',function(chunk){//绑定
		response.end(chunk);//回应数据
	});
	Rst.on('end',function(){});
}).listen(8500);
