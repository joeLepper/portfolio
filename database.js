var mongoose = require('mongoose'), 

	date = new Date()
	db = mongoose.createConnection('localhost','test'),
	blogPostSchema = new mongoose.Schema({                                               //create a schema
      title   : String,
      content : String,
	  date    : Date,
	  type    : String                                                                      //key:Type pairs go here
    }),
	
	userSchema = new mongoose.Schema({
      username: String,
	  password: String,
	  email:    String
	}),
	
	BlogPost = db.model('BlogPost',blogPostSchema),
	UserProfile = db.model('UserProfile',userSchema),                                                    //import mongoose
	
	retrieve = function(contentTitle, callback){
        BlogPost.find({title:contentTitle},function(err,results){                                //query the server for all kittens named "Silence"
          if(err){                                                                               //handle the error
      	    console.log(err)	
      	  }
      	  else{
            callback(results);
		  }
        });
	},
	create = function(content, callback){
	  currentDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();
	  newPost = new BlogPost({title:content.title, content:content.content, date: currentDate, type:"blogPost"}); //use the model to create a record
      newPost.save(function(err){                                                              //save to the DB
        if(err){                                                                               //handle saving errors
          console.log(err);	
        }
		else console.log({title:content.title, content:content.content, date: currentDate, type:"blogPost"}) ;
      });	
	},
	retrieveAll = function(callback){
      BlogPost.find({type:"blogPost"},function(err,results){                                //query the server for all kittens named "Silence"
        if(err){                                                                               //handle the error
      	  console.log(err)	
      	}
      	else{
		  callback(results);  
		}
      });
          
    },
	createUser = function(user,callback){
	  var undefined;
      UserProfile.find({username:user.username}, function(err, results){
		console.log(results[0]);
		console.log(results[0] === undefined);
		if (results[0] === undefined){
          if(user.pass === user.repass){
			console.log('success')
            newUser = new UserProfile({username:user.username,password:user.pass,email:user.email});
			newUser.save(function(err){
			  if(err){
				console.log(err)  
			  }
			  else{
				  callback('Successfully created.', true)
			  }
			})
          }
		  else{
			callback("Passwords don't match, try again.", false)  
		  }
		}
		else{
		  callback("User already exists. Choose a new name.", false)	
		}
      })
	},
	findUser = function(user,callback){
      UserProfile.find(user, function(err,results){
		results.verify = function(_password){ 
		  return _password === this[0].password ? true : false
		};
		if(err){
          callback(err);
		}
		else if(!results){
          callback(false, false);
		}
		else{
          callback(false, results);
		}  
      })
	};
	
exports.create      = create;
exports.retrieve    = retrieve;
exports.retrieveAll = retrieveAll;
exports.finduser    = findUser;
exports.createUser  = createUser

	
