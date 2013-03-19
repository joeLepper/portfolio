var http = require("http");
var url = require("url");

var start = function(app){

  app.listen(80);
  console.log("server has started");
	
};
exports.start = start;