var namespace = function(namespaceString) {
  var parts = namespaceString.split('.'),
    parent = window,
    currentPart = '';    

    for(var i = 0, length = parts.length; i < length; i++) {
      currentPart = parts[i];
      parent[currentPart] = parent[currentPart] || {};
      parent = parent[currentPart];
    }

  return parent;
}
//instantiate a namespace
var joeLepper = namespace('JoeLepper');

JoeLepper.navMenu = (function(){
  $(".nav_item").each(function(index){
	console.log($(this));  
  })
}());