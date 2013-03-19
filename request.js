var querystring = require("querystring"),
    fs          = require("fs"),
	formidable  = require("formidable"),
	database    = require("./database"),
	frontmodel  = require("./frontmodel"),
	
	

			/*************************************************************/
			/*                                                           */
			/*                     BLOG HANDLERS                         */
			/*                                                           */
			/*************************************************************/


    /*
	 *Main call for the blog, pulls up 10 most recent entries and displays them
	 */
    blog = function(req,res){
      var wordArray;
      
	  //fetch all of the blog entries
	  database.retrieveAll(function(dbRes){
        
		//they're retrieved in reverse-chronological order, 
		//we'll need to reverse that
		dbRes.reverse();
		
		//creates the links to single posts
		for(entry in dbRes){
          
		  //all single posts are displayed in this directory
		  var forTitleLink = "entry/"
		  
		  //turn the title of each post into a link that looks_like_this
		  wordArray = dbRes[entry].title.split(" ");
		  for(word in wordArray){
			
			if(word === "0"){
			  forTitleLink += wordArray[word];
			}
			else{
              forTitleLink += "_" + wordArray[word];
			};
          };
		  
		  //drop the link into the db object
		  dbRes[entry].postLink = forTitleLink;
		};
		
		//build the page and pass in the db object
		res.render('blogfront.jade',{vars:dbRes,page:parseInt(req.params.page)});
	  });
    },
	
	
	/*
	 *Used to create a new user. Will be turned off.
	 */
	create = function(req,res){
      error = req.flash('error')
	  res.render('create.jade',{vars:{error:error}});
	},
	
	
	/*
	 *Used to create a new blog post
	 */
	newPost = function(req,res){
	  //check if the user is logged in as the admin
	  try{
		//if we're logged in as root, proceed unfettered
        if(req.user[0].username === 'joey'){
          res.render('newpost.jade');
        }
		//if not admin, boot to the site root
		else{
          res.redirect('/');
        };
	  }
	  //if there is no req.user, redirect to the signin screen
	  catch(err){
		res.redirect('/signin');
	  };
	},
	
	/*
	 *Shows the just-created post to the writer
	 */
	show = function(req,res){
      var title   = req.param('title', null),
	      content = req.param('content', null);
		  res.render('singlepost.jade',{vars:{title:title,content:content}})
          database.create({title:title, content:content})
    },
	
	/*
	 *Signin form
	 */
	signin = function(req,res){
      error = req.flash('error')
      res.render('login.jade',{vars:{error:error}});
    },
	
	/*
	 *Shows a single post to the user
	 */
	singlePost = function(req,res){
	  var id = req.params.id,
	      postTitle = "",
          wordArray = id.split("_");
		  for(word in wordArray){
			
			if(word === "0"){
			  postTitle += wordArray[word];
			}
			else{
              postTitle += " " + wordArray[word];
			};
          };
		  database.retrieve(postTitle, function(dbRes){
			res.render('singlepost.jade',{vars:dbRes[0]})
		  });
      
	},
	
	/*
	 *Checks that the newly-created user doesn't already exist
	 *TODO: create some checks for valid email / username / password
	 */
	verifyCreate = function(req,res){
      var userProfile = {
        username: req.body.username,
	    pass:     req.body.password,
	    repass:   req.body.repassword,
		email:    req.body.email
	  };
	  database.createUser(userProfile, function(dbRes, success){
		if(success){ res.redirect('/');}
		else{res.render('create.jade',{vars:{error:dbRes}})};
	  })
    },
	
			/*************************************************************/
			/*                                                           */
			/*                     FRONT HANDLERS                        */
			/*                                                           */
			/*************************************************************/
	/*
	 *Retrieves and renders the root of the site
	 */
	start = function(req,res){
      console.log('start called')
	  res.render('root.jade',{vars:frontmodel.model});
	};

			/*************************************************************/
			/*                                                           */
			/*                         EXPORTS                           */
			/*                                                           */
			/*************************************************************/

exports.blog         = blog;
exports.show         = show;
exports.newPost      = newPost;
exports.singlePost   = singlePost;
exports.start        = start;
exports.signin       = signin;
exports.create       = create;
exports.verifyCreate = verifyCreate;