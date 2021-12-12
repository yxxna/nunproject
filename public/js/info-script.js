$(function(){

        $('#fullpage').fullpage({
            //options here
            autoScrolling:true,
            scrollHorizontally: true,
            navigation: true,
            navigationPosition: 'right'
        });
        
        $('.logo-image').click(function(){
            location.href = "/";
        });

        $('.move-to-main-completed01').click(function(){
            location.href = "/main";
        })
});
