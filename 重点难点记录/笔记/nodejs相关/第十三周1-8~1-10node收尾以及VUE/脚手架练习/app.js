var express = require('express');
var path = require('path');//-------
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');//---------
var bodyParser = require('body-parser');//-------------

var session = require('express-session');//第三方模块，需要下载，用来储存用户的登录信息，服务器里面，经常性地储存用户信息的地方，依赖于cookieParser；这是一块特殊区域，当网页跳转的时候，数据就会消失---------
var flash = require('connect-flash');//第三方，也是需要下载------------

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//-------------
app.use(flash())//先有cookie再有flash------------------
app.use(session({//----------------------
	name:'fcht',//储存session_id的cookie名称
							//默认值connect.sid
	secret:'fcht',
	cookie:{
		maxAge:80000000,//设置cookie的失效时间
	},
	resave:false,//每次请求是否都重新设置session
	saveUninitialized:false//每次请求是否初始化session
}))//设置储存的用户信息，这么设置，可以通过req.session.xxx访问到我储存在session里面的内容----------
app.use(express.static(path.join(__dirname, 'public')));//-------------

app.use('/VueHandler', index);//加载路由------------
//
app.use('/users', users);

//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//var err = new Error('Not Found');
//err.status = 404;
//next(err);
//});
//
//// error handler
//app.use(function(err, req, res, next) {
//// set locals, only providing error in development
//res.locals.message = err.message;
//res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//// render the error page
//res.status(err.status || 500);
//res.render('error');
//});
//
module.exports = app;
