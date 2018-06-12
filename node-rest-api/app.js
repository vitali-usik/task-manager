var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var products = require('./routes/products');
var tasks = require('./routes/tasks');

// restful
// var restful = require('node-restful');
// var methodOverride = require('method-override');

var app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/product')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

mongoose.connect('mongodb://localhost/task')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({'extended':'true'}));
// app.use(bodyParser.json({type:'application/vnd.api+json'}));
// app.use(methodOverride());

var cors = require('cors');
// use it before all route definitions
app.use(cors({origin: 'http://localhost:8080'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);
app.use('/tasks', tasks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // res.setHeader('Access-Control-Allow-Origin', '*');
  //  // Request methods you wish to allow
  //  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  //  // Request headers you wish to allow
  //  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  //  // Set to true if you need the website to include cookies in the requests sent
  //  // to the API (e.g. in case you use sessions)
  //  res.setHeader('Access-Control-Allow-Credentials', true);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
