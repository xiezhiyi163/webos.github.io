var mokuai = require('fs');
var thegroup = {
	unlinker: function(obj) { //删除
		mokuai.unlink(obj, function(err) {
			if(err) throw err;
			console.log('unlink')
		})
	},
	read: function(obj) { //读取
		mokuai.readFile(obj, 'utf-8', function(err, data) {
			if(err) throw err;
			console.log(data)
		})
	},
	write: function(obj, writething) { //写入
		mokuai.writeFile(obj, writething, function(err) {
			if(err) throw err;
			console.log('write')
		})
	},
	copy: function(obj, newObj, writething) { //复制
		mokuai.readFile(obj, function(err, data) {
			if(err) throw err;
			mokuai.writeFile(newObj, writething, function(err) {
				if(err) throw err;
				console.log('newrite')
			})
		})
	}
}
module.exports = thegroup