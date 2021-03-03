var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/productRouter');
var adminRouter = require("./routes/adminRouter");
const session = require('express-session');
const localCheck = require("./middlewares/localCheck");
const cookieCkeck = require("./middlewares/cookieCheck")
const adminCheck = require("./middlewares/adminCheck");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


/* middlewares */
app.use(session({secret: "Mi Secreto", resave: false, saveUninitialized: true}));
app.use(localCheck);
app.use(cookieCkeck);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use("/admin", adminCheck, adminRouter);

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
