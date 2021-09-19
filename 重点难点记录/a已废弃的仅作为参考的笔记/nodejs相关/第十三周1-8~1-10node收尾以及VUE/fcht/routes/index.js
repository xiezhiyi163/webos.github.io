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
function recUpdate(res,cltions,intdata){
	if(intdata.length==0){
		res.send('{"最后一条删除成功"}');
	}else{
		var selector=[
			{'name':intdata[0].name},//账号名字不能重复
			{
				$set:{
					'tokenId':intdata[0].tokenId-1//只能修改一条
				}
			}
		];
		dbhandler['mgdbtdo']('upDates',selector,cltions,function(dat){
			intdata.shift();//当前删除的的数据之后的数据
			//重新检测
			if(intdata.length!=0){
				recUpdate(res,cltions,intdata);//处理data[0]的tokenid值
			}else{
				res.end('更新成功')
			}
		})
	}
}
/****************************************/
var router = express.Router();
//
//
//
//
//
//接口：/VueHandler/AdminLoginAndRegHandler?action=verification
//AdminLoginAndRegHandler接口当中要找的
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
//
///VueHandler/AdminLoginAndRegHandler?action=add注册人员的
//将浏览器的内容添加到某个集合里面
router.post('/AdminLoginAndRegHandler', function(req, res) { //form表单执行的功能 //上面验证完才登陆
	if(req.query.action === 'add') { //条件的判断跟form表单匹配
		dbhandler['mgdbtdo']('finds', null, 'Administor', function(arr) {
			dbhandler['mgdbtdo']('finds', {
				name: req.body.name
			}, 'Administor', function(Fdata) {
				console.log(Fdata)
				//检查是否同一个账户的-------------------------------------------
				if(Fdata.length == 0) {

					//			console.log(req.body) //访问到 post请求发送的数据
					var userInfors = {}; //收集所有要插入到数据库内的数据
					userInfors.tokenId = arr.length + 1;
					userInfors.createAt = new Date();
					userInfors.power = req.body.power;
					userInfors.powerCode = req.body.power == "系统管理员" ? 1 : 2;
					userInfors.name = req.body.name == "" ? "false" : req.body.name;
					userInfors.turename = req.body.turename == "" ? "false" : req.body.turename;
					//！！！！！！！！！！！！！//
					// 关于正则
					userInfors.phone = /^1\d{10}$/.test(parseInt(req.body.phone)) ? req.body.phone : "false";
					// 密码加密的过程  ===》
					var MD5 = crypto.createHash('md5');
					userInfors.password = MD5.update(req.body.password).digest('base64');

					console.log(userInfors)
					//校验
					if(userInfors.phone != 'false' && userInfors.name != 'false' && userInfors.turename != 'false') {
						// 数据合格 
						// 插入符合格式的数据到 集合 Administor
						dbhandler['mgdbtdo']('insert', userInfors, 'Administor', function(result) {
							if(result.length == 0) {
								res.end('{"err":"系统注册出现问题，请重新注册"}')
							} else {
								res.send('{"success":"注册成功"}')
							}
						})
					} else {
						res.send('{"err":"注册格式不对"}')
					}
					//！！！！！！！！！！！！！！！！//

				} else {
					res.send('已被注册');
				}
			})
		})
		//------------------------------------------------------------
		console.log('jietong')
	}
	//检查是否同一个人的-------------------------------------------
	else if(req.query.action === 'login') {
		dbhandler['mgdbtdo']('finds', null, 'Administor', function(arr) {
			var userInfors = {}; //收集所有要插入到数据库内的数据
			// 密码加密的过程  ===》
			var MD5 = crypto.createHash('md5');
			var password = MD5.update(req.body.password).digest('base64'); //!!!!!!!
			dbhandler['mgdbtdo']('finds', {
				name: req.body.userName,
				password: password
			}, 'Administor', function(Fdata) {
				console.log(Fdata);
				if(Fdata.length != 0) {
					//			console.log(req.body) //访问到 post请求发送的数据/
					req.session.user.name = req.body.userName; //上面验证码端口如果不加载的话，这个以及下面的属性，都找不到
					req.session.user.phone = userInfors.phone;
					var MD5 = crypto.createHash('md5'); //
					var password2 = MD5.update(req.body.password).digest('base64'); //!!!!!!!
					req.session.user.password = password2;
					req.session.user.phone = Fdata[0].phone;
					req.session.user.id = Fdata[0]._id;
					console.log(req.session.user);
					res.send('<script>alert("登陆成功")</script>');
				} else {
					res.send('<script>alert("账号或密码错误")</script>');
				}

			})
			//----------------------------------------------------
		})
	} else if(req.query.action === 'quit') { //登陆后session注入信息才能注销清空，否则请登陆
		if(req.session.user) {
			req.session.user = {};
			console.log(req.session.user);
			res.send('<script>alert("注销成功")</script>');
		} else {
			res.send('<script>alert("请先登录")</script>');
		}
	}
})
//
//
//
//
router.post('/adminHandler', function(req, res) {
	if(req.query.action === 'udpass') {
		/*修改操作
		 原始密码：password，新密码newPwd
		 密码发送过来是得要加密
		 验证现在登录的密码和password是一样的
		 进行修改
		 * */
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.pword).digest('base64'); //---------
		if(req.session.user.password != password) {
			res.send('原始密码不对');
		} else {
			var md502 = crypto.createHash('md5');
			var password2 = md502.update(req.body.newPwd).digest('base64'); //--------
			//session里面还有登录的用户_id的值
			//准备操作数据
			var selector = [{
					'_id': new ObjectID(req.session.user.id),
				},
				{
					$set: {
						'password': password2, //数据库里面改的，要对应属性
						'updateat': new Date()
					}
				}
			];
			dbhandler['mgdbtdo']('upDates', selector, 'Administor', function(uppass) {
				console.log(uppass);
				if(uppass.length == 0) {
					res.send('修改失败');
				} else {

					res.send('修改成功')
				}
			})
		}
	} else if(req.query.action === 'udphone') {
		var selector = [{
				'name': req.session.user.name
			},
			{
				$set: {
					'phone': req.body.newp, //数据库里面改的，要对应属性
					'updateat': new Date()
				}
			}
		];
		if(req.session.user.name != req.body.zhanghao) {
			res.send('账号有误')
		} else {
			if(req.session.user.phone != req.body.oldp) {
				res.send('原手机号有误');
			} else {
				dbhandler['mgdbtdo']('upDates', selector, 'Administor', function(Pdata) {
					if(Pdata.length == 0) {
						res.send('修改失败');
					} else {

						res.send('修改成功')
					}
				})
			}
		}
	} else if(req.query.action === 'updateUp') { //update修改信息的练习
		//修改内容，前端会给我们发送：账号，手机，权限，姓名，tokenid
		var selector = [{
				'tokenId': parseInt(req.body.tokenId)
			},
			{
				$set: {
					'name': req.body.userName,
					'turename': req.body.turename,
					'phone': req.body.phone,
					'power': req.body.power,
					'updateat': new Date()
				}
			}
		];
		//数据库操作
		dbhandler['mgdbtdo']('upDate', selector, 'Administor', function(data) {
			if(data.result.n == 0) {
				res.send('修改失败')
			} else {
				res.send('修改成功')
			}
		})
	}
	/*
	 * 
	 * 
	 * 
	 */
	else if(req.query.action === 'delete'){
		dbhandler['mgdbtdo']('removes',{tokenId:parseInt(req.body.tokenId)},'Administor',function(Ddata){
			if(Ddata.length==0){
				res.send('删除失败');
			}else{
				//可以删除并进行进一步的操作
				//尝试在命令行进行修正修改，$Inc 在原来值上面进行加减操作
//				res.send('删除成功，但有bug')
				dbhandler['mgdbtdo']('finds',{tokenId:{$gt:parseInt(req.body.tokenId)}},'Administor',function(Dda){
					//Dda是删除了的数据后面的数据，tokenId待修改的
					//假设删除了第三条，那么下面的就是待修改的
					recUpdate(res,'Administor',Dda);//迭代处理tokenId值，即为修改
				})
			}
		})
	}
})
//
//
//
//
router.get('/adminHandler2', function(req, res) {
	if(req.query.action === 'show') {
		var sle1 = {
			'turename': {
				$regex: '.*' + req.query.searchText + '.*',
				$options: 'i'
			}
		}
		var sle2 = {
			'tokenId': {
				$gt: 2 * (parseInt(req.query.pageStart - 1)),
				$lte: 2 * (parseInt(req.query.pageStart))
			}
		} //分页查询的条件
		dbhandler['mgdbtdo']('finds', sle2, 'Administor', function(Sdata) {
			console.log(Sdata)
			if(Sdata.length == 0) {
				res.send('系统找不到');
			} else {
				//向前端返回的数据，每页有几条数据，一共有几条数据，当前查询到的结果返回
				dbhandler['mgdbtdo']('finds', null, 'Administor', function(arr) {
					var obj = {
						data: {
							pageSize: 2,
							count: arr.length,
							list: Sdata
						},
						success: '返回成功'
					}
					var str = JSON.stringify(obj);
					res.send(str);
				});
			}
		})
	}
})
//
//
//
//
//
router.post('/UploadVideo', function(req, res) {
	//这里写上传视频的功能
	//使用第三方模块
	var form = new formidable.IncomingForm(); //不能使用jquery上传。只能使用form表单上传
	//	关于上传的配置
	form.encoding = 'utf-8';
	form.uploadDir = './public/images'; //当前路径是以app.js所在路径为准
	form.maxFieldsSide = 100 * 1024 * 1024; //上传的文件大小
	form.maxFields = 1000;
	form.keepExtensions = true; //是否保留文件的拓展名
	//解析所上传的文件
	form.parse(req, function(err, fields, files) {
		console.log(fields); //文本域--{}
		console.log(files); //文件信息--{}

		res.send('上传成功')
	})
})

module.exports = router;