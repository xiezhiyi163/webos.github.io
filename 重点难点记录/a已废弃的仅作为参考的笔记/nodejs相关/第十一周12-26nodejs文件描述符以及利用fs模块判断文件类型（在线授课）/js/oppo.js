//var fs = require("fs");//
//覆盖
//fs.writeFile('../b.txt','sdfsfsff',function(err){
//	if(err) throw err;
//	console.log('ok');
//})
//追加
//fs.writeFile('../b.txt','------666999',{flag:'a'},function(err){
//	if(err) throw err;
//	console.log('ok');
//})

//判断有没有文件夹，没有，创建，有，就在里面搞个txt并在里面写入内容
//fs.exists('../b',function(exists){
//	if(exists){
//		fs.writeFile('../b/bb.txt','大吉大利今晚吃鸡！',function(err){
//			console.log('oldok');
//		})		
//	}else{
//		fs.mkdir('../b',function(err){
//			if(err) throw err;
//			fs.writeFile('../b/bb.txt','大吉大利今晚吃鸡！',function(err){
//				console.log('newok');
//			})
//		})
//	}
//})

//判断文件或文件夹
//fs.stat('../module',function(err,stats){
//	if(err) throw err;
//	console.log(stats);
//	if(stats.isDirectory){
//		console.log('dir');
//	}else{
//		console.log('wenjian')
//	}
//})

//判断文件是否存在，如果存在，判断是什么类型的文件状态
//fs.stat('../module/module.js',function(err,stats){
//	if(stats){
//		console.log(stats,'found');
//	}else{
//		console.log('not found')
//	}
//})

//异步事件变同步事件
//fs.writeFileSync('../bb.txt','大吉大利今晚吃鸡！')
//fs.mkdirSync('../b')
//fs.unlinkSync('../bb.txt')

//使用流来读取数据
//var data='';//-----------------------------------------------收集读取的数据
////var readStream=fs.createReadStream('../index.html');1.创建一个读取文件的流
//readStream.setEncoding('utf-8');
//readStream.on('data',function(chunk){//-----------------2.data收集，收集数据
//	data=data+chunk;
//})
//readStream.on('end',function(){//-----------------------------end
//	console.log(data);
//	console.log('数据读取完毕');
//})

//使用流来写入数据
//var writeStream=fs.createWriteStream('../b.txt');//流方法创建文件
//readStream.setEncoding('utf-8');
//writeStream.on('open',function(){//------------------管道open打开
//	console.log('opened');
//})
//writeStream.write('cksdngxfsdnjsjk','utf-8');//----------写入内容
//writeStream.end();//----------------------------------数据不再流入
//writeStream.on('finish',function(){
//	console.log('数据不再流入')
//})

//创建读写的流
//var rs = fs.createReadStream('../index.html');
//var ws = fs.createWriteStream('../index.txt');
////---------复制操作
//rs.on('data',function(chunk){//读取
//	ws.write(chunk)//读取到的写入的另一个地方
//})//-----------------------------------------------
//rs.on('end',function(){
//	console.log('数据读取完毕');
//	ws.end('end',function(){
//		console.log('完成写入')
//	})
//})

//原生搭建服务器
var http=require('http');
http.createServer(function(request,response){
	//本机地址：localhost||127.0.0.1
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})//改成text/plain，会变成乱码
	response.write('../index.html')
	response.end();//不写这个，页面会一直加载
}).listen(12560)
