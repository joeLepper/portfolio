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

JoeLepper.navFunctions = (function(){
  var clickedOnce      = false
    , sectionLinks     = []
    , linkNodes        = [ document.getElementById('bio')
	                     , document.getElementById('contact')
				         , document.getElementById('site')
				         , document.getElementById('stepSync')
				         , document.getElementById('amenBreaker')
				         , document.getElementById('soundCloud')
				         , document.getElementById('refixes')]
	, contentHolders   = [ document.getElementById('aa010')
	                     , document.getElementById('aa020')
						 , document.getElementById('aa030')
						 , document.getElementById('ba010')
						 , document.getElementById('ba020')
						 , document.getElementById('ca010')
						 , document.getElementById('ca020')]
	, currentLinkIndex
	, _showDiv         = function(e){
		if(!clickedOnce){
	      clickedOnce = true;
	      $('#main').animate({left:'20px'},1000);
		  currentLinkIndex = e.currentTarget.linkIndex
		  
		  $(contentHolders[currentLinkIndex]).show()
		                                     .parent().css({top:window.innerHeight})
			   							     .delay(1500)
										     .animate({top:'0px'},2000);
		  $('body').css('overflow','scroll');
        }
		else{
		  $(contentHolders[currentLinkIndex]).fadeOut(1000);
		  $('body').css('overflow','hidden');
		  currentLinkIndex = e.currentTarget.linkIndex
		  
		  $(contentHolders[currentLinkIndex]).show()
		                                     .parent().css({top:window.innerHeight})
										     .animate({top:'0px'},2000);
		  $('body').css('overflow','scroll');
		}
	}
	  
  for( var i = 0; i < linkNodes.length; i++){
	linkNodes[i].linkIndex = i;
	linkNodes[i].addEventListener('click', _showDiv);
  }
  
    	
  $('.hide').hide();
  $('.accordion').click(function() {
	$(this).siblings('div').slideToggle("slow").toggleClass("open")
      .parent().siblings().children('div:visible').slideUp('fast').toggleClass("open");
  });
}());

JoeLepper.sectionAnis = (function(){
  $('body').css('overflow','hidden');
  $('.content_holder').hide();
}());

JoeLepper.initialAnis = (function(){
  $('#main').css({top:window.innerHeight,
                  left:(window.innerWidth / 2)})
}());

$(document).ready($('#main').delay(2000).animate({top: '40px'},2000));
