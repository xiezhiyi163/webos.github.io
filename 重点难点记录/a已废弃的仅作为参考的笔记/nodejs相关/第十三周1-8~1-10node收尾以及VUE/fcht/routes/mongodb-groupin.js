var mongo = require('mongodb');
var MongoClient = mongo.MongoClient; //mongo客户端
var url = 'mongodb://127.0.0.1:27017'; //服务端的地址
var dbName = 'test'; //要操作的数据库
//------------------------------------------------
var check = function(clients, collections, callbackfn) { //查看的方法的封装
	collections.find().toArray(function(err, result) {
		if(err) throw err;
		callbackfn(result);
		clients.close();
	})
}
var add = function(fndatas, clients, collections, callbackfn) { //删除方法的封装
	collections.insert(fndatas, function(err, result) {
		if(err) throw err;
		callbackfn(result);
		clients.close();
	})
}
var upDate = function(fndatas, clients, collections, callbackfn) { //删除方法的封装
	collections.update(fndatas[0],fndatas[1], function(err, result) {
		if(err) throw err;
		callbackfn(result);
		clients.close();
	})
}
var delone = function(fndatas, clients, collections, callbackfn) {
	collections.deleteOne(fndatas, function(err, result) {
		if(err) throw err;
		callbackfn(result);
		clients.close();
	})
}
var find = function(fndatas, clients, collections, callbackfn) {
	collections.find(fndatas).toArray(function(err, result) {
		if(err) throw err;
		callbackfn(result);
		clients.close();
	})
}
//
var todoy = {
	insert: add,
	removes: delone,
	checks: check,
	finds:find,
	upDates:upDate
}
var mongos = function(type, lstdata, dbcltion, callbackfn) {
	MongoClient.connect(url, function(err, client) { //client，可理解为链接，客户端
		if(err) throw err;
		var DB1 = client.db(dbName); //链接到数据库
		var DB1ction = DB1.collection(dbcltion); //链接到数据里面的某个集合
		//
		//	check(client,DB1ction);//collection形参传的是DB1ction这个实参
		//	add({name:'oppoop',sex:'man'},client,DB1ction);
		todoy[type](lstdata, client, DB1ction, callbackfn);
	})
}
exports.mgdbtdo = mongos; //暴露这个函数出来，user.js里面使用