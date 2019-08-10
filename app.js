// import wsClient from './bitMexWs'
import loginUsersModel from "./moudles/loginUsers/loginUsers.server.service";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var logger = require('./lib/log4js');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var orderRouter = require('./routes/order');
var logRouter = require('./routes/logApi');
var loginRouter = require('./routes/login');
var executionRouter = require('./routes/execution');
var levelPriceCelveRouter = require('./routes/levelPriceCelve');
var ejs = require('ejs')
var cors = require('cors')

import loginUsersControl from  './moudles/loginUsers/loginUsers.server.controllar'

// var {isTest,apiBaseUrl,testApiBaseUrl}=settings


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

logger.use(app);
//设置跨域
app.use(cors({credentials: true, origin:['http://localhost:8080','http:127.0.0.1','http://47.240.17.43:8080','http://47.240.17.43','http://47.240.17.43:80','http://localhost:8081']}));
// app.use(logger('dev'));

// 使用 session 中间件
app.use(session({
  secret :  'bitmex', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
    maxAge : 1000 * 60 * 60, // 设置 session 的有效时间，单位毫秒
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  let url = req.originalUrl;
  // logger.logger.info(req.session)
  if (url == '/permission' && req.session.userName){
    loginUsersModel.find({userName:req.session.userName})
        .then( user => {
          return res.send({
            success:true,
            message:'already login',
            user:user,
          });
        })
        .catch(error =>{
          return res.send({
            success:false,
            error:'login error',
            message:'need to login'
          });
        })
  }
  // else if (url != "/login" && url != "/login/password"  && !req.session.userName) {
  // return res.send({
  //   success:false,
  //   error:'login error',
  //   message:'need to login'
  // });
// }
  else {
    next();
  }
});


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/order', orderRouter);
app.use('/execution', executionRouter);
app.use('/levelPriceCelve', levelPriceCelveRouter);
app.use('/logApi', logRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
global.test = "ydr.me";
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
