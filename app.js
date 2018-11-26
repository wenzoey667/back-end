var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var isloginRouter = require('./routes/isLogin');
var outLogin = require('./routes/outLogin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({
  name:'aaaa',
  secret:'caibudaoba',
  cookie:{maxAge:1000*3600},
  resave:true,
  saveUninitialized:false
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/islogin',isloginRouter);
app.use('/outLogin',outLogin);

app.use((req,res)=>{
	if(req.url === '/favicon.ico'){
		return;
	}
	res.redirect('/');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
