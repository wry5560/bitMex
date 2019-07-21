// import wsClient from './bitMexWs'
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var orderRouter = require('./routes/order');
var executionRouter = require('./routes/execution');
var levelPriceCelveRouter = require('./routes/levelPriceCelve');
var ejs = require('ejs')
var cors = require('cors')


// var {isTest,apiBaseUrl,testApiBaseUrl}=settings


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
//设置跨域
app.use(cors({credentials: true, origin:['http://localhost:8080','http://47.245.26.247','http:127.0.0.1']}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/order', orderRouter);
app.use('/execution', executionRouter);
app.use('/levelPriceCelve', levelPriceCelveRouter);

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
