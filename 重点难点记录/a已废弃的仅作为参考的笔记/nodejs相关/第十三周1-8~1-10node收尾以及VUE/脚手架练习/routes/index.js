var express = require('express');
var dbhandler = require('./mongodb-groupin.js'); //数据库操作的模块--------

var crypto = require('crypto'); //加密算法的模块---------

var formidable = require('formidable'); //对于文件上传使用的模块-----------

var ObjectID = require('mongodb').ObjectID; //“_id”:Object（‘123456’）---------------

function User(users) {
	this.name = users.name;
	this.password = users.password;
	this.veri = users.veri;
	this.id = users.id;
} //容器：收集登陆人员的信息的
function recUpdate(res, cltions, intdata) {
	console.log(intdata)
	if(intdata.length == 0) {
		res.send('最后一条删除成功')
	} else {
		var selector = [{
				'name': intdata[0].name
			},
			{
				$set: {
					'tokenId': intdata[0].tokenId - 1 //
				}
			}
		];
		dbhandler['mgdbtdo']('upDates', selector, 'student', function(dat) {
			intdata.shift(); //
			if(intdata.length != 0) {
				recUpdate(res, cltions, intdata);
			} else {
				res.send('更新成功')
			}
		})
	}
}
//判断对象是否为空
var isNullObj = function(obj) {
	for(var i in obj) {
		if(obj.hasOwnProperty(i)) {
			return false; //对象不为空
		}
	}
	return true;
}
/****************************************/
var router = express.Router();
//
//
//
//
//
router.get('/AdminLoginAndRegHandler', function(req, res, next) { //form表单执行的功能,//一开始先验证
	//req.query.action 获取到请求传入的action参数
	if(req.query.action == 'verification') {
		var veri = '';
		var str = 'abcdefghigklmnopqrstuvwxyz0123456789';
		var randomNum = function(min, max) {
			var num = Math.random();
			var num1 = num * (max - min);
			return Math.floor(num1); //验证码随机生成
		}

		for(var i = 0; i < 4; i++) {
			var txt = str[randomNum(0, str.length)];
			veri += txt;
		}

		var newUser = new User({
			name: '',
			password: '',
			id: '',
			phone: '',
			veri: veri //将刚生成的验证码放到这个容器里面
		})
		//session:可以通过req.session访问
		console.log(req.session);
		req.session.user = newUser;

		res.send('{"success":"成功","data":"' + veri + '"}')
	} else if(req.query.action == 'checkVerification') { //执行验证码校验的逻辑
		//前端接收过来和后端发送过来的验证码做对比
		if(req.query.veri == req.session.user.veri) {
			res.send("{'seccess':'验证码校验成功'}");
		} else {
			res.send("{'err':'验证码校验失败'}")
		}
	}
});
//
//
//
//
//
router.post('/student', function(req, res) {
	if(req.query.action === 'addstu') {
		dbhandler['mgdbtdo']('finds', null, 'student', function(Adata) {
			dbhandler['mgdbtdo']('finds', {
				name: req.body.name
			}, 'student', function(checkdata) {
				if(checkdata.length != 0) {
					res.send('已被注册')
				} else {
					//创建插入字段
					var usInfors = {};
					usInfors.tokenId = Adata.length + 1;
					usInfors.name = req.body.name == '' ? 'false' : req.body.name;
					var md5 = crypto.createHash('md5');
					usInfors.password = md5.update(req.body.pasw).digest('base64');
					usInfors.phone = /^1\d{10}$/.test(parseInt(req.body.phone)) ? req.body.phone : "false";
					usInfors.truename = req.body.truename;
					usInfors.failnum = 0;
					usInfors.isState = false; //解冻，那么为false
					usInfors.createAt = new Date();
					//校验
					if(usInfors.phone != 'false' && usInfors.name != 'false') {
						//插入操作
						dbhandler['mgdbtdo']('insert', usInfors, 'student', function(Adat) {
							if(Adat.length == 0) {
								res.send('注册失败');
							} else {
								res.send('注册成功')
							}
						})
					} else {
						res.send('注册格式不对')
					}
				}
			})
		})
	}
	//检查是否同一个人的-------------------------------------------
	else if(req.query.action === 'login') {
		dbhandler['mgdbtdo']('finds', null, 'student', function(arr) {
			var userInfors = {}; //收集所有要插入到数据库内的数据
			// 密码加密的过程  ===》
			var MD5 = crypto.createHash('md5');
			var password = MD5.update(req.body.password).digest('base64'); //!!!!!!!
			dbhandler['mgdbtdo'] ('finds',	{name: req.body.userName,password: password},'student',function(Fdata) {
				console.log(Fdata);
				if(Fdata.length != 0) {
					if(Fdata[0].isState == true){
						res.send('已被冻结')
					}else{
					//			console.log(req.body) //访问到 post请求发送的数据/
					req.session.user.name = req.body.userName; //上面验证码端口如果不加载的话，这个以及下面的属性，都找不到
					var MD5 = crypto.createHash('md5'); //
					var password2 = MD5.update(req.body.password).digest('base64'); //!!!!!!!
					req.session.user.password = password2;
					req.session.user.phone = Fdata[0].phone;
					req.session.user.id = Fdata[0]._id;
					console.log(req.session.user);
					res.send('<script>alert("登陆成功")</script>');
					}
				} else {
					var sel = [{
							"name": req.body.userName
						},
						{
							$set: {
								"isState": true
							}
						}
					];
					dbhandler['mgdbtdo']('upDates', sel, 'student', function(arr) {
						res.send('密码错误次数超过，已被冻结');
					})
				}

			})
			//----------------------------------------------------
		})
	} else if(req.query.action === 'usershow') {
		var selector = {};
		if(req.body.name) {
			selector.name = {
				$regex: '.*' + req.body.name + '.*'
			}
		}
		if(req.body.phone) {
			selector.phone = {
				$regex: '.*' + req.body.phone + '.*'
			}
		}
		if(req.body.truename) {
			selector.truename = {
				$regex: '.*' + req.body.truename + '.*'
			}
		}
		dbhandler['mgdbtdo']('finds', null, 'student', function(arr) {//为了得到一个arr.length
			if(isNullObj(selector)) { //给个函数判断selector是否为空
				//如果selector是空的，那么就重新定义selector，让其按分页来查询
				//倒叙
				selector1 = {
						'tokenId': {
							$gt: arr.length - (parseInt(req.body.pageStart) * 2 - 2) - 2,
							$lte: arr.length - (parseInt(req.body.pageStart) * 2 - 2)
						}
					},
					selector2 = {
						'tokenId': {
							$gt: 2 * (parseInt(req.body.pageStart - 1)),
							$lte: 2 * (parseInt(req.body.pageStart))
						}
					}
				//如果查询条件没有，按照分页走
			}
			dbhandler['mgdbtdo']('finds', selector1, 'student', function(data) {
				var obj = {
					data:{
						pageSize:2,
						count:arr.length,
						list:data
					},
					success:'请求成功'
				};
				var str = JSON.stringify(obj);
				res.send(str)
			})
		})
	}
})
//
//
//
//
//
router.get('/student', function(req, res) {
	if(req.query.action === 'dels') {

		dbhandler['mgdbtdo']('removes', {
			tokenId: parseInt(req.query.tokenId)
		}, 'student', function(deldat) {

			if(deldat.length == 0) {
				res.send('删除失败');
			} else {

				dbhandler['mgdbtdo']('finds', {
					tokenId: {
						$gt: parseInt(req.query.tokenId)
					}
				}, 'student', function(findnextSilingDat) {
					recUpdate(res, 'student', findnextSilingDat);
				})

			}
		})
	}
})

module.exports = router;