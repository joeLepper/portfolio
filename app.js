var express        = require('express'),
    server         = require('./server'),
    requestHandler = require("./request"),
    app            = express(),
	passport       = require('passport'),
	database       = require('./database'),
	LocalStrategy  = require('passport-local').Strategy,
	flash          = require('connect-flash');

app.configure(function(){
	app.use(express.cookieParser('aL7EIjJTl7pL'));
	app.use(express.bodyParser());
	app.use(express.session());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(__dirname + '/static'));
	app.use(flash());
});

passport.use(new LocalStrategy(
  function(username,password,done){
    database.finduser({username:username},function(err,user){
      if(err){ return done(err); }
	  if(!user){
        return done(null, false, {message:'Unknown user'});  
      }
	  if(!user.verify(password)){
        return done(null, false, {message: 'Invalid password'});  
      }
	  return done(null, user);
	});
  }
));

passport.serializeUser(function(user, done) {
  console.log("FIRED!")
  console.log(user[0].email)
  done(null, user[0].email);
});

passport.deserializeUser(function(id, done) {
  database.finduser({email:id}, function (err, user) {
    done(err, user);
  });
});

app.get("/",function(req, res){
  requestHandler.start(req,res);  
});
app.get("/blog",function(req, res){
  res.redirect('/blog/1');  
});
app.get("/blog/:page",function(req, res){
  requestHandler.blog(req,res);  
});
app.get("/juggler",function(req, res){
  res.send("juggler/index.html");  
});
app.get("/shuffler",function(req, res){
  res.send("shuffler/index.html");  
});
app.get("/newpost",function(req,res){
  requestHandler.newPost(req,res);
});
app.get("/blog/entry/:id", function(req,res){
  requestHandler.singlePost(req,res);
});
app.post("/blog/show",function(req,res){
  requestHandler.show(req,res);	
});
app.get('/signin',function(req,res){
  requestHandler.signin(req,res);
});
app.get('/create',function(req,res){
  requestHandler.create(req,res);
});
app.get('/logout',function(req,res){
  req.logOut();
  res.redirect('/')
});
app.post('/verifycreate', function(req,res){
  requestHandler.verifyCreate(req,res)
});
app.post('/login', passport.authenticate('local', { successRedirect: '/newpost',
                                                    failureRedirect: '/signin',
													failureFlash: true })
);

app.set("views", __dirname + "/views");

server.start(app);