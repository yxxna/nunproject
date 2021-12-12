$(function() {
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
        slidesNavigation:true,
        slidesNavPosition:true,
	});
  $('.logo-image').click(function(){
    location.href = "/";
  });

  $('.intogame-btn').click(function(){
    location.href = "/main";
  });

});